"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import mainTitleLogo from "@/shared/assets/images/mainTitltLogo_2.png";

const MainTitleLogo = ({ className }: { className?: string }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100); // небольшая задержка
    return () => clearTimeout(timer);
  }, []);

  return (
    <Image
      src={mainTitleLogo}
      alt="Ultima Detailing"
      width={600}
      height={600}
      className={`absolute top-[45%] -translate-y-1/2 left-[150px] z-0
        laptop:w-[500px] laptop:h-[500px]
        tablet:left-1/2 tablet:-translate-x-1/2 tablet:w-[500px] tablet:h-[500px] 
        mobile:w-[70%] mobile:h-auto
        smallHeight:hidden 
        transition-opacity duration-2000 ease-in-out ${visible ? "opacity-100" : "opacity-0"}`}
    />
  );
};

export default MainTitleLogo;
