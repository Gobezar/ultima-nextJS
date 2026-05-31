import React from "react";

const paragraphClassName =
  "text-[#A1A1AA] font-light text-[17px] laptop:text-[15px] mobile:text-[13px] leading-[24px] font-montseratt";

const results = [
  {
    title: "Кузов сияет чистотой.",
    description:
      "Никаких разводов, подтеков или пропущенных зон. Глубокий, насыщенный цвет и зеркальный блеск.",
  },
  {
    title: "Идеально чистые детали.",
    description:
      "Диски, выхлопная труба, решетки радиатора, дверные проемы — все вымыто до блеска. Даже те места, куда вы обычно не заглядываете.",
  },
  {
    title: "Твердое покрытие с защитой.",
    description:
      "(При трехфазной мойке) — гидрофобный слой отталкивает воду и грязь, облегчая следующие мойки. Капли собираются в шарики и скатываются.",
  },
  {
    title: "Бережный подход.",
    description:
      "Никаких новых царапин или «паутинки». Мы используем только правильные материалы и технику, чтобы сохранить ваш ЛКП.",
  },
];

const DetailingWashResults = () => {
  return (
    <div className="flex flex-col gap-[40px] tablet:gap-[30px] mobile:gap-[25px]">
      <p className={paragraphClassName}>
        После детейлинг-мойки в Ультима Детейлинг вы получаете не просто чистый
        автомобиль, а совершенно новые впечатления:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {results.map((item, index) => (
          <div key={index} className="border-l-2 border-[#D1933C] pl-6 py-2">
            <h3 className="text-[#FFFFFF] font-bold  text-[17px] laptop:text-[15px] mobile:text-[13px] mb-3 uppercase tracking-wider">
              {item.title}
            </h3>
            <p className="text-[#A1A1AA] text-[17px] laptop:text-[15px] mobile:text-[13px] leading-[26px] mobile:text-[14px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailingWashResults;
