import React from 'react';

// Типизация для элементов массива
export interface FeatureItem {
  title: string;
  description: string;
}

interface Props {
    features: FeatureItem[]
}

const FeatureGrid = ({features}: Props) => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        {/* Контейнер сетки */}
        <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-y-12 gap-x-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative flex flex-col space-y-4 group"
            >
              {/* Вертикальная линия-разделитель (опционально, как на макете) */}
              <div className="absolute -left-4 top-0 h-full w-[1px] bg-[#292929] hidden lg:block" />
              
              <h3 className="font-semibold text-[20px] leading-[24px] text-[#FFFFFF]  mb-[10px] 
            laptop:text-[18px]
            mobile:text-[15px]">
                {feature.title}
              </h3>
              
              <p className="text-[#A1A1AA] font-light font-normal text-justify text-[17px] laptop:text-[15px] mobile:text-[13px] leading-[24px]
                [display:-webkit-box] [-webkit-line-clamp:8] [-webkit-box-orient:vertical]
                laptop:[-webkit-line-clamp:7]
                mobile:[-webkit-line-clamp:7]">
                {feature.description}
              </p>
              
              {/* Декоративный элемент снизу при наведении (стиль Hero UI) */}
              {/* <div className="h-1 w-0 bg-[#D1933C] transition-all duration-300 group-hover:w-12" /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;