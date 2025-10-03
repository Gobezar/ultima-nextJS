import React from "react";
import Link from "./Link";
import { INavbarLink } from "../types";

const linksList: INavbarLink[] = [
  { id: 1, title: "Наши услуги", action: "services" },
  { id: 2, title: "Прайс-лист", action: "price" },
  { id: 3, title: "Контакты", action: "contacts" },
  { id: 4, title: "Как нас найти", action: "map" },
];

const NavbarLinks = () => {
  return (
    <div className="flex items-center gap-[67px]">
      {linksList.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
};

export default NavbarLinks;
