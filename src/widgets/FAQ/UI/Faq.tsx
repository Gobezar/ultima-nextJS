
import React from "react";
import faqs from "../consts";

import HeaderBlock from "@/shared/UI/HeaderBlock/UI/HeaderBlock";
import FaqTable from "../lib/FaqTable";

const Faq = () => {
  return (
    <div className="bg-[#171717] pt-[130px]" id="faq">
      <HeaderBlock text="Ответы на частые вопросы" />
      <div
        className="flex mt-[87px] items-center justify-center w-full mx-auto h-fit
        laptop:mt-[65px]
        tablet:mt-[50px]
        mobile:flex-col mobile:mt-[40px] px-[15px] overflow-x-auto
        pb-[87px] laptop:pb-[65px] tablet:pb-[50px] mobile:pb-[40px]
      "
      >
      <FaqTable items={faqs}/>
      </div>
    </div>
  );
};

export default Faq;
