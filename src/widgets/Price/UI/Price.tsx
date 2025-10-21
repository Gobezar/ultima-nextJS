'use client'

import HeaderBlock from '@/shared/UI/HeaderBlock/UI/HeaderBlock'
import React from 'react'
import { FreeMode, Keyboard, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { priceList } from '../consts'
import PriceCard from './PriceCard'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/keyboard'
import 'swiper/css/mousewheel'
import PriceTable from './PriceTable'

export interface IPriceItem {
    id: string, 
    title: string, 
    description: string, 
    price: string, 
}

const Price = () => {
  return (
     <div className="bg-[#171717] pt-[130px]">
      <HeaderBlock text="Прайс" />
      <div
        className="flex mt-[87px] items-center justify-center w-full mx-auto h-fit
        laptop:mt-[65px]
        tablet:mt-[50px]
        mobile:flex-col mobile:mt-[40px] px-[15px] overflow-x-auto
      "
      >
        <PriceTable/>
        {/* {возможно данная реализация понадобится для какого-то другого блока (вместе с PriceCard)} */}
        {/* <Swiper
            //   onSwiper={(swiper) => (swiperRef.current = swiper)}
              // slidesPerView="auto"
              slidesPerView={5}
              spaceBetween={25}
              keyboard={{ enabled: true }}
              mousewheel={{ sensitivity: 0.5 }}
              freeMode={{
                enabled: true,
                momentum: true, // инерция при скролле
                momentumRatio: 0.5, // чем меньше, тем медленнее затухает
                momentumVelocityRatio: 0.5, // скорость инерции
                sticky: false, // если true — будет пытаться "прилипать" к слайдам
              }}
              modules={[Mousewheel, Keyboard, FreeMode]}
            >
              {priceList.map((item: IPriceItem) => (
                <SwiperSlide
                  key={item.id}
                  style={{ width: "auto" }}
                  className="first:pl-[25px] last:pr-[25px]"
                >
                  <PriceCard
                    key={item.id}
                    item={item}
                  />
                </SwiperSlide>
              ))}
            </Swiper> */}
      </div>
    </div>
  )
}

export default Price
