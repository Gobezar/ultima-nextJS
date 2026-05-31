import PageHeader from "@/shared/UI/PageHeader/UI/PageHeader";
import HeaderBlock from "@/shared/UI/HeaderBlock/UI/HeaderBlock";
import Navbar from "@/widgets/Navbar/UI/Navbar";
import { Metadata } from "next";
import React from "react";
import { advantages, faqData, priceList } from "./consts";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@/shared";
import FaqTable from "@/widgets/FAQ/lib/FaqTable";
import HimchistkaSalonContent from "./HimchistkaSalonContent";
import HimchistkaSalonResults from "./HimchistkaSalonResults";
import HimchistkaSalonPricingInfo from "./HimchistkaSalonPricingInfo";
import PriceTable from "@/widgets/Price/UI/PriceTable";

export const metadata: Metadata = {
  title: "Детейлинг химчистка салона автомобиля в Саратове | Ультима Детейлинг",
  description:
    "Премиальная детейлинг-химчистка салона автомобиля в Саратове ✅Деликатный уход за салоном, кожей и тканью. ✅ Удаление загрязнений любых видов.",
};

const Page = () => {

    return (
    <div className="bg-[#171717] min-h-screen pt-[150px] px-[106px] tablet:px-[24px] tablet:pt-[130px] mobile:pt-[90px]">
      <Navbar />
      {/* <Link href="/">
        <Button className="h-[30px] mb-[40px] tablet:mb-[30px] mobile:mb-[20px]">
          На главную
        </Button>
      </Link> */}
      <PageHeader text="Детейлинг химчистка салона автомобиля" />
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

      <div className="mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px] mb-[40px] tablet:mb-[30px] mobile:mb-[20px]">
        <HeaderBlock text="Почему стоит сделать химчистку авто?" level={2} />
      </div>
      <HimchistkaSalonContent part="why" />

      <div className="mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px] mb-[40px] tablet:mb-[30px] mobile:mb-[20px]">
        <HeaderBlock text="Чем мы можем помочь" level={2} />
      </div>
      <HimchistkaSalonContent part="services" />

      <div className="mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px] mb-[40px] tablet:mb-[30px] mobile:mb-[20px]">
        <HeaderBlock
          text="Как мы делаем химчистку салона в Ультима Детейлинг"
          level={2}
        />
      </div>
      <HimchistkaSalonContent part="process" />

      <div className="mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px] mb-[40px] tablet:mb-[30px] mobile:mb-[20px]">
        <HeaderBlock text="Результат, который Вам понравится" level={2} />
      </div>
      <HimchistkaSalonResults />

      <div className="mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px] mb-[40px] tablet:mb-[30px] mobile:mb-[20px]">
        <HeaderBlock text="Стоимость химчистки салона" level={2} />
      </div>
      <HimchistkaSalonPricingInfo part="before" />
      <div className="flex items-center justify-center w-full mx-auto h-fit mobile:flex-col px-[15px] overflow-x-auto">
        <PriceTable priceList={priceList} />
      </div>
      <HimchistkaSalonPricingInfo part="after" />

      <div className="mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px] mb-[87px] laptop:mb-[65px] tablet:mb-[50px] mobile:mb-[40px]">
        <HeaderBlock text="Ответы на часто задаваемые вопросы" level={2} />
      </div>
      <FaqTable items={faqData} />
      <div className="flex items-center justify-center mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px] pb-[87px] laptop:pb-[65px] tablet:pb-[50px] mobile:pb-[40px]">
        <a
          href="https://t.me/ultimadetailing?text=Добрый%20день%2C%20я%20хотел%20бы%20получить%20консультацию%20по%20химчистке%20салона%20автомобиля%20"
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

export default Page;
