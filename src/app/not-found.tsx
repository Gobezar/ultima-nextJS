import { Button } from "@/shared";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#171717] text-white">
      <h1
        className=" font-bold mb-6 text-[52px] leading-[24px] text-[#FFFFFFDB] laptop:text-[40px]
            tablet:text-[35px]
            mobile:text-[35px]"
      >
        404
      </h1>
      <p className=" mb-8 text-[32px] leading-[24px] text-[#FFFFFFDB] laptop:text-[30px]
            tablet:text-[25px]
            mobile:text-[20px]">Страница не найдена</p>
      <Link href="/">
        <Button className="w-[304px]">На главную</Button>
      </Link>
    </div>
  );
}
