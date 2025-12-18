import Image from "next/image";
import React from "react";
import logo from "../../../public/ultimaLogoNew.png";
import logoInstagram from "../../../public/Instagram.png";
import logoTelegram from "../../../public/Telegram.png";

const Footer = () => {
  return (
    <div className="bg-[#171717] h-[420px] w-full flex items-end pb-[60px] px-[108px] tablet:px-[30px] mobile:h-auto mobile:py-[30px]">
      <div className="flex items-center justify-between w-full flex-wrap tablet:justify-center tablet:gap-[40px] mobile:flex-col mobile:gap-[20px]">
        <Image
          src={logo}
          alt="logo"
          className="cursor-pointer pointer-events-none select-none w-[350px] h-auto laptop:w-[250px] tablet:w-[200px]"
        />

        <div className="flex flex-col mobile:flex-row mobile:items-center mobile:gap-[20px] text-[17px] laptop:text-[15px] mobile:text-[13px] text-[#D1933C] mobile:text-center">
          <span>© Все права защищены — 2025</span>
          <span>ИНН 644926511121</span>
        </div>

        <div className="flex flex-col mobile:flex-row mobile:items-center mobile:gap-[20px] text-[17px] laptop:text-[15px] mobile:text-[13px] text-[#FFFFFF] mobile:text-center">
          <span>Дизайн и верстка сайта</span>
          <span>
            <span className="text-[#D1933C]">VK ST</span>UDIO
          </span>
        </div>

        <div className="flex gap-[45px] items-center">
          <div className="flex flex-col gap-[5px] items-center">
            <a
              href="https://www.instagram.com/ultima_detailing?igsh=MTF1a3d0dmY1eWZ4ag=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-[5px] items-center"
            >
              <Image src={logoInstagram} alt="logoInstagram" />
              <span className="text-[12px] text-[#FFFFFF]">Instagram</span>
            </a>
          </div>

          <div className="flex flex-col gap-[5px] items-center cursor-pointer">
            <a
              href="https://t.me/ultima_detailing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-[5px] items-center"
            >
              <Image src={logoTelegram} alt="logoTelegram" />
              <span className="text-[12px] text-[#FFFFFF]">Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
