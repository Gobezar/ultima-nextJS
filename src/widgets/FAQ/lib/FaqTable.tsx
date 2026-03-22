"use client";
import { Accordion } from "@heroui/accordion";
import { AccordionItem } from "@heroui/accordion";
import { Icon } from '@iconify/react'
import React from 'react'

interface FaqItem {
    title: string;
    content: string
}

interface Props {
    items: FaqItem[]
}

const FaqTable = ({items}: Props) => {
  return (
     <section className="mx-auto w-full max-w-6xl px-0 md:px-4 lg:px-8">
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
            // items={items}
            selectionMode="multiple"
            variant="splitted"
          >
            {items.map((item, i) => (
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
  )
}

export default FaqTable
