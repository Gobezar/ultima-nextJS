import HeaderBlock from "@/shared/UI/HeaderBlock/UI/HeaderBlock";
import PageHeader from "@/shared/UI/PageHeader/UI/PageHeader";
import Navbar from "@/widgets/Navbar/UI/Navbar";
import PricingCards from "@/widgets/PricingCards/UI/PricingCards";
import { Card, CardBody } from "@heroui/card";
import { Metadata } from "next";
import React from "react";
import { advantages, faqData, features, pokritiePricingCategories } from "./consts";
import CeramicCoatingContent from "./CeramicCoatingContent";
import FeatureGrid from "@/widgets/FeaturesGrid/UI/FeaturesGrid";
import FaqTable from "@/widgets/FAQ/lib/FaqTable";
import { Button } from "@/shared";

export const metadata: Metadata = {
  title: "Керамическое покрытие автомобиля в Саратове | Ультима Детейлинг",
  description:
    "Стойкое керамическое покрытие автомобиля в Саратове ✅ Защитите кузов от царапин, старения и УФ-лучей. ✅ Простой уход и длительный блеск.",
};

const page = () => {
  return (
    <div className="bg-[#171717] min-h-screen pt-[150px] px-[106px] tablet:px-[24px] tablet:pt-[130px] mobile:pt-[90px]">
      <Navbar />

      <PageHeader text="Керамическое покрытие автомобиля" />
      <div className="flex items-center justify-center flex-wrap gap-[30px] mobile:justify-start tablet:gap-[20px] mobile:gap-[15px]">
        {advantages.map((item) => {
          return (
            <Card key={item.id}>
              <CardBody className="bg-[#595853]">
                <p className="text-[#ffffff] text-[17px] laptop:text-[15px] mobile:text-[13px]">
                  {item.text}
                </p>
              </CardBody>
            </Card>
          );
        })}
      </div>
      <div className="mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px] mb-[87px] laptop:mb-[65px] tablet:mb-[50px] mobile:mb-[40px]">
        <HeaderBlock text="Стоимость керамического покрытия" level={2} />
      </div>
      <PricingCards pricingCategories={pokritiePricingCategories} />

      <div className="mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px] mb-[40px] tablet:mb-[30px] mobile:mb-[20px]">
        <HeaderBlock
          text="Что такое керамическое покрытие автомобиля?"
          level={2}
        />
      </div>
      <CeramicCoatingContent part="about" />

      <div className="mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px] mb-[40px] tablet:mb-[30px] mobile:mb-[20px]">
        <HeaderBlock
          text="Процесс подготовки кузова перед нанесением керамики"
          level={2}
        />
      </div>
      <CeramicCoatingContent part="preparation" />

      <div className="mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px] mb-[40px] tablet:mb-[30px] mobile:mb-[20px]">
        <HeaderBlock
          text="Технология нанесения керамики в Ультима Детейлинг"
          level={2}
        />
      </div>
      <CeramicCoatingContent part="technology" />

      <div className="mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px] mb-[40px] tablet:mb-[30px] mobile:mb-[20px]">
        <HeaderBlock text="Аргументы в пользу нанесения покрытия" level={2} />
      </div>
      <FeatureGrid features={features} />

      <div className="mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px] mb-[40px] tablet:mb-[30px] mobile:mb-[20px]">
        <HeaderBlock
          text="Срок службы керамического покрытия и правила ухода"
          level={2}
        />
      </div>
      <CeramicCoatingContent part="care" />
      <div className="mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px] mb-[87px] laptop:mb-[65px] tablet:mb-[50px] mobile:mb-[40px]">
        <HeaderBlock text="Ответы на часто задаваемые вопросы" level={2} />
      </div>
      <FaqTable items={faqData} />
      <div className="flex items-center justify-center mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px] pb-[87px] laptop:pb-[65px] tablet:pb-[50px] mobile:pb-[40px]">
        <a
          href="https://t.me/ultimadetailing?text=Добрый%20день%2C%20я%20хотел%20бы%20получить%20консультацию%20по%20защитному%20покрытию%20автомобиля%20"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[500px] tablet:w-[400px] mobile:w-full"
        >
          <Button className="w-full">Записаться онлайн</Button>
        </a>
      </div>
    </div>
  );
};

export default page;
