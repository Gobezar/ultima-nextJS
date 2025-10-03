import Navbar from "@/widgets/Navbar/UI/Navbar";
import OurServices from "@/widgets/OurServices/UI/OurServices";
import { Button } from "@/shared";
import "./globals.css";
import DoubleDown from "@/shared/UI/DoubleDown/UI/DoubleDown";
import MainTitleLogo from "@/shared/UI/MainTitleLogo/UI/MainTitleLogo";

export default function Home() {
  return (
    <>

      <div className="relative min-h-screen bg-cover bg-top bg-[url('/mainBg.jpg')]
        tablet:bg-[100%] mobile:bg-left
      ">
        <div className="absolute bottom-0 left-0 right-0 h-70 bg-gradient-to-b from-transparent to-[#171717]" />
        <div
          className="flex items-center gap-[499px] absolute bottom-[90px] left-1/2 -translate-x-1/2 
        laptop:gap-[300px] 
        tablet:gap-[150px] 
        mobile:flex-col mobile:w-[90%] mobile:gap-[25px] mobile:bottom-[25px]"
        >
          <Button className="w-[308px] tablet:w-[250px] mobile:w-full">
            Позвонить нам
          </Button>
          <Button className="w-[308px] tablet:w-[250px] mobile:w-full">
            Записаться онлайн
          </Button>
        </div>
        <MainTitleLogo />
        <DoubleDown className="absolute bottom-[25px] left-1/2 -translate-x-1/2 bounce-click-hover mobile:hidden" />
      </div>
      <OurServices />
      <Navbar />
    </>
  );
}
