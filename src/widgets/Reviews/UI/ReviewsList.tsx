"use client";

import { FreeMode, Keyboard, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import { useMediaQuery } from "@/shared/helpers/hooks/useMediaQuery";
import CardReview from "./CardReview";

export default function ReviewsList({
  reviews,
}: {
  reviews: any[];
}) {
  const { breakPoint } = useMediaQuery();
  const isMobile = breakPoint === "mobile";

  if (!reviews || !reviews.length)
    return (
      <div className="text-[#E7E7E7] text-[17px] laptop:text-[15px] mobile:text-[13px]">
        Отзывов пока нет
      </div>
    );

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={16}
      keyboard={{ enabled: true }}
      mousewheel={!isMobile ? { sensitivity: 0.5 } : undefined}
      freeMode={{
        enabled: true,
        momentum: true,
        momentumRatio: 0.5,
        momentumVelocityRatio: 0.5,
        sticky: false,
      }}
      modules={[Mousewheel, Keyboard, FreeMode]}
      className="w-full"
    >
      {reviews.map((item: any) => (
        <SwiperSlide
          key={item.id}
          style={{ width: "auto" }}
          className="first:pl-[25px] last:pr-[25px]"
        >
          <CardReview
            key={item.id}
            content={item.text}
            createdAt={item.created_at}
            rating={item.rating}
            title={item.car}
            user={{
              name: item.author,
              avatar: "",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}