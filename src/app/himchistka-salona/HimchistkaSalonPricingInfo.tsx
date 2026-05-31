import React from "react";

const paragraphClassName =
  "text-[#A1A1AA] font-light text-[17px] laptop:text-[15px] mobile:text-[13px] leading-[24px] font-montseratt";

const listClassName =
  "list-disc pl-[20px] space-y-[8px] text-[#A1A1AA] font-light text-[17px] laptop:text-[15px] mobile:text-[13px] leading-[24px] font-montseratt";

const subheadingClassName =
  "font-semibold text-[20px] leading-[24px] text-[#FFFFFF] laptop:text-[18px] mobile:text-[15px] font-montseratt";

interface HimchistkaSalonPricingInfoProps {
  part: "before" | "after";
}

const HimchistkaSalonPricingBefore = () => (
  <div className="flex flex-col gap-[20px] mb-[40px] tablet:mb-[30px] mobile:mb-[25px]">
    <p className={paragraphClassName}>
      Стоимость зависит от трех факторов:
    </p>

    <ul className={listClassName}>
      <li>
        Класс и размер автомобиля (седан, универсал, кроссовер, внедорожник,
        минивэн).
      </li>
      <li>Тип обивки (ткань, велюр, кожа, алькантара).</li>
      <li>Степень загрязнения (визуально и по запахам).</li>
    </ul>

    <p className={subheadingClassName}>Ориентировочные цены (пример):</p>
  </div>
);

const HimchistkaSalonPricingAfter = () => (
  <div className="flex flex-col gap-[20px] mt-[40px] tablet:mt-[30px] mobile:mt-[25px]">
    <p className={subheadingClassName}>Срок выполнения:</p>

    <p className={paragraphClassName}>
      Полная химчистка занимает от 6 до 12 часов (в зависимости от
      сложности).
    </p>

    <p className={paragraphClassName}>
      Чаще всего мы забираем машину с утра (09:00-10:00), а отдаем на
      следующий день к обеду. Это оптимальное время, чтобы качественно
      просушить салон без риска.
    </p>

    <p className={paragraphClassName}>
      Легкую химчистку или очистку отдельных элементов часто удается сделать
      за 3-5 часов — уточняйте при записи.
    </p>

    <p className={paragraphClassName}>
      Точную стоимость и срок подберем по фото салона или при осмотре в
      центре!
    </p>
  </div>
);

const HimchistkaSalonPricingInfo = ({ part }: HimchistkaSalonPricingInfoProps) => {
  if (part === "before") {
    return <HimchistkaSalonPricingBefore />;
  }

  return <HimchistkaSalonPricingAfter />;
};

export default HimchistkaSalonPricingInfo;
