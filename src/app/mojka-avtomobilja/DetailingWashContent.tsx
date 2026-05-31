import React from "react";

const paragraphClassName =
  "text-[#A1A1AA] font-light text-[17px] laptop:text-[15px] mobile:text-[13px] leading-[24px] font-montseratt";

const subheadingClassName =
  "font-semibold text-[20px] leading-[24px] text-[#FFFFFF] laptop:text-[18px] mobile:text-[15px] font-montseratt";

const listClassName =
  "list-disc pl-[20px] space-y-[8px] text-[#A1A1AA] font-light text-[17px] laptop:text-[15px] mobile:text-[13px] leading-[24px] font-montseratt";

interface DetailingWashContentProps {
  part: "about" | "phases";
}

const DetailingWashAbout = () => (
  <div className="flex flex-col gap-[20px]">
    <p className={paragraphClassName}>
      Детейлинг-мойка — это не просто мытье автомобиля, а глубокая,
      многоступенчатая процедура бережного очищения кузова и всех его элементов
      с применением профессиональной автохимии и специального оборудования. Это
      максимально щадящий и одновременно самый эффективный способ ухода за
      лакокрасочным покрытием (ЛКП), который принципиально отличается от обычной
      мойки.
    </p>

    <p className={paragraphClassName}>
      Если стандартная бесконтактная мойка удаляет лишь поверхностный слой
      грязи, часто оставляя разводы и пропуская труднодоступные места, то
      детейлинг-мойка — это филигранная работа с каждой деталью. В «Ультима
      Детейлинг» мы тщательно очищаем не только кузов, но и:
    </p>

    <ul className={listClassName}>
      <li>колесные диски и суппорты;</li>
      <li>выхлопную систему;</li>
      <li>дверные и багажные проемы, петли, пороги;</li>
      <li>решетки радиатора, шильдики, стыки фар;</li>
      <li>колесные арки и резину.</li>
    </ul>

    <p className={paragraphClassName}>
      В финале на кузов наносится защитный состав (воск или полимерный
      консервант), который придает автомобилю зеркальный блеск, гидрофобные и
      антистатические свойства. Это ваш автомобиль в состоянии, близком к
      идеальному.
    </p>
  </div>
);

const DetailingWashPhases = () => (
  <div className="flex flex-col gap-[30px] tablet:gap-[25px] mobile:gap-[20px]">
    <div className="flex flex-col gap-[20px]">
      <h3 className={subheadingClassName}>
        Двухфазная мойка (оптимальный выбор для регулярного ухода)
      </h3>

      <p className={paragraphClassName}>
        Это современный и наиболее сбалансированный вариант для поддержания
        чистоты без риска для ЛКП. Процесс включает два ключевых этапа:
      </p>

      <div className="flex flex-col gap-[15px]">
        <p className={paragraphClassName}>
          <span className="font-semibold text-[#FFFFFFDB]">
            Бесконтактная фаза.
          </span>{" "}
          На кузов наносится активная пена (пре-вош), которая размягчает и
          смывает основную часть дорожной грязи, пыли, песка и реагентов. Состав
          работает без механического контакта, что исключает риск появления
          царапин на этом этапе.
        </p>

        <p className={paragraphClassName}>
          <span className="font-semibold text-[#FFFFFFDB]">
            Контактная фаза с шампунем.
          </span>{" "}
          После смыва пены мастер вручную моет кузов специальной микрофибровой
          рукавицей и шампунем с высоким содержанием тензидов. Эти вещества
          обволакивают и бережно удаляют оставшиеся статические загрязнения, не
          травмируя лак.
        </p>
      </div>

      <p className={paragraphClassName}>
        <span className="font-semibold text-[#FFFFFFDB]">Что в итоге?</span>{" "}
        Двухфазная мойка — идеальный баланс между скоростью, стоимостью и
        качеством. Она отлично подходит для регулярной эксплуатации автомобиля,
        поддерживая его блеск и не утомляя кошелек.
      </p>
    </div>

    <div className="flex flex-col gap-[20px]">
      <h3 className={subheadingClassName}>
        Трехфазная мойка (максимальная защита и блеск)
      </h3>

      <p className={paragraphClassName}>
        Это расширенная версия двухфазной мойки. К двум основным этапам
        добавляется третий — нанесение защитного покрытия.
      </p>

      <p className={paragraphClassName}>
        На только что вымытый и высушенный кузов наносится жидкий воск,
        полимерный консервант или кварцевый состав. Это создает на поверхности
        тонкий, но прочный гидрофобный слой. Преимущества:
      </p>

      <ul className={listClassName}>
        <li>Вода и грязь скатываются с кузова, не оставляя разводов.</li>
        <li>Автомобиль дольше остается чистым (эффект «самоочищения»).</li>
        <li>Появляется глубокий, «мокрый» блеск.</li>
        <li>Защита от УФ-лучей и химических реагентов.</li>
      </ul>
    </div>

    <p className={paragraphClassName}>
      Для регулярной мойки, когда вы хотите быстро и безопасно привести авто в
      порядок, оптимальна двухфазная технология. Если же вы цените каждый момент
      блеска, хотите максимально защитить кузов и наслаждаться превосходным
      внешним видом — выбирайте трехфазную мойку с нанесением защитного
      состава.
    </p>
  </div>
);

const DetailingWashContent = ({ part }: DetailingWashContentProps) => {
  if (part === "about") {
    return <DetailingWashAbout />;
  }

  return <DetailingWashPhases />;
};

export default DetailingWashContent;
