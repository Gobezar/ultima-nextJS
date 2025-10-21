import React from 'react'
import { IPriceItem } from './Price'
import Image from 'next/image'

export const IMAGES = {
  carWash: '/carWash.jpg',
  plenka: '/plenka.jpg',
  polirovka: '/polirovka.jpg',
  keramika: '/keramika.jpg',
  tonirovka: '/tonirovka.jpg',
  himchistka: '/himchistka.jpg',
  pokritie: '/pokritiye.jpg'
}

const PriceCard = ( {item}: {item: IPriceItem}) => {
  const imageSrc = IMAGES[item.id as keyof typeof IMAGES]

  return (
    <div className="w-auto h-[287px] relative overflow-hidden rounded-[5px] relative">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={item.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 424px"
          className='absolute top-0 left-0'
        />
      )}
      <div className='w-full h-full backdrop-blur-[0px]'></div>
    </div>
  )
}
export default PriceCard
