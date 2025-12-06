"use client";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import React, { useState } from "react";

const QuestionForm = () => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  // 1. Функция маски для телефона
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const input = e.target.value;
    
    // Оставляем только цифры
    let numbers = input.replace(/\D/g, "");

    // Если удалили всё — очищаем
    if (!numbers) {
      setNumber("");
      return;
    }

    // Если начали ввод с 8 (РФ стандарт), меняем на 7
    if (numbers.startsWith("8")) {
      numbers = "7" + numbers.slice(1);
    }
    
    // Если начали ввод с 9, добавляем 7 в начало
    if (numbers.startsWith("9")) {
      numbers = "79" + numbers.slice(1);
    }

    // Если первая цифра не 7, принудительно ставим 7
    if (numbers[0] !== "7") {
        numbers = "7" + numbers;
    }

    // Ограничиваем количество цифр (11 штук: 7 + 10 цифр номера)
    numbers = numbers.slice(0, 11);

    // Формируем красивую строку: +7 (XXX) XXX-XX-XX
    let formatted = "";
    if (numbers.length > 0) formatted += "+7";
    if (numbers.length > 1) formatted += " (" + numbers.substring(1, 4);
    if (numbers.length > 4) formatted += ") " + numbers.substring(4, 7);
    if (numbers.length > 7) formatted += "-" + numbers.substring(7, 9);
    if (numbers.length > 9) formatted += "-" + numbers.substring(9, 11);

    setNumber(formatted);
  };

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
  const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

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
        onChange={handlePhoneChange} // Используем нашу функцию маски
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
        maxLength={18} // Увеличили длину для учета скобок и пробелов
        minLength={18}
        type="tel" // Помогает открыть цифровую клавиатуру на мобильных
      />
    </Form>
  );
};

export default QuestionForm;