import React from "react";
import { Icon } from "@iconify/react";

interface IAdvantageItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const AdvantageItem = ({ item }: { item: IAdvantageItem }) => {
  return (
    <div className="relative flex flex-col items-center gap-[20px] max-w-[450px] mx-auto">
      {/* Фоновая цифра */}
      <div className="absolute top-[-20px] inset-0 flex justify-center items-center pointer-events-none z-0">
        <span className="font-medium text-[200px] leading-none text-[#55555540] select-none
            laptop:text-[150px]
            tablet:text-[120px]
            mobile:text-[100px]">
          {item.id < 10 ? `0${item.id}` : item.id}
        </span>
      </div>

      {/* Иконка */}
      <div className="z-10 text-[#FFFFFF]">
        <Icon 
          icon={item.icon} 
          color="#F7BB03"
          className="w-[80px] h-[80px] laptop:w-[70px] laptop:h-[70px] tablet:w-[60px] tablet:h-[60px] mobile:w-[50px] mobile:h-[50px]" 
        />
      </div>

      {/* Текстовый контент */}
      <div className="text-center font-semibold text-[23px] leading-tight text-[#FFFFFF] z-10 
            laptop:text-[21px]
            mobile:text-[17px]">
        {item.title}
      </div>

      <div className="text-center font-normal text-[17px] leading-[1.4] text-[#CCCCCC] z-10 
            laptop:text-[15px] 
            mobile:text-[13px]">
        {item.description}
      </div>
    </div>
  );
};

export default AdvantageItem;