"use client";

import React from "react";
import { INavbarLink } from "../types";
import '../UI/Navbar.css'

const Link = ({ link }: { link: INavbarLink }) => {
  const handleClick = () => {
    switch (link.action) {
      case "services":
        console.log("Открываем услуги");
        break;
      case "price":
        console.log("Открываем прайс-лист");
        break;
      case "contacts":
        console.log("Открываем контакты");
        break;
      case "map":
        console.log("Открываем карту");
        break;
      default:
        console.log("Неизвестное действие");
    }
  };

  return (
    <a
      className="font-montseratt underline-one font-normal text-[17px] leading-[22px] p-[15px] text-[#E7E7E7] cursor-pointer select-none
        laptop:text-[15px]
        mobile:text-[13px]
      "
      onClick={handleClick}
    >
      {link.title}
    </a>
  );
};

export default Link;
