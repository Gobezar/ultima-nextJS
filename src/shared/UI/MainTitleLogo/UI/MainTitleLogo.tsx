"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import mainTitleLogo from "@/shared/assets/images/mainTitltLogo_2.png";
// import mainTitleLogo from "@/shared/assets/images/ultimaStandart.png";
import { IAdvantage } from "../types";
import AdvantageItem from "./AdvantageItem";
import { useMediaQuery } from "@/shared/helpers/hooks/useMediaQuery";
import UltimaWhite from "@/shared/assets/images/ultimaWhite.png";

const advantages: IAdvantage[] = [
  {
    id: 1,
    title: "Гарантия качества",
    description: "Полная материальная ответственность за результат",
    icon: "lucide:shield-check",
  },
  {
    id: 2,
    title: "Рейтинг 5.0",
    description: "Высшая оценка клиентов на Яндекс.Картах",
    icon: "lucide:star",
  },
  {
    id: 3,
    title: "Соблюдение сроков",
    description: "Пунктуальность — основа нашего сервиса",
    icon: "lucide:clock",
  },
  {
    id: 4,
    title: "Доверие",
    description: "Более 7 лет опыта и сотни довольных владельцев",
    icon: "lucide:users",
  },
  {
    id: 5,
    title: "Прозрачность",
    description: "Полный фото и видео отчет о проделанных работах",
    icon: "lucide:camera",
  },
  {
    id: 6,
    title: "Премиум материалы",
    description: "Только сертифицированные оригинальные составы",
    icon: "lucide:droplets",
  },
];

const MainTitleLogo = ({ className }: { className?: string }) => {
  const [visible, setVisible] = useState(false);
  const { breakPoint } = useMediaQuery();
  const isMobile = breakPoint === "mobile";

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

 if (isMobile) {
  return (
    <div className="absolute top-[44%] -translate-y-1/2 left-0 w-full z-10 h-auto flex flex-col items-center">
      <div 
        className={`flex flex-col items-center w-[90%] transition-all duration-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="font-montseratt text-[23px] font-bold text-[#FFFFFF] text-center">
          <span className="text-[#D1933C]">Детейлинг</span> в Саратове
        </h1>
        
        <div className="w-[115px] h-[2px] bg-[#D1933C] mt-3 mb-3"></div>
        
        <Image
          src={UltimaWhite}
          alt="ultima white"
          width={150}
          height={150}
        />
        
        <h3 className="font-montseratt text-[18px] text-[#FFFFFF] text-center mt-5 leading-[25px]">
          Профессиональный уход <br /> за Вашим автомобилем
        </h3>
      </div>
    </div>
  );
}

  return (
    <div
      className="
        absolute top-[45%] -translate-y-1/2 
        left-4 laptop:left-[115px] desktop:left-[150px] 
        z-10 
        tablet:left-1/2 tablet:-translate-x-1/2
        tablet:w-full tablet:flex tablet:flex-col tablet:items-center
        mobile:h-auto mobile:top-[44%]
      "
    >
        <div
          className={`transition-all duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <h1 className="font-montseratt text-[42px] font-bold leading-none text-[#FFFFFF] laptop:text-[35px] tablet:text-[35px] tablet:text-center mobile:text-[23px]">
            <span className="text-[#D1933C]">Детейлинг</span> в Саратове
          </h1>
          {/* Центрируем оранжевую полоску на планшетах через mx-auto */}
          <div className="w-[87px] h-[2px] bg-[#D1933C] mt-4 mb-10 tablet:mb-6 tablet:mx-auto mobile:mb-3"></div>
        </div>

        <div
          className={`grid grid-cols-2 mobile:grid-cols-1 gap-x-12 gap-y-10 laptop:gap-x-3 laptop:gap-y-3 tablet:gap-y-3 p-6 tablet:p-5 tablet:ml-0 mobile:p-3 mobile:max-h-[300px] mobile:overflow-y-auto rounded-[30px] transition-all duration-1000 smallHeight:hidden ${
            visible
              ? "opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black/5 backdrop-blur-[10px] tablet:backdrop-blur-[50px]"
              : "opacity-0"
          }`}
        >
          {advantages.map((adv, index) => (
            <AdvantageItem
              key={adv.id}
              item={adv}
              index={index}
              visible={visible}
              isMobile={isMobile}
            />
          ))}
        </div>
    </div>
  );
};

export default MainTitleLogo;
