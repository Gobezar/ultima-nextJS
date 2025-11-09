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

interface ModalReviewProps extends Omit<ModalProps, "children"> {
  fetchReviews: () => void;
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
    const [formDataCache, setFormDataCache] = useState<any>(null);

    useEffect(() => {
      if (isCaptchaModalOpen) loadCaptchaEnginge(5);
    }, [isCaptchaModalOpen]);

    const handleSubmit = (data: any) => {
      setFormDataCache(data);
      openCaptcha();
    };

    const handleCaptchaSubmit = async () => {
      try {
        const isValid = validateCaptcha(captchaInput);
        if (!isValid) {
            throw new Error("Неверная капча");
        }

        await axios.post("http://localhost:4000/reviews", {
          author: formDataCache.name,
          rating: Number(formDataCache.rating),
          text: formDataCache.comment,
          car: formDataCache.car,
        });

        fetchReviews();
        closeCaptcha();
        onClose?.();
        NotificationService.success("Ваш отзыв успешно опубликован");
      } catch (err: any) {
        NotificationService.error(err.message || "Ошибка");
      } finally {
        setCaptchaInput('')
      }
    };

    return (
      <>
        {/* Основное модальное окно с формой */}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} {...props} ref={ref}>
          <ModalContent>
            <ModalHeader className="flex-col pt-8">
              <h1 className="text-large font-semibold text-[#E3E3E3]">
                Напишите отзыв
              </h1>
              {/* <p className="text-[13px] text-[#E3E3E3]">
                Оставьте отзыв об оказанной Вам услуге
              </p> */}
            </ModalHeader>
            <ModalBody className="pb-8">
              <form
                className="flex flex-col gap-6"
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const data = Object.fromEntries(formData.entries());
                  handleSubmit(data);
                }}
              >
                <Input
                  name="name"
                  label="Ваше имя"
                  placeholder="Иван"
                  startContent={<Icon icon="solar:user-bold" />}
                  maxLength={15}
                  isRequired
                />
                <Input
                  name="phone"
                  label="Номер телефона"
                  placeholder="+79994567080"
                  startContent={<Icon icon="solar:letter-bold" />}
                  maxLength={15}
                />
                <Divider />
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
                {/* <Input
                  name="car"
                  label="Марка автомобиля"
                  placeholder="Audi"
                  startContent={<Icon icon="solar:pen-bold" />}
                  maxLength={15}
                /> */}
                <Textarea
                  name="comment"
                  disableAutosize
                  classNames={{
                    input: "h-32 resize-y transition-none!",
                  }}
                  label="Комментарий к отзыву (макс. - 150 символов)"
                  placeholder="..."
                  maxLength={150}
                  minLength={5}
                  isRequired
                />
                <Button type="submit">Отправить</Button>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Модальное окно капчи */}
        <Modal
          isOpen={isCaptchaModalOpen}
          onOpenChange={captchaModalOpenChange}
          onClose={() => setCaptchaInput('')}
        >
          <ModalContent>
            <ModalHeader className="flex-col pt-8">
              <h1 className="text-large font-semibold text-[#E7E7E7]">
                Подтвердите, что вы не робот
              </h1>
            </ModalHeader>
            <ModalBody className="pb-8 flex flex-col gap-4 items-center">
              <LoadCanvasTemplate reloadText="↻" />
              <Input
                label="Введите символы с картинки"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
              />
              <div className="flex gap-3 mt-3">
                <Button onPress={handleCaptchaSubmit}>Подтвердить</Button>
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
