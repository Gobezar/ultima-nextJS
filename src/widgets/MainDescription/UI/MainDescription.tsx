import HeaderBlock from "@/shared/UI/HeaderBlock/UI/HeaderBlock";
import React from "react";

const MainDescription = () => {
  return (
    <div className="bg-[#171717] pt-[130px]" id="mainDescription">
      <HeaderBlock text="Детейлинг-центр Ультима - чем мы здесь занимаемся" />
      <div
        className="flex mt-[87px] items-center justify-center max-w-[1372px] mx-auto h-fit
        laptop:mt-[65px] laptop:max-w-[1150px]
        tablet:mt-[50px] tablet:max-w-[685px]
        mobile:flex-col mobile:mt-[40px] overflow-x-auto mobile:max-w-[100%]
        mobile:px-[20px]
      "
      >
        <p className="font-normal text-[17px] laptop:text-[15px] mobile:text-[13px] text-[#FFFFFFD6] text-justify leading-[28px]">
          <span className="text-[#D1933C] font-bold text-[20px] laptop:text-[18px] mobile:text-[15px]">Ультима</span> — это профильный детейлинг - центр в Саратове, где ваш
          автомобиль получает комплексное обслуживание премиум-уровня. Мы не
          занимаемся ремонтом в классическом понимании. Наша специализация —
          возвращение идеального внешнего вида, глубокая защита кузова и салона,
          а также создание неповторимого стиля с помощью современных пленок и
          покрытий. Опытные мастера, оборудование нового поколения и топовые
          материалы (Llumar, SunTek, RUPES) — это основа нашего результата,
          который мы гарантируем. Доверьте свой автомобиль профессионалам,
          которые заботятся о нем как о собственном.
        </p>
      </div>
    </div>
  );
};

export default MainDescription;
