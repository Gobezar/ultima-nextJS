import Image, { StaticImageData } from "next/image";
import React from "react";
import service_1 from "../../../../public/service_1.jpg";
import service_2 from "../../../../public/service_2.jpg";
import service_3 from "../../../../public/service_3.jpg";
import service_4 from "../../../../public/service_4.jpg";
import service_5 from "../../../../public/service_5.jpg";
import service_6 from "../../../../public/service_6.jpg";
import tools from "../../../../public/toolsService.png";
import { IServiceCard } from "../types";
import "./styles.css";
import Link from "next/link";

const images: Record<number, StaticImageData> = {
  1: service_1,
  2: service_2,
  3: service_3,
  4: service_4,
  5: service_5,
  6: service_6,
};

const ServiceCard = ({ item }: { item: IServiceCard }) => {
  return (
    <Link href={`/services/${item.link}`}>
    <div
      className={`wrapper-${item.id} w-[424px] h-[634px] flex flex-col bg-[#2524247A] backdrop-blur-[10px] shadow-[0px_4px_100px_0px_#00000040] border-[#000000C4] relative
        laptop:w-[350px] laptop:h-[500px]
        tablet:w-[330px] laptop:h-[480px]
        mobile:w-full mobile:h-[250px] mobile:border-1 mobile:border-[#000000C4]
    `}
    >
      <Image
        src={images[item.id]}
        alt="service image"
        width={424}
        height={316}
        className="object-cover laptop:w-[350px] tablet:w-[330px] mobile:w-full mobile:hidden"
      />
      <Image
        src={tools}
        alt="tools"
        className="absolute bottom-[24px] right-[19px]"
      />
      <div className="flex flex-col pl-[21px] pr-[52px] mobile:h-full mobile:backdrop-blur-[6px]">
        <div>
          <h4 className="font-semibold text-[20px] leading-[24px] text-[#FFFFFF] mt-[37px] mb-[10px] 
            laptop:text-[18px] laptop:mt-[25px]
            mobile:text-[15px] mobile:mt-[21px]
            ">
            {item.title}
          </h4>
        </div>
        <div className="w-[87px] h-[2px] bg-[#D1933C] mb-[24px] laptop:mb-[18px] mobile:mb-[10px]"></div>
        <div>
          <p
            className="font-normal text-[17px] laptop:text-[15px] mobile:text-[13px] leading-[24px] text-[#FFFFFFD6]
                overflow-hidden text-ellipsis 
                [display:-webkit-box] [-webkit-line-clamp:8] [-webkit-box-orient:vertical]
                laptop:[-webkit-line-clamp:7]
                mobile:[-webkit-line-clamp:7]
            ">
            {item.description}
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ServiceCard;
