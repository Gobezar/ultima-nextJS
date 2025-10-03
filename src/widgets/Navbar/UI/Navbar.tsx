"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../public/ultimaLogo.png";
import NavbarLinks from "../lib/NavbarLinks";
import { useMediaQuery } from "@/shared/helpers/hooks/useMediaQuery";
import BurgerMenu from "../../BurgerMenu/UI/BurgerMenu";

const Navbar = () => {
  const { breakPoint } = useMediaQuery();
  const isTablet = breakPoint === "tablet";
  const isMobile = breakPoint === "mobile";
  const [open, setOpen] = useState(false); 
  if (isTablet || isMobile) {
    return (
      <div
        className={`fixed top-0 left-0 h-[70px] w-full flex items-center justify-between px-6 
 mobile:flex tablet:flex z-50 ${!open ? "backdrop-blur-[200px]" : ""}`}
      >
        <Image
          src={logo}
          alt="logo"
          className="cursor-pointer pointer-events-none select-none w-[120px] h-auto"
        />
        <BurgerMenu open={open} setOpen={setOpen} />
      </div>
    );
  }

  return (
    <div
      className={`fixed top-0 left-0 h-[102px] w-full flex items-center justify-between 
        py-[15px] pl-[106px] pr-[99px] z-50 flex mobile:hidden tablet:hidden ${
          !open ? "backdrop-blur-[200px]" : ""
        }`}
    >
      <Image
        src={logo}
        alt="logo"
        className="cursor-pointer pointer-events-none select-none"
      />
      <NavbarLinks />
    </div>
  );
};

export default Navbar;
