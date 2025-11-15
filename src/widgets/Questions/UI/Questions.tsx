import React from "react";
import phone from "../../../../public/phone.png";
import smoke from "../../../../public/smoke.png";
import wheels from "../../../../public/wheels.png";
import Image from "next/image";
import QuestionForm from "./QuestionForm";
import { Button } from "@/shared";

const Questions = () => {
  return (
    <div
      className="
        relative
        bg-[#2D2D2D]
        pt-[64px] px-[20px] pb-[40px] laptop:px-[60px] tablet:pb-[40px] mobile:px-[40px] mobile:pt-[40px] mobile:pb-[40px]
        w-full h-[700px] laptop:h-[630px] tablet:h-[560px] mobile:h-auto
        shadow-[-10px_0px_100px_0px_#000000]
        bg-no-repeat bg-center bg-cover
        mobile:bg-none!
      "
      style={{
        backgroundImage: `url(${smoke.src})`,
      }}
    >
      <div className="ml-auto w-fit relative z-[2] laptop:w-full">
        <div className="flex items-center gap-[107px]  mr-[453px] laptop:mr-[0px] laptop:gap-[60px] mobile:justify-center">
          <div className="flex flex-col">
            <div>
              <span className="font-semibold leading-[24px] text-[49px] text-[#FFFFFF] laptop:text-[39px] mobile:text-[20px]">
                Остались вопросы?
              </span>
            </div>
            <div className="mt-[20px]  mobile:mt-[10px]">
              <span className="font-light leading-[27px] text-[24px] text-[#FFFFFF] laptop:text-[20px] mobile:text-[15px]">
                Заполните форму и мы вам перезвоним.
              </span>
            </div>
          </div>
          <div style={{ width: "7vw", height: "auto" }}>
            <Image
              src={phone}
              alt="phone"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
        </div>

        <div className="mt-[85px] mr-[147px] flex laptop:mt-[60px] laptop:justify-end mobile:mr-[0px] tablet:mr-[0px] mobile:justify-center mobile:mt-[33px]">
          <QuestionForm />
        </div>
        <div className="mt-[118px] mr-[147px] flex justify-end laptop:mt-[80px] laptop:mr-[0px] mobile:mt-[50px]">
          <Button className="w-[308px] mobile:w-full" type="submit" form="question-form">
            Оставить заявку
          </Button>
        </div>
      </div>
      <div
        className="absolute bottom-[-100px] left-0 tablet:bottom-[-50px]! tablet:w-[23vw]! mobile:hidden"
        style={{ width: "25vw", height: "auto" }}
      >
        <Image
          src={wheels}
          alt="wheels"
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>
    </div>
  );
};

export default Questions;
