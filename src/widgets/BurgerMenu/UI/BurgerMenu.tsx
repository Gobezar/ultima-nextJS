"use client";
import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const BurgerMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) => {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pendingAction = useRef<null | (() => void)>(null);
  const scrollYRef = useRef<number>(0);
  const transitionTimeoutRef = useRef<number | null>(null);

  // Если переход происходит со другой страницы

// Например, если ты нажимаешь "Наши услуги" когда находишься НЕ на /, то scrollIntoView не сработает.
// { id: 2, title: "Наши услуги", action: () => router.push('/#ourServicesContainer') },
// 2. В компоненте главной страницы — включи авто-скролл:
// import { useEffect } from "react";
// import { usePathname, useSearchParams } from "next/navigation";

// useEffect(() => {
//   const hash = window.location.hash;
//   if (hash) {
//     const element = document.querySelector(hash);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   }
// }, []);

  const navbarLinks = [
    { id: 1, title: "Главная", action: () => router.push("/") },
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

  // Блокируем скролл при открытом меню — через фиксирование body и сохранение scrollY
  useEffect(() => {
    const body = document.body;
    if (open) {
      scrollYRef.current = window.scrollY || window.pageYOffset || 0;
      // фиксируем страницу
      body.style.position = "fixed";
      body.style.top = `-${scrollYRef.current}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
    } else {
      // НЕ восстанавливаем здесь — дождёмся transitionend, чтобы избежать дерганья
      // восстановление делается в обработчике transitionend
    }

    return () => {
      // на случай, если компонент размонтируется — почистим стили и восстановим скролл
      if (body.style.position === "fixed") {
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        body.style.width = "";
        window.scrollTo(0, scrollYRef.current);
      }
    };
  }, [open]);

  // Слушаем конец transition у меню: восстанавливаем скролл и выполняем отложенное действие
  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;

    const onTransitionEnd = (e: TransitionEvent) => {
      // фильтр: убедимся, что это transition самого контейнера (а не вложенного элемента)
      if (e.target !== el) return;

      const body = document.body;
      // если меню закрывается (open = false), восстановим скролл и выполним действие
      if (!open) {
        // восстановим стили body и прокрутим назад
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        body.style.width = "";
        window.scrollTo(0, scrollYRef.current);

        // выполним отложенное действие (если есть)
        if (pendingAction.current) {
          const fn = pendingAction.current;
          pendingAction.current = null;
          // выполнить в следующем цикле, чтобы точно дать браузеру стабилизироваться
          setTimeout(() => fn(), 0);
        }

        // очистка fallback таймаута, если он был установлен
        if (transitionTimeoutRef.current) {
          window.clearTimeout(transitionTimeoutRef.current);
          transitionTimeoutRef.current = null;
        }
      }
    };

    el.addEventListener("transitionend", onTransitionEnd);

    return () => {
      el.removeEventListener("transitionend", onTransitionEnd);
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = null;
      }
    };
  }, [open]);

  // Если пользователь кликает по пункту — ставим pendingAction и закрываем меню.
  // Если transition не сработает (например, нет стилей), у нас есть fallback timeout (duration + 50ms).
  const handleLinkClick = (action: () => void) => {
    pendingAction.current = action;
    setOpen(false);

    // fallback: если transitionend по каким-то причинам не вызовется (например, нет transition),
    // выполним действие через 350ms (т.к. у тебя transition-duration: 300ms).
    if (transitionTimeoutRef.current) {
      window.clearTimeout(transitionTimeoutRef.current);
    }
    transitionTimeoutRef.current = window.setTimeout(() => {
      // если pendingAction все еще висит — выполним и восстановим скролл здесь
      const body = document.body;
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      window.scrollTo(0, scrollYRef.current);

      if (pendingAction.current) {
        const fn = pendingAction.current;
        pendingAction.current = null;
        fn();
      }
      transitionTimeoutRef.current = null;
    }, 350);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="z-[150] relative focus:outline-none"
        aria-label="Toggle menu"
      >
        <Icon
          icon="solar:hamburger-menu-linear"
          color="#e7e7e7"
          width={40}
          height={40}
        />
      </button>

      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full h-[100vh] shadow-lg z-[100] flex flex-col p-6 
          bg-black/60 transform transition-transform duration-300 ease-in-out
          backdrop-blur-md
          ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav
          className="flex flex-col space-y-4 mt-[30px]
          tablet:px-[40px]
          mobile:px-0"
        >
          {navbarLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              className="text-[#e7e7e7] text-[20px] font-normal transition-colors flex items-center h-[50px] mobile:text-[17px]"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.action);
              }}
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
