//@ts-ignore
import { CardHeader, CardBody, Card, Image } from "@heroui/react";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  description: ReactNode;
  image?: string;
}

const PreviewServiceCard = ({ title, description, image }: Props) => {
  return (
    <Card className="overflow-auto py-4 w-[500px] h-[500px] flex flex-col laptop:w-[400px] laptop:h-[400px] tablet:w-full">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start shrink-0">
        <h4 className="font-bold text-[20px] laptop:text-[18px] mobile:text-[15px] leading-[24px] text-[#D1933C]">
          {title}
        </h4>
        <div className="text-tiny text-[17px] laptop:text-[15px] mobile:text-[13px] leading-[24px] text-[#A1A1AA]">
          {description}
        </div>
      </CardHeader>
      <CardBody className="overflow-hidden py-2 flex-grow">
        <Image
          alt={title}
          className="object-cover w-full h-full rounded-xl"
          src={image || "https://heroui.com/images/hero-card-complete.jpeg"}
          removeWrapper
        />
      </CardBody>
    </Card>
  );
};

export default PreviewServiceCard;
