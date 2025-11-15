"use client";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import React, { useState } from "react";

const QuestionForm = () => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submitted", name, number);
  };

  // Регулярка: +7 и 10 цифр
  const phoneRegex = /^[+＋]7\d{10}$/;

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

          if (!trimmed) {
            return "Поле обязательно для заполнения";
          }

          if (trimmed.length < 2) {
            return "Имя должно содержать минимум 2 символа";
          }

          if (trimmed.length > 15) {
            return "Имя не может быть длиннее 15 символов";
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
        minLength={2}
        maxLength={15}
        style={{ color: "white" }}
      />

      <Input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        label="Введите ваш номер телефона:"
        placeholder="+7XXXXXXXXXX"
        variant="underlined"
        isRequired
        validate={(value) => {
          const trimmed = value.trim();

          if (!trimmed) return "Поле обязательно для заполнения";

          if (!phoneRegex.test(trimmed)) {
            return "Телефон должен быть в формате +7XXXXXXXXXX";
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
        maxLength={12}
        minLength={12}
      />
    </Form>
  );
};

export default QuestionForm;
