import { Button } from "@/shared";
import HeaderBlock from "@/shared/UI/HeaderBlock/UI/HeaderBlock";
import PageHeader from "@/shared/UI/PageHeader/UI/PageHeader";
import FaqTable from "@/widgets/FAQ/lib/FaqTable";
import FeatureGrid from "@/widgets/FeaturesGrid/UI/FeaturesGrid";
import Navbar from "@/widgets/Navbar/UI/Navbar";
import PreviewServiceCard from "@/widgets/PreviewServiceCard/UI/PreviewServiceCard";
import PriceTable from "@/widgets/Price/UI/PriceTable";
import { Metadata } from "next";
import React from "react";
import { faqData, features, manufacturers } from "./consts";

export const metadata: Metadata = {
  title: "Тонировка стекол автомобиля в Саратове | Ультима Детейлинг",
  description:
    "Профессиональная тонировка (тонирование) стекол автомобиля пленкой в Саратове ✅Тонируем передние, лобовые и задние стекла от 45 минут. ✅Тонирование по ГОСТу",
};

const page = () => {
  return (
    <div className="bg-[#171717] min-h-screen pt-[150px] px-[106px] tablet:px-[24px] tablet:pt-[130px] mobile:pt-[90px]">
      <Navbar />

      <PageHeader text="Тонировка стекол автомобиля" />
      <div className="text-[20px] leading-[24px] text-[#FFFFFFDB] laptop:text-[18px] mobile:text-[15px] mb-[50px]">
        Мы предлагаем пленки трех основных типов, чтобы вы могли выбрать
        оптимальное решение по стилю и функциональности:
      </div>
      <div className="flex items-center items-center flex-wrap gap-[32px]">
        <PreviewServiceCard
          title="Глянцевая классика"
          description={
            "Традиционное решение для тех, кто ценит элегантность и глубину черного цвета. Глянцевая пленка придает автомобилю дорогой и ухоженный вид, создает эффект монолитности стекла. Отлично сочетается с любым цветом кузова и подчеркивает его линии."
          }
        />
        <PreviewServiceCard
          title="Матовый шик"
          description={
            " Выбор для тех, кто хочет выделиться и придать своему авто индивидуальность. Матовая текстура создает благородный, бархатистый вид, который особенно эффектно смотрится на автомобилях с темным кузовом. Это идеальный способ добиться уникального стайлинга."
          }
        />
        <PreviewServiceCard
          title="Атермальная защита"
          description={
            "Высокотехнологичное покрытие, которое практически не меняет цвет стекла, но при этом является лидером по функциональности. Оно максимально отражает инфракрасное (тепловое) и ультрафиолетовое излучение, сохраняя в салоне комфортную прохладу даже в самый жаркий день. Идеальный вариант для тонировки лобового и передних боковых стекол по ГОСТу."
          }
        />
      </div>

      <div className="mt-[50px]">
        <p className="text-[20px] leading-[24px] text-[#FFFFFFDB] laptop:text-[18px] mobile:text-[15px]">
          Мы выбираем для своих клиентов только проверенные материалы,
          зарекомендовавшие себя по всему миру.
        </p>
        <div className="mt-[10px] mb-[50px]">
          {/* <h2 className=" text-[20px] leading-[24px] text-[#FFFFFFDB] laptop:text-[18px] mobile:text-[15px] inline-block pb-2 border-b-2 border-[#D1933C]">
            Производители плёнок, с которыми мы работаем:
          </h2> */}
          <h2 className=" text-[20px] leading-[24px] text-[#FFFFFFDB] laptop:text-[18px] mobile:text-[15px]">
            Производители плёнок, с которыми мы работаем:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-[50px]">
          {manufacturers.map((brand, index) => (
            <div key={index} className="border-l-2 border-[#D1933C] pl-6 py-2">
              <h3 className="text-[#FFFFFF] font-bold text-[20px] mb-3 uppercase tracking-wider">
                {brand.name}
              </h3>
              <p className="text-[#A1A1AA] text-[16px] leading-[26px] mobile:text-[14px]">
                {brand.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mb-[50px]">
          <div className="text-[20px] leading-[24px] text-[#FFFFFFDB] laptop:text-[18px] mobile:text-[15px] mb-[30px]">
            Тонировка стекол в <span className="font-bold">Ультима Детейлинг</span> — это не просто дань моде или
            попытка выделиться из потока. Это практичное и технологичное
            решение, которое дает вашему автомобилю целый ряд весомых
            преимуществ. Вот главные из них:
          </div>
            <HeaderBlock text="Аргументы в пользу нанесения покрытия" level={2} />

        </div>
        <FeatureGrid features={features} />
        <div className="flex items-center justify-center w-full mx-auto h-fit mobile:flex-col px-[15px] overflow-x-auto mb-[50px] mt-[80px]">
          <PriceTable priceList={[]} />
        </div>
        <FaqTable items={faqData} />
        <div className="flex items-center justify-center mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px] pb-[87px] laptop:pb-[65px] tablet:pb-[50px] mobile:pb-[40px]">
          <a
            href="https://t.me/ultimadetailing?text=Добрый%20день%2C%20хотел%20бы%20получить%20консультацию%20по%20тонировке"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[500px] tablet:w-[400px] mobile:w-full"
          >
            <Button className="w-full">Записаться онлайн</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
