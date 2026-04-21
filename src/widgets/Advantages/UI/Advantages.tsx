import React from "react";
import { Icon } from "@iconify/react";
import HeaderBlock from "@/shared/UI/HeaderBlock/UI/HeaderBlock";
import AdvantageItem from "../lib/AdvantageItem";

const items = [
  {
    id: 1,
    title: "Эстетика, которая заметна каждому",
    description: "Благодаря полировке и защитным покрытиям кузов обретает идеальную гладкость, глубину цвета и зеркальный блеск. Ваш авто будет выгодно выделяться из потока.",
    icon: "mdi:eye-outline",
  },
  {
    id: 2,
    title: "Эмоции от обновленного автомобиля",
    description: "Чувство, когда садишься в машину после детейлинга, сравнимо с покупкой нового авто в салоне! Мы возвращаем радость от владения каждой деталью.",
    icon: "mdi:resistor",
  },
  {
    id: 3,
    title: "Защита, которая работает на вас",
    description: "Керамика и антигравийные пленки защищают от сколов, царапин, реагентов и выцветания, сохраняя высокую ликвидность автомобиля при перепродаже.",
    icon: "mdi:shield-check-outline",
  },
  {
    id: 4,
    title: "Здоровье и комфорт в салоне",
    description: "Удаляем пылевых клещей, бактерии и аллергены. В результате вы дышите чистым воздухом, а поездки перестают быть испытанием для организма.",
    icon: "mdi:air-filter",
  },
  {
    id: 5,
    title: "Гарантия качества",
    description: "Мы используем только проверенные премиальные материалы, которые гарантируют безупречный результат и долговечность каждого покрытия.",
    icon: "mdi:seal-variant",
  },
  {
    id: 6,
    title: "Высокая квалификация мастеров",
    description: "В нашей команде работают опытные специалисты, прошедшие сертификацию и знающие все тонкости работы с современными лакокрасочными покрытиями.",
    icon: "mdi:account-wrench-outline",
  },
];

const Advantages = () => {
  return (
    <div className="bg-[#171717] pt-[130px]">
      <HeaderBlock text="Неоспоримые преимущества детейлинга для клиентов" />
      <div
        className="mt-[87px] w-full mx-auto bg-[#2D2D2D] p-[60px]
                   grid grid-cols-2 gap-x-[100px] gap-y-[80px]
                   laptop:gap-x-[60px] laptop:mt-[65px]
                   tablet:p-[40px] tablet:gap-y-[60px]
                   mobile:grid-cols-1 mobile:gap-y-[40px] mobile:mt-[40px] mobile:px-[20px]"
      >
        {items.map((item) => (
          <AdvantageItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Advantages;