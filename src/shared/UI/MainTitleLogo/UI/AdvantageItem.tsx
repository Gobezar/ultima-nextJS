import React from "react";
import { IAdvantage } from "../types";
import { Icon } from "@iconify/react";

const AdvantageItem = ({
  item,
  index,
  visible,
  isMobile,
}: {
  item: IAdvantage;
  index: number;
  visible: boolean;
  isMobile?: boolean;
}) => (
  <div
    className={`flex items-start gap-4 transition-all duration-700 ease-out ${
      visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
    }`}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    <div className="mt-1 flex-shrink-0">
      <Icon
        icon={item.icon}
        className="text-[#D1933C] w-6 h-6 laptop:w-5 laptop:h-5 tablet:w-5 tablet:h-5 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
      />
    </div>
    <div className="flex flex-col">
      {!isMobile ? (
        <h3 className="font-montseratt text-[18px] font-bold leading-tight tracking-wide text-white mobile:text-[15px]">
          {item.title}
        </h3>
      ) : (
        <></>
      )}
      <p className="text-[15px] font-light text-default-500 mt-1 max-w-[280px] tablet:max-w-[270px] mobile:text-[13px]">
        {item.description}
      </p>
    </div>
  </div>
);

export default AdvantageItem;
