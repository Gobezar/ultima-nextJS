import React from "react";
import Link from "./Link";
import { INavbarLink } from "../types";
import { useRouter } from "next/navigation";

const NavbarLinks = () => {
  const router = useRouter();

  const linksList: INavbarLink[] = [
    // { id: 1, title: "Главная", action: () => router.push("/") },
    {
      id: 2,
      title: "Наши услуги",
      action: () => {
        const element = document.getElementById("ourServicesContainer");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: 3,
      title: "Прайс-лист",
      action: () => {
        const element = document.getElementById("priceContainer");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: 4,
      title: "Примеры работ",
      action: () => {
        const element = document.getElementById("portfolioContainer");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: 5,
      title: "Контакты",
      action: () => {
        const element = document.getElementById("contactsContainer");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];
  return (
    <div className="flex items-center gap-[67px]">
      {linksList.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
};

export default NavbarLinks;
