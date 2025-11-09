"use client";

import CardReview from "./CardReview";
import { FreeMode, Keyboard, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import { useMediaQuery } from "@/shared/helpers/hooks/useMediaQuery";

export default function ReviewsList({
  reviews,
  loading,
}: {
  reviews: any[];
  loading: boolean;
}) {
  const { breakPoint } = useMediaQuery();
  const isMobile = breakPoint === "mobile";

  if (loading) return <div className="text-[#E7E7E7] text-[17px] laptop:text-[15px] mobile:text-[13px]">Загрузка...</div>;

  if (!reviews.length) return <div className="text-[#E7E7E7] text-[17px] laptop:text-[15px] mobile:text-[13px]">Отзывов пока нет</div>;

  return (
    <Swiper
      //   onSwiper={(swiper) => (swiperRef.current = swiper)}
      slidesPerView="auto"
      // slidesPerView={5}
      spaceBetween={16}
      keyboard={{ enabled: true }}
      mousewheel={!isMobile ? { sensitivity: 0.5 } : undefined}
      freeMode={{
        enabled: true,
        momentum: true, // инерция при скролле
        momentumRatio: 0.5, // чем меньше, тем медленнее затухает
        momentumVelocityRatio: 0.5, // скорость инерции
        sticky: false, // если true — будет пытаться "прилипать" к слайдам
      }}
      modules={[Mousewheel, Keyboard, FreeMode]}
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
            createdAt={item.createdAt}
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
