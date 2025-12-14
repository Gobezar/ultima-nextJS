"use client";
import { phoneMask, phoneRegex } from "@/shared/helpers/phoneMask";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import React, { useState } from "react";

const QuestionForm = () => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");


  

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // 2. Для отправки в Telegram лучше убрать скобки и пробелы, оставив чистый номер
    const cleanNumber = number.replace(/\D/g, ""); // Получится 79990000000

    const message = `
Добрый день. Меня зовут ${name}. 
Я хотел бы получить консультацию по своему автомобилю. 
Мой номер телефона +${cleanNumber}. Пожалуйста, перезвоните мне.
  `;

    const encoded = encodeURIComponent(message.trim());
    const url = `https://t.me/ultimadetailing?text=${encoded}`;

    window.open(url, "_blank");
  };

  // 3. Обновляем регулярку: теперь она проверяет полный формат со скобками
  // Формат: +7 (XXX) XXX-XX-XX

  return (
    <Form
      className="gap-[226px] tablet:gap-[130px] mobile:flex-col! mobile:gap-[30px] mobile:w-full"
      style={{ display: "flex", flexDirection: "row" }}
      onSubmit={handleSubmit}
      id="question-form"
    >
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Введите ваше имя:"
        placeholder="Иван"
        variant="underlined"
        isRequired
        validate={(value) => {
          const trimmed = value.trim();
          if (!trimmed) return "Поле обязательно для заполнения";
          if (trimmed.length < 2) return "Имя должно содержать минимум 2 символа";
          if (trimmed.length > 15) return "Имя не может быть длиннее 15 символов";
        }}
        className="w-[420px] text-white text-[17px] laptop:w-[350px] laptop:text-[15px] tablet:w-[260px] mobile:w-full"
        classNames={{
          inputWrapper: `
            before:hidden
            after:hidden
            border-b-[2px] border-[#D1933C]
            hover:border-[#D1933C]
            focus:border-[#D1933C]
            group-data-[hover=true]:border-[#D1933C]
            group-data-[focus=true]:border-[#D1933C]
            `,
        }}
        disableAnimation
        minLength={2}
        maxLength={15}
        style={{ color: "white" }}
      />

      <Input
        value={number}
        onChange={(e) => phoneMask(e, setNumber)}
        label="Введите ваш номер телефона:"
        placeholder="+7 (999) 000-00-00"
        variant="underlined"
        isRequired
        validate={(value) => {
          const trimmed = value.trim();
          if (!trimmed) return "Поле обязательно для заполнения";
          if (!phoneRegex.test(trimmed)) {
            return "Введите корректный номер";
          }
        }}
        className="w-[420px] text-white text-[17px] laptop:w-[350px] laptop:text-[15px] tablet:w-[260px] mobile:w-full"
        classNames={{
          inputWrapper: `
            before:hidden
            after:hidden
            border-b-[2px] border-[#D1933C]
            hover:border-[#D1933C]
            focus:border-[#D1933C]
            group-data-[hover=true]:border-[#D1933C]
            group-data-[focus=true]:border-[#D1933C]
            `,
        }}
        disableAnimation
        style={{ color: "white" }}
        maxLength={18}
        minLength={18}
        type="tel" 
      />
    </Form>
  );
};

export default QuestionForm;