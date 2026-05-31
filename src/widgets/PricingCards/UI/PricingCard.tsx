import { WashPriceTier } from "@/app/mojka-avtomobilja/consts";
import { Icon } from "@iconify/react";
import { Card, CardBody } from "@heroui/card";
import classNames from "classnames";

interface PricingCardProps {
  tier: WashPriceTier;
  serviceTitle: string;
  isDark?: boolean;
}

const PricingCard = ({
  tier,
  serviceTitle,
}: PricingCardProps) => {
  return (
    <Card className="rounded-large">
      <CardBody
        className={classNames(
          "flex flex-col items-center gap-[15px] p-[25px] tablet:p-[20px] mobile:p-[15px] bg-[#3D3B39]" 
        )}
      >
        <span className="text-[#A1A1AA] text-[13px] laptop:text-[12px] mobile:text-[11px] uppercase tracking-wide font-montseratt">
          Размер автомобиля
        </span>

        <div className="w-full h-[100px] laptop:h-[90px] mobile:h-[80px] bg-[#454342] rounded-[5px] flex items-center justify-center">
          <Icon
            icon="mdi:car-side"
            className="w-[60px] h-[60px] laptop:w-[50px] laptop:h-[50px] text-[#A1A1AA] opacity-40"
          />
        </div>

        <h3 className="text-[#FFFFFF] font-semibold text-[17px] laptop:text-[15px] mobile:text-[13px] text-center font-montseratt">
          {serviceTitle}
        </h3>

        <p className="text-[#CCCCCC] text-[13px] laptop:text-[13px] mobile:text-[12px] text-center font-light font-montseratt flex-1">
          {tier.description}
        </p>

        <div
          className={classNames(
            "w-full h-[45px] flex items-center justify-center rounded-[30px] text-[16px] laptop:text-[15px] mobile:text-[14px] font-normal font-montseratt bg-[#9d9d9d] border border-[#737170] text-[#FFFFFF]",
          )}
        >
          {tier.price}
        </div>
      </CardBody>
    </Card>
  );
};

export default PricingCard;
