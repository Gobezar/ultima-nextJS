import classNames from "classnames";
import React from "react";

interface IAdvantageItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
}

const AdvantageItem = ({ item }: { item: IAdvantageItem }) => {
  return (
    <div className="relative flex flex-col items-center gap-[25px] justify-between max-w-[350px] 
        laptop:max-w-[310px]
        tablet:h-[310px]
        mobile:max-w-[250px] mobile:h-fit">
      <div className="absolute bottom-[80px] inset-0 flex justify-center items-center pointer-events-none z-0">
        <span className="font-medium text-[250px] leading-[24px] text-[#55555540] select-none
            laptop:text-[200px]
            tablet:text-[160px]
            mobile:text-[110px]">{`0${item.id}`}</span>
      </div>
      <div className="z-1 
        laptop:[&>svg]:w-[100px] laptop:[&>svg]:h-[100px]
        tablet:[&>svg]:w-[80px] tablet:[&>svg]:h-[80px]
        mobile:[&>svg]:w-[56px] mobile:[&>svg]:h-[56px]">
        {item.icon}
        </div>
      <div className="text-center font-semibold text-[25px] leading-[24px] text-[#FFFFFF] z-1 
            laptop:text-[23px]
            tablet:text-[21px]
            mobile:text-[17px]
            ">
        <span>{item.title}</span>
      </div>
      <div
        className={classNames(
          "text-center font-normal text-[17px] leading-[24px] text-[#FFFFFF] z-1 laptop:text-[15px] mobile:text-[13px] ",
          (item.id === 1 || item.id === 3) && "mt-[24px] mobile:mt-[0px]"
        )}
      >
        <span>{item.description}</span>
      </div>
    </div>
  );
};

export default AdvantageItem;
