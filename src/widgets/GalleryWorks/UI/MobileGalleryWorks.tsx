// components/MobileImageSlider.tsx
"use client";

import React, { useState } from "react";
// Импортируем motion и AnimatePresence для анимаций и жестов
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@heroui/progress";
import { Icon } from "@iconify/react";
// Импортируем Progress из Hero UI
// Импортируем иконки для кнопок

// Определяем типы для пропсов
interface MobileImageSliderProps {
  images: string[]; // Массив URL-адресов изображений
}

// Настройки для анимации сдвига
const variants = {
  // direction - "направление" (1 для "вперед", -1 для "назад")
  enter: (direction: number) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%", // Уходит в противоположном направлении
      opacity: 0,
    };
  },
};

// Порог для свайпа (минимальная скорость)
const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const MobileGalleryWorks: React.FC<MobileImageSliderProps> = ({ images }) => {
  // Cостояние для хранения текущего индекса и направления анимации
  // [[page, direction], setPage]
  const [[page, direction], setPage] = useState([0, 0]);

  // Вычисляем индекс изображения.
  // % (оператор остатка) гарантирует, что индекс всегда будет в пределах [0, images.length - 1]
  const imageIndex = ((page % images.length) + images.length) % images.length;

  // Функция для "листания"
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Вычисляем значение для Progress Bar
  const progressValue = ((imageIndex + 1) / images.length) * 100;

  console.log(page);

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden">
      {/* 1. КОНТЕЙНЕР СЛАЙДЕРА С ANIMATE PRESENCE */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        {/* AnimatePresence необходим для анимации "ухода" элемента.
          initial={false} - отключает анимацию при первой загрузке.
          custom={direction} - передает направление в 'variants'.
        */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            // 'key' КРИТИЧЕСКИ важен. Он заставляет React
            // и AnimatePresence "увидеть" смену изображения.
            key={page}
            src={images[imageIndex]}
            alt={`Slide ${imageIndex + 1}`}
            // Передаем направление в 'variants'
            custom={direction}
            variants={variants}
            initial="enter" // Начальное состояние (за экраном)
            animate="center" // Активное состояние (в центре)
            exit="exit" // Конечное состояние (уходит за экран)
            // Анимация (пружина)
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            // 2. ОБРАБОТКА СВАЙПОВ (GESTURES)
            drag="x" // Включаем свайп по горизонтали
            dragConstraints={{ left: 0, right: 0 }} // Не дает "утащить" картинку
            dragElastic={1} // Эффект "резинки"
            // 'onDragEnd' - срабатывает, когда пользователь отпускает палец
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                // Свайп влево (следующее изображение)
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                // Свайп вправо (предыдущее изображение)
                paginate(-1);
              }
            }}
            // 3. СТИЛИ ИЗОБРАЖЕНИЯ
            className="absolute w-full h-full object-cover rounded-1 rounded-xl"
          />
        </AnimatePresence>
      </div>

      {/* 3. ПРОГРЕСС БАР И КНОПКИ УПРАВЛЕНИЯ */}
      <div className="w-full px-4 pt-4">
        {/* Шкала Progress из Hero UI */}
        <div className="mb-4">
          <Progress value={progressValue} color="warning" />
        </div>

        {/* Контейнер для кнопок */}
        <div className="flex justify-between items-center w-full">
          {/* Кнопка "Назад" */}

            <button
              onClick={() => paginate(-1)} // Листаем назад
              className="p-3 bg-gray-700 text-white rounded-full transition-colors hover:bg-gray-600 "
            >
              <Icon icon={"solar:alt-arrow-left-linear"} />
            </button>


          {/* Счетчик */}
          <span className="text-[13px] font-medium text-[#E7E7E7]">
            {imageIndex + 1} / {images.length}
          </span>

          {/* Кнопка "Вперед" */}
            <button
              onClick={() => paginate(1)} // Листаем вперед
              className="p-3 bg-gray-700 text-white rounded-full transition-colors hover:bg-gray-600 "
            >
              <Icon icon={"solar:alt-arrow-right-outline"} />
            </button>

        </div>
      </div>
    </div>
  );
};

export default MobileGalleryWorks;
