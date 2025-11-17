"use client";

import React from "react";
import { INavbarLink } from "../types";
import '../UI/Navbar.css'

const Link = ({ link }: { link: INavbarLink }) => {

  return (
    <a
      className="font-montseratt underline-one font-normal text-[17px] leading-[22px] p-[15px] text-[#E7E7E7] cursor-pointer select-none
        laptop:text-[15px]
        mobile:text-[13px]
      "
      onClick={link.action}
    >
      {link.title}
    </a>
  );
};

export default Link;
