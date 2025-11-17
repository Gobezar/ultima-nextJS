import CarCleaningIcon from "@/shared/assets/icons/CarCleaningIcon";
import LikeIcon from "@/shared/assets/icons/LikeIcon";
import ProtectIcon from "@/shared/assets/icons/ProtectIcon";
import HeaderBlock from "@/shared/UI/HeaderBlock/UI/HeaderBlock";
import React from "react";
import AdvantageItem from "../lib/AdvantageItem";

const items = [
  {
    id: 1,
    title: "Гарантия качества ",
    description:
      "Мы используем качественные материалы, ведь только с помощью них можно добиться идеального результата.",
    icon: <ProtectIcon />,
  },
  {
    id: 2,
    title: "Высокая квалификация мастеров",
    description:
      "В нашей команде работают исключительно опытные мастера, которые найдут индивидуальный подход к каждому клиенту.",
    icon: <CarCleaningIcon />,
  },
  {
    id: 3,
    title: "Широкий спектр услуг",
    description:
      "С помощью оборудования нового поколения мы оказываем множество услуг, соблюдая установленные сроки.",
    icon: <LikeIcon />,
  },
];

const Advantages = () => {
  return (
    <div className="bg-[#171717] pt-[130px]">
      <HeaderBlock text="Преимущества" />
      <div
        className="flex mt-[87px] items-center justify-center gap-[160px] w-full mx-auto bg-[#2D2D2D] h-fit pt-[42px] pb-[66px]
        laptop:gap-[100px] laptop:mt-[65px]
        tablet:gap-[70px] tablet:mt-[50px] tablet:pt-[30px] tablet:px-[20px]
        mobile:gap-[30px] mobile:flex-col mobile:py-[40px] mobile:mt-[40px]
      "
      >
        {items.map((item) => {
         return <AdvantageItem item={item} key={item.id}/>
        })}
      </div>
    </div>
  );
};

export default Advantages;
