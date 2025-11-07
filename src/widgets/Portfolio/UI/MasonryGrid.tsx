"use client";

import React, { useMemo } from "react"; // Импортируем useMemo
import { motion, AnimatePresence } from "framer-motion";

interface MasonryGridProps {
  items: {
    id: string;
    size: "small" | "large";
    title: string;
    car: string;
    coverImage: string;
  }[];
  columns?: number;
  onItemClick: (arg: any) => void;
}

const getArea = (size: string): number => {
  switch (size) {
    case "large": return 4;
    case "small": return 1;
    default: return 1;
  }
};

const MasonryGrid = React.memo(
  ({ items, columns = 4, onItemClick }: MasonryGridProps) => {
    
    const sortedItems = useMemo(() => {
      return [...items].sort((a, b) => getArea(b.size) - getArea(a.size));
    }, [items]); 

    return (
      <div
        className="gap-4 p-4 w-full max-w-[1000px] aspect-square cursor-pointer"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: "repeat(4, 1fr)",
          gridAutoFlow: "dense",
          gridAutoRows: "0",
        }}
      >
        <AnimatePresence mode="popLayout">
          {sortedItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              transition={{ duration: 0.8, type: "spring" }}
              className={`bg-[#2d2d2d] text-white rounded-xl flex items-center justify-center overflow-hidden
               ${item.size === "large" ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}`}
              onClick={() => onItemClick(item)}
            >
              <div
                className="
                  w-full h-full 
                  flex flex-col items-center justify-start 
                  text-center 
                  bg-cover bg-center bg-no-repeat 
                  text-white
          
                  transition-transform duration-300 ease-out hover:scale-105
                "
                style={{
                  backgroundImage: `url(${item.coverImage})`,
                }}
              >
                <div className={`backdrop-blur-[20px] rounded-tl-xl rounded-tr-xl w-full px-[10px] ${item.size === 'small' ? 'py-[10px]' : 'py-[25px]'}`}>
                <p className="font-semibold text-[17px] laptop:text-[15px] mobile:text-[13px]">{item.car}</p>
                <p className="text-[17px] laptop:text-[15px] mobile:text-[13px] text-gray-200">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  }
);
MasonryGrid.displayName = 'MasonryGrid'

export default MasonryGrid;