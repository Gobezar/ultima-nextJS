"use client";
import { Icon } from "@iconify/react";
import React from "react";
import faqs from "../consts";
import { Accordion } from "@heroui/accordion";
import { AccordionItem } from "@heroui/accordion";
import HeaderBlock from "@/shared/UI/HeaderBlock/UI/HeaderBlock";

const Faq = () => {
  return (
    <div className="bg-[#171717] pt-[130px]" id="faq">
      <HeaderBlock text="Ответы на частые вопросы" />
      <div
        className="flex mt-[87px] items-center justify-center w-full mx-auto h-fit
        laptop:mt-[65px]
        tablet:mt-[50px]
        mobile:flex-col mobile:mt-[40px] px-[15px] overflow-x-auto
      "
      >
      <section className="mx-auto w-full max-w-6xl px-0 pb-20 sm:pb-32 md:px-4 lg:px-8 lg:pb-40">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6">
          <Accordion
            fullWidth
            keepContentMounted
            className="gap-3"
            itemClasses={{
              base: "px-6 bg-[#2d2d2d]! hover:bg-default-100! shadow-none! data-[open=true]:bg-default-100!",
              title: "font-medium text-[#FFFFFFDB] text-[20px] laptop:text-[18px] mobile:text-[15px]",
              trigger: "py-4 md:py-6  cursor-pointer",
              content: "pt-0 pb-6 text-base text-default-500 text-[17px] leading-[24px] laptop:text-[15px] mobile:text-[13px]",
              indicator: "data-[open=true]:rotate-180",
            }}
            items={faqs}
            selectionMode="multiple"
            variant="splitted"
          >
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                indicator={
                  <Icon icon="solar:alt-arrow-down-linear" width={24} />
                }
                title={item.title}
                className="text-[#E7E7E7]"
              >
                {item.content}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Faq;
