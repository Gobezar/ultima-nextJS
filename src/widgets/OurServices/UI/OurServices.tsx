import HeaderBlock from "@/shared/UI/HeaderBlock/UI/HeaderBlock";
import { IServiceCard } from "@/widgets/ServiceCard/types";
import ServiceCard from "@/widgets/ServiceCard/UI/ServiceCard";
import React from "react";
import serviceBg from "../../../../public/serviceBg.png";
import './style.css'

const ourServiceCards: IServiceCard[] = [
  {
    id: 1,
    title: "Защитное покрытие",
    link: "protective-coating",
    description:
      "Защитные покрытия предотвращают химическое и механическое воздействие на автомобиль, поддерживают внешний вид. С автомобиля, на который нанесено защитное покрытие, быстрее сходит вода и масла. Керамическое покрытие добавляет прочность автомобилю.",
  },
  {
    id: 2,
    title: "Детейлинг - химчистка",
    link: "detailing",
    description:
      "Аккуратный, ухоженный салон позволит всем, находящимся в машине, почувствовать себя максимально комфортно и создаст самое благоприятное впечатление о самом автовладельце. Чтобы добиться наилучшего эффекта, рекомендуем воспользоваться услугой по химчистке салона.",
  },
  {
    id: 3,
    title: "Полировка кузова",
    link: "polishing",
    description:
      "Полировка защищает кузов автомобиля от коррозии, агрессивного воздействия окружающей среды, а также восстанавливает салонный внешний вид. Для устранения изъянов предлагаем воспользоваться нашей услугой по детейлинг полировке. ",
  },
  {
    id: 4,
    title: "Тонировка автомобиля",
    link: "tinting",
    description:
      "Тонировка автомобиля – это защита от вредного ультрафиолетового излучения, чрезмерного нагрева и ослепляющего света солнца и фар встречных автомобилей. Кроме того, тонировка стекол автомобиля защищает Ваше личное пространство от посторонних взглядов.",
  },
  {
    id: 5,
    title: "Оклейка плёнкой",
    link: "pasting",
    description:
      " Освежить дизайн транспортного средства, поможет оклеивание виниловой плёнкой. А для защиты кузова Вашего автомобиля подойдёт оклейка антигравийной пленкой.",
  },
  {
    id: 6,
    title: "Детейлинг - мойка",
    link: "car-washing",
    description:
      "Если на кузове автомобиля появились серьёзные загрязнения, которые вас огорчают - значит пришло время посетить нашу детейлинг-мойку, включающую в себя  глубокую и тщательную чистку автомобиля от загрязнений с применением специальной химии и средств.",
  },
];

const OurServices = () => {
  return (
    <div
      className="ourServicesContainer bg-[#171717] pt-[91px]"
      style={{
        backgroundImage: `url(${serviceBg.src})`,
        backgroundPosition: "top center",
        backgroundRepeat: 'no-repeat'
      }}
    >
      <HeaderBlock text="Наши услуги" />
      <div
        className="grid grid-cols-3 gap-[50px] mt-[87px] w-fit mx-auto
        tablet:grid-cols-2 tablet:gap-[25px]
        mobile:grid-cols-1 mobile:px-[15px] mobile:gap-[15px]
      "
      >
        {ourServiceCards.map((card) => (
          <ServiceCard key={card.id} item={card} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
