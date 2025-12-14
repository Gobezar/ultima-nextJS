import HeaderBlock from "@/shared/UI/HeaderBlock/UI/HeaderBlock";
import React from "react";
import { getCachedReviews } from "../services/reviews"; // Импорт функции из шага 1
import ReviewsClientWrapper from "./ReviewsClientsWrapper";

const Reviews = async () => {
  // Запрос происходит на сервере.
  // Благодаря кэшированию, БД не нагружается при каждом визите.
  const reviews = await getCachedReviews();

  return (
    <div className="bg-[#171717] pt-[130px] pb-[100px] overflow-hidden">
      <HeaderBlock text="Отзывы" />
      <div
        className="flex mt-[87px] items-center justify-center w-full mx-auto h-fit
           laptop:mt-[65px]
           tablet:mt-[50px]
           mobile: mobile:mt-[40px] pl-[15px] pr-0"
      >
        {/* Передаем данные в клиентскую обертку */}
        <ReviewsClientWrapper initialReviews={reviews} />
      </div>
    </div>
  );
};

export default Reviews;