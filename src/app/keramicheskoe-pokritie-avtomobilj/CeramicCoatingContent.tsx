import React from "react";

const paragraphClassName =
  "text-[#A1A1AA] font-light text-[17px] laptop:text-[15px] mobile:text-[13px] leading-[24px] font-montseratt";

const listClassName =
  "list-disc pl-[20px] space-y-[8px] text-[#A1A1AA] font-light text-[17px] laptop:text-[15px] mobile:text-[13px] leading-[24px] font-montseratt";

interface CeramicCoatingContentProps {
  part: "about" | "preparation" | "technology" | "care";
}

const CeramicCoatingAbout = () => (
  <div className="flex flex-col gap-[20px]">
    <p className={paragraphClassName}>
      Керамическое покрытие (или нанокерамика) — это современный
      высокотехнологичный жидкий состав на основе диоксида кремния (SiO₂) и
      других наночастиц. После нанесения на кузов и полимеризации он образует
      прочный, тонкий и при этом очень твердый кристаллический слой, который
      буквально «срастается» с заводским лаком на молекулярном уровне.
    </p>

    <p className={paragraphClassName}>
      В отличие от воска или простых полиролей, которые дают временный эффект
      (на пару моек), керамическое покрытие — это серьезная, долговременная
      защита. Оно не просто придает блеск, а создает на поверхности кузова
      сверхпрочную пленку с уникальными свойствами.
    </p>

    <p className={paragraphClassName}>
      В «Ультима-Детейлинг» мы используем только профессиональные,
      сертифицированные составы от ведущих мировых брендов (таких как Ceramic
      Pro, Gyeon, Koch Chemie и др.). Это гарантирует стабильный результат,
      долговечность и безопасность для вашего автомобиля.
    </p>
  </div>
);

const CeramicCoatingPreparation = () => (
  <div className="flex flex-col gap-[20px]">
    <p className={paragraphClassName}>
      Подготовка кузова — это 80% успеха всей процедуры. Без нее даже самая
      дорогая керамика не раскроет свой потенциал и не прослужит заявленный
      срок. Наши мастера в Ультима-Детейлинг никогда не пропускают и не
      сокращают этот этап. Он включает несколько шагов:
    </p>

    <div className="flex flex-col gap-[15px]">
      <p className={paragraphClassName}>
        <span className="font-semibold text-[#FFFFFFDB]">
          Тщательная детейлинг-мойка.
        </span>{" "}
        Удаляем дорожную грязь, пыль, песок, битумные пятна, следы насекомых.
        Промываем все труднодоступные места.
      </p>

      <p className={paragraphClassName}>
        <span className="font-semibold text-[#FFFFFFDB]">
          Обезжиривание поверхности.
        </span>{" "}
        Полностью удаляем силиконы, жировые пленки и остатки старой защитной
        химии. Кузов должен быть химически чистым для идеальной адгезии.
      </p>

      <p className={paragraphClassName}>
        <span className="font-semibold text-[#FFFFFFDB]">
          Полировка кузова (критический этап).
        </span>{" "}
        Керамика не маскирует дефекты, а наоборот, подчеркивает их. Поэтому мы
        обязательно проводим полировку для удаления «паутинки», мелких царапин,
        окисленного слоя лака и прочих изъянов. Поверхность должна стать
        идеально ровной и гладкой.
      </p>

      <p className={paragraphClassName}>
        <span className="font-semibold text-[#FFFFFFDB]">
          Финальное обезжиривание перед нанесением.
        </span>{" "}
        Удаляем остатки полировальных паст и пыли.
      </p>
    </div>

    <p className={paragraphClassName}>
      Только после такой многоступенчатой подготовки кузов готов к нанесению
      керамического «щита».
    </p>
  </div>
);

const CeramicCoatingTechnology = () => (
  <div className="flex flex-col gap-[20px]">
    <p className={paragraphClassName}>
      Нанесение нанокерамики — это ювелирная работа, которая требует
      специальных условий, опыта и строгого соблюдения технологии. В нашем
      центре процесс проходит в чистом, сухом и хорошо вентилируемом боксе с
      контролируемой температурой.
    </p>

    <p className={paragraphClassName}>Технология выглядит так:</p>

    <div className="flex flex-col gap-[15px]">
      <p className={paragraphClassName}>
        <span className="font-semibold text-[#FFFFFFDB]">
          Первый (базовый) слой.
        </span>{" "}
        Мастер вручную наносит керамический состав на небольшой участок кузова
        (обычно 50×50 см) с помощью специального аппликатора (спонжа),
        равномерно распределяя его.
      </p>

      <p className={paragraphClassName}>
        <span className="font-semibold text-[#FFFFFFDB]">
          Выдержка для сшивки.
        </span>{" "}
        Составу дают время (от 30 секунд до нескольких минут, в зависимости от
        типа керамики), чтобы он начал «схватываться» с лаком.
      </p>

      <p className={paragraphClassName}>
        <span className="font-semibold text-[#FFFFFFDB]">
          Снятие излишков.
        </span>{" "}
        Специальной мягкой микрофибровой салфеткой мастер аккуратно удаляет
        остатки не впитавшегося состава, полируя поверхность до зеркального
        блеска.
      </p>

      <p className={paragraphClassName}>
        <span className="font-semibold text-[#FFFFFFDB]">
          Межслойная полимеризация.
        </span>{" "}
        После обработки всего кузова автомобиль оставляют на технологическую
        паузу (от 4 до 12 часов) для первичного отверждения слоя. В это время
        автомобиль трогать нельзя — он «отдыхает» в боксе.
      </p>

      <p className={paragraphClassName}>
        <span className="font-semibold text-[#FFFFFFDB]">
          Нанесение второго (усиливающего) слоя.
        </span>{" "}
        Для максимальной долговечности и толщины защитного слоя мы почти всегда
        наносим второй слой (по той же технологии).
      </p>

      <p className={paragraphClassName}>
        <span className="font-semibold text-[#FFFFFFDB]">
          Третий слой (Top Coat — опционально).
        </span>{" "}
        В премиальных пакетах можно нанести финишный гидрофобный слой, который
        усиливает «эффект самоочищения» и придает дополнительный блеск.
      </p>

      <p className={paragraphClassName}>
        <span className="font-semibold text-[#FFFFFFDB]">
          Финальная полимеризация.
        </span>{" "}
        Автомобиль выдерживается в боксе еще 12-24 часа. Полная полимеризация
        состава (набор максимальной твердости) происходит в течение 7-14 дней
        при нормальной эксплуатации.
      </p>
    </div>

    <p className={paragraphClassName}>
      <span className="font-semibold text-[#FFFFFFDB]">Важно:</span> Мы не
      гонимся за количеством слоев, а фокусируемся на качестве наносимого
      состава и соблюдении технологии. Именно это гарантирует долговечность
      защиты.
    </p>
  </div>
);

const CeramicCoatingCare = () => (
  <div className="flex flex-col gap-[20px]">
    <p className={paragraphClassName}>
      Срок службы напрямую зависит от трех факторов:
    </p>

    <ul className={listClassName}>
      <li>Тип и качество используемого керамического состава.</li>
      <li>Тщательность подготовки и правильность нанесения.</li>
      <li>Последующий уход за покрытием.</li>
    </ul>

    <p className={paragraphClassName}>
      Мы используем составы с заявленным сроком службы от 1 года до 5 лет (в
      зависимости от выбранного пакета). По истечении этого срока гидрофобные
      свойства и блеск постепенно снижаются — покрытие требует обновления
      (бустинга).
    </p>

    <p className={paragraphClassName}>
      <span className="font-semibold text-[#FFFFFFDB]">
        Как продлить жизнь керамике (рекомендации по уходу):
      </span>
    </p>

    <div className="flex flex-col gap-[15px]">
      <p className={paragraphClassName}>
        <span className="font-semibold text-[#FFFFFFDB]">
          Первые 7-14 дней — режим покоя.
        </span>{" "}
        В этот период покрытие набирает 100% твердость. Нельзя мыть авто
        (особенно аппаратом высокого давления), тереть тряпками, подвергать
        воздействию агрессивной химии.
      </p>

      <p className={paragraphClassName}>
        <span className="font-semibold text-[#FFFFFFDB]">
          Регулярная мойка — только правильная.
        </span>{" "}
        Используйте двухфазную или трехфазную бесконтактную/ручную мойку с
        нейтральными шампунями (pH 5.5-7.5). Категорически избегайте щелочных
        составов (они разрушают керамику).
      </p>

      <p className={paragraphClassName}>
        <span className="font-semibold text-[#FFFFFFDB]">
          Используйте качественную микрофибру.
        </span>{" "}
        Никаких грубых губок, щеток или скребков.
      </p>

      <p className={paragraphClassName}>
        <span className="font-semibold text-[#FFFFFFDB]">
          Периодическое обновление (бустинг).
        </span>{" "}
        Раз в 6-12 месяцев желательно наносить специальный «бустер»
        (восстановитель/закрепитель), который обновляет гидрофобные свойства и
        продлевает жизнь покрытия. Эту услугу мы можем выполнить в нашем
        центре.
      </p>
    </div>
  </div>
);

const CeramicCoatingContent = ({ part }: CeramicCoatingContentProps) => {
  if (part === "about") {
    return <CeramicCoatingAbout />;
  }

  if (part === "preparation") {
    return <CeramicCoatingPreparation />;
  }

  if (part === "technology") {
    return <CeramicCoatingTechnology />;
  }

  return <CeramicCoatingCare />;
};

export default CeramicCoatingContent;
