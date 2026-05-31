import React from "react";

const paragraphClassName =
  "text-[#A1A1AA] font-light text-[17px] laptop:text-[15px] mobile:text-[13px] leading-[24px] font-montseratt";

const results = [
  {
    title: "Идеальная чистота.",
    description:
      "Никаких пятен, разводов, залосненных участков. Обивка выглядит свежей, как в день покупки.",
  },
  {
    title: "Приятный запах.",
    description:
      "Пахнет чистотой, а не химией или старыми ароматизаторами. Уничтожены сами источники запахов, а не замаскированы.",
  },
  {
    title: "Здоровый микроклимат.",
    description:
      "В салоне уничтожены бактерии, пылевые клещи и плесневые грибки. Ваши дыхательные пути и кожа скажут спасибо.",
  },
  {
    title: "Тактильный комфорт.",
    description:
      "Материалы становятся мягкими, приятными на ощупь, восстанавливается ворс ковров и текстиля.",
  },
  {
    title: "Вы получаете полностью сухой салон.",
    description:
      "Никакой «парниковой» влажности на следующий день. Можете сразу садиться и ехать.",
  },
];

const HimchistkaSalonResults = () => {
  return (
    <div className="flex flex-col gap-[40px] tablet:gap-[30px] mobile:gap-[25px]">
      <p className={paragraphClassName}>
        После химчистки в Ультима Детейлинг вы получаете не просто чистый
        автомобиль, а совершенно новые ощущения от вождения:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {results.map((item, index) => (
          <div key={index} className="border-l-2 border-[#D1933C] pl-6 py-2">
            <h3 className="text-[#FFFFFF] font-bold text-[17px] laptop:text-[15px] mobile:text-[13px] mb-3 uppercase tracking-wider">
              {item.title}
            </h3>
            <p className="text-[#A1A1AA] text-[17px] laptop:text-[15px] mobile:text-[13px] leading-[26px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HimchistkaSalonResults;
