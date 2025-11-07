import React from "react";

interface Props {
  items: {
    id: string;
    size: "small" | "large";
    title: string;
    car: string;
    coverImage: string;
  }[];
  gap?: string;
  className?: string;
  onItemClick: (arg: any) => void;
}

const MasonryGridMobile = ({
  items,
  gap = "4",
  className = "",
  onItemClick,
}: Props) => {
  const gapClass = `gap-${gap}`;

  return (
    <div className={`w-full ${className}`}>
      <div className={`grid grid-cols-2 ${gapClass}`}>
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-square flex items-center justify-center bg-[#2d2d2d] rounded-md overflow-hidden"
          >
            <div
              className="w-full h-full flex items-center justify-center bg-[#2d2d2d] rounded-md overflow-hidden"
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
                <div
                  className={`backdrop-blur-[20px]  w-full px-[10px] py-[10px]`}
                >
                  <p className="font-semibold text-[17px] laptop:text-[15px] mobile:text-[13px]">
                    {item.car}
                  </p>
                  <p className="text-[17px] laptop:text-[15px] mobile:text-[13px] text-gray-200">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGridMobile;
