"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalProps,
  useDisclosure,
} from "@heroui/modal";
import { Input, Textarea } from "@heroui/input";
import { Divider } from "@heroui/divider";
import { Button } from "@/shared";
import RatingRadioGroup from "../lib/RatingRadioGroup";
import axios from "axios";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { NotificationService } from "@/shared/UI/Toast/Toast";
import { phoneMask, phoneRegex } from "@/shared/helpers/phoneMask";

interface ReviewFormData {
  name: string;
  phone: string;
  rating: string;
  comment: string;
  number: string;
}

interface ModalReviewProps extends Omit<ModalProps, "children"> {
  fetchReviews: () => void; // Это будет вызов router.refresh()
  onClose: () => void;
}

const ModalReview = React.forwardRef<HTMLDivElement, ModalReviewProps>(
  ({ isOpen, onOpenChange, fetchReviews, onClose, ...props }, ref) => {
    const {
      isOpen: isCaptchaModalOpen,
      onOpenChange: captchaModalOpenChange,
      onOpen: openCaptcha,
      onClose: closeCaptcha,
    } = useDisclosure();

    const [captchaInput, setCaptchaInput] = useState("");
    const [formDataCache, setFormDataCache] = useState<ReviewFormData | null>(
      null
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    useEffect(() => {
      if (isCaptchaModalOpen) {
        loadCaptchaEnginge(5);
      }
    }, [isCaptchaModalOpen]);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(
        formData.entries()
      ) as unknown as ReviewFormData;

      setFormDataCache({ ...data, phone: phoneNumber });
      openCaptcha();
    };

    const handleCaptchaSubmit = async () => {
      if (!formDataCache) return;

      setIsSubmitting(true);
      try {
        const isValid = validateCaptcha(captchaInput);
        if (!isValid) {
          throw new Error("Неверная капча");
        }

        // Отправляем данные на API
        await axios.post("/api/reviews", {
          author: formDataCache.name,
          rating: Number(formDataCache.rating),
          text: formDataCache.comment,
          media: [],
          phone: formDataCache.phone,
        });

        NotificationService.success("Ваш отзыв успешно опубликован");

        // 1. Закрываем капчу
        setCaptchaInput("");
        closeCaptcha();
        // 2. Закрываем модалку отзыва
        onClose();
        // 3. Обновляем данные на странице (Server Action / Router Refresh)
        fetchReviews();
      } catch (err: any) {
        const errorMessage =
          err.response?.data?.error ||
          err.message ||
          "Ошибка при добавлении отзыва";
        NotificationService.error(errorMessage);
        // Перезагружаем капчу при ошибке, чтобы пользователь мог попробовать снова
        loadCaptchaEnginge(5);
        setCaptchaInput("");
      } finally {
        setIsSubmitting(false);
        setPhoneNumber("");
      }
    };

    const resetForm = () => {
      setFormDataCache(null);
      setCaptchaInput("");
      setPhoneNumber("");
      setIsSubmitting(false);
    };

    return (
      <>
        {/* Основное модальное окно */}
        <Modal
          isOpen={isOpen}
          onOpenChange={(open) => {
            onOpenChange?.(open);
            if (!open) resetForm(); 
          }}
          {...props}
          ref={ref}
        >
          <ModalContent>
            {(onCloseModal) => (
              <>
                <ModalHeader className="flex-col pt-8">
                  <h1 className="text-large font-semibold text-[#E3E3E3]">
                    Напишите отзыв
                  </h1>
                </ModalHeader>
                <ModalBody className="pb-8">
                  <form
                    className="flex flex-col gap-6"
                    onSubmit={handleFormSubmit}
                  >
                    <Input
                      name="name"
                      label="Ваше имя"
                      placeholder="Иван"
                      // startContent={<Icon icon="solar:user-bold" />}
                      maxLength={15}
                      isRequired
                      classNames={{ inputWrapper: "bg-[#27272a]" }} // Пример стилизации под темную тему
                    />
                    <Input
                      value={phoneNumber}
                      onChange={(e) => phoneMask(e, setPhoneNumber)}
                      label="Введите ваш номер телефона:"
                      placeholder="+7 (999) 000-00-00"
                      variant="flat"
                      isRequired
                      validate={(value) => {
                        const trimmed = value.trim();
                        if (!trimmed) return "Поле обязательно для заполнения";
                        if (!phoneRegex.test(trimmed)) {
                          return "Введите корректный номер";
                        }
                      }}
                      // startContent={<Icon icon="solar:letter-bold" />}
                      maxLength={18}
                      disableAnimation
                      style={{ color: "white" }}
                      minLength={18}
                      type="tel"
                    />
                    <Divider className="bg-[#3f3f46]" />

                    <RatingRadioGroup
                      name="rating"
                      hideStarsText
                      className="flex-col-reverse items-start"
                      color="warning"
                      label={
                        <span className="text-[13px] text-[#E3E3E3]">
                          Укажите оценку выполненной работы
                        </span>
                      }
                      isRequired
                    />

                    <Textarea
                      name="comment"
                      disableAutosize
                      classNames={{
                        input: "h-32 resize-y transition-none text-[#E3E3E3]",
                        inputWrapper: "bg-[#27272a]",
                      }}
                      label="Комментарий к отзыву (макс. 150 символов)"
                      placeholder="..."
                      maxLength={150}
                      minLength={5}
                      isRequired
                    />
                    <Button type="submit" isLoading={false}>
                      Отправить
                    </Button>
                  </form>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>

        {/* Модальное окно капчи */}
        <Modal
          isOpen={isCaptchaModalOpen}
          onOpenChange={captchaModalOpenChange}
          onClose={() => setCaptchaInput("")}
          isDismissable={!isSubmitting} // Нельзя закрыть кликом вне, пока идет отправка
        >
          <ModalContent>
            <ModalHeader className="flex-col pt-8">
              <h1 className="text-large font-semibold text-[#E7E7E7]">
                Подтвердите, что вы не робот
              </h1>
            </ModalHeader>
            <ModalBody className="pb-8 flex flex-col gap-4 items-center">
              <div className="bg-white p-2 rounded">
                <LoadCanvasTemplate reloadText="↻" />
              </div>
              <Input
                label="Введите символы с картинки"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                classNames={{ inputWrapper: "bg-[#27272a]" }}
              />
              <div className="flex gap-3 mt-3">
                <Button onPress={handleCaptchaSubmit} isLoading={isSubmitting}>
                  Подтвердить
                </Button>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
);

ModalReview.displayName = "ModalReview";

export default ModalReview;
