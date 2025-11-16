import React from "react";
import Map from "./Map";

const Contacts = () => {
  return (
    <>
      <div className="pt-[122px] pb-[127px] w-full bg-[#272727] flex relative mobile:pt-[50px] mobile:pb-[50px] mobile:bg-[#2D2D2D] mobile:flex-col">
        <div className="w-[50%] flex justify-center mobile:hidden">
          <div className="flex flex-col items-start text-left halfContainer">
            <span
              className="font-semibold text-[32px] leading-[29px] text-[#FFFFFFDB]
            laptop:text-[30px]
            tablet:text-[25px]
            font-montseratt"
            >
              НАШИ КОНТАКТЫ
            </span>
            <div className="w-[87px] h-[2px] bg-[conic-gradient(from_180deg_at_50%_50%,#F7BB03_0deg,#F78703_360deg,#F7B303_360deg)] mt-[13px] mb-[48px]"></div>
            <span className="font-semibold text-[20px] leading-[24px] text-[#FFFFFF] laptop:text-[17px] mb-[30px]">
              Телефон <span className="font-light">+79027172777</span>
            </span>

            <span className="font-semibold text-[20px] leading-[24px] text-[#FFFFFF] mb-[30px] laptop:text-[17px] ">
              Пн-Вс: <span className="font-light">10:00 — 19:00</span>
            </span>
            <span className="font-semibold text-[20px] leading-[24px] text-[#FFFFFF] laptop:text-[17px] ">
              г. Саратов, ул. Танкистов, 84А
            </span>
          </div>
        </div>
        <div className="w-[50%] flex justify-center mobile:hidden">
          <div className="flex w-[50%] flex-col items-start text-left halfContainer">
            <span
              className="font-semibold text-[32px] leading-[29px] text-[#FFFFFFDB]
            laptop:text-[30px]
            tablet:text-[25px] tablet:size-max
            font-montseratt"
            >
              КАК НАС НАЙТИ
            </span>
            <div className="w-[87px] h-[2px] bg-[conic-gradient(from_180deg_at_50%_50%,#F7BB03_0deg,#F78703_360deg,#F7B303_360deg)] mt-[13px] mb-[48px]"></div>
            <div className="w-[50%]">
              <Map />
            </div>
          </div>
        </div>
        {/* Мобильная версия */}
        <div className="w-full justify-center flex-col items-center desktop:hidden laptop:hidden tablet:hidden mobile:flex ">
          <span
            className="font-semibold text-[#FFFFFFDB]
            text-[20px] font-montseratt"
          >
            НАШИ КОНТАКТЫ
          </span>
          <div className="w-[87px] h-[2px] bg-[conic-gradient(from_180deg_at_50%_50%,#F7BB03_0deg,#F78703_360deg,#F7B303_360deg)] w-[81px] mt-[5px] mb-[20px]"></div>
          <span className="font-semibold leading-[24px] text-[#FFFFFF] text-[15px]">
              Телефон: <span className="font-light">+79027172777</span>
            </span>
            <span className="font-semibold leading-[24px] text-[#FFFFFF] text-[15px] mb-[10px]">
              Пн-Вс: <span className="font-light">10:00 — 19:00</span>
            </span>
            <span className="font-semibold leading-[24px] text-[#FFFFFF] text-[15px]">
              г. Саратов, ул. Танкистов, 84А
            </span>
        </div>
      </div>
    </>
  );
};

export default Contacts;
