"use client";
import React from "react";
import { Icon } from "@iconify/react";

const navbarLinks = [
  { id: 1, title: "Главная", action: () => console.log(1) },
  { id: 2, title: "О нас", action: () => console.log(2) },
  { id: 3, title: "Услуги", action: () => console.log(3) },
  { id: 4, title: "Контакты", action: () => console.log(4) },
  { id: 5, title: "Блог", action: () => console.log(5) },
];

const BurgerMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (arf: boolean) => void;
}) => {
  const handleLinkClick = (action: () => void) => {
    action();
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="z-[150] relative focus:outline-none"
      >
        <Icon
          icon="solar:hamburger-menu-linear"
          color="#e7e7e7"
          width={40}
          height={40}
        />
      </button>

      {/* Оверлей (пока убран, возможно не нужен) */}
      {/* <div
        className={`fixed inset-0 z-[90] h-[100vh] opacity-0`}
        onClick={() => setOpen(false)}
      /> */}

      {/* Панель меню*/}
      <div
        className={`fixed top-0 left-0 w-full h-[100vh] shadow-lg z-[100] flex flex-col p-6 
          bg-black/60 transform transition-transform duration-300 ease-in-out
          backdrop-blur-md
          ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav className="flex flex-col space-y-4 mt-[30px]
          tablet:px-[40px]
          mobile:px-0
        ">
          {navbarLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              className="text-[#e7e7e7] text-[20px] font-normal transition-colors flex items-center h-[50px] mobile:text-[17px]"
              onClick={() => handleLinkClick(link.action)}
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default BurgerMenu;
