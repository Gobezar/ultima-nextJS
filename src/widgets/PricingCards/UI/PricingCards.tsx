"use client";

import { Button } from "@/shared";
import classNames from "classnames";
import { useState } from "react";
import { PriceCategory } from "@/app/mojka-avtomobilja/consts";
import PricingCard from "./PricingCard";

const inactiveTabClassName =
  "bg-none bg-transparent shadow-none hover:shadow-none from-transparent to-transparent border border-[#595853] text-[#E7E7E7]";

const PricingCards = ({pricingCategories}: {pricingCategories: PriceCategory[]}) => {
  const [activeTab, setActiveTab] = useState(pricingCategories[0].id);

  const activeCategory =
    pricingCategories.find((category) => category.id === activeTab) ??
    pricingCategories[0];

  return (
    <section className="mt-[87px] laptop:mt-[65px] tablet:mt-[50px] mobile:mt-[40px]">
      <p className="text-center text-[#A1A1AA] text-[17px] laptop:text-[15px] mobile:text-[13px] mt-[23px] mb-[40px] tablet:mb-[30px] mobile:mb-[20px] font-montseratt">
        Выберите нужную вкладку
      </p>

      <div className="flex flex-wrap items-center justify-center gap-[15px] mb-[50px] tablet:mb-[40px] mobile:mb-[30px]">
        {pricingCategories.map((category) => {
          const isActive = category.id === activeTab;

          return (
            <Button
              key={category.id}
              onPress={() => setActiveTab(category.id)}
              className={classNames(
                "px-[24px] tablet:px-[18px] mobile:px-[16px] mobile:h-[48px] mobile:text-[13px]",
                !isActive && inactiveTabClassName
              )}
            >
              {category.tabLabel}
            </Button>
          );
        })}
      </div>

      <div className="grid grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 gap-[25px] tablet:gap-[20px] mobile:gap-[15px]">
        {activeCategory.tiers.map((tier) => (
          <PricingCard
            key={tier.id}
            tier={tier}
            serviceTitle={activeCategory.serviceTitle}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingCards;
