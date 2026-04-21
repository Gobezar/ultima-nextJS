import React from "react";

interface HeaderBlockProps {
  text: string;
  level?: number; 
}

const HeaderBlock = ({ text, level = 1 }: HeaderBlockProps) => {
  const sizes = {
    1: "text-[32px] laptop:text-[30px] tablet:text-[25px] mobile:text-[20px] leading-[40px] tablet:leading-[32px] mobile:leading-[24px]",
    2: "text-[24px] laptop:text-[22px] tablet:text-[18px] mobile:text-[16px] leading-[34px] tablet:leading-[28px] mobile:leading-[22px]",
  };

  const currentSizeClass = sizes[level as keyof typeof sizes] || sizes[1];

  return (
    <div className="flex flex-col items-center font-montseratt">
      <div
        className={`mb-[23px] font-semibold text-[#FFFFFFDB] text-center  mobile:px-[20px] ${currentSizeClass}`}
      >
        <h2>
          {text.toUpperCase()}
        </h2>
      </div>
      <div className="w-[134px] h-[2px] bg-[conic-gradient(from_180deg_at_50%_50%,#F7BB03_0deg,#F78703_360deg,#F7B303_360deg)]"></div>
    </div>
  );
};

export default HeaderBlock;
