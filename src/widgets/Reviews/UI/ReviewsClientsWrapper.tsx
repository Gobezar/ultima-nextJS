"use client";

import React, { useEffect, useState } from "react";
import ReviewsList from "./ReviewsList";
import { Button } from "@/shared";
import { useDisclosure } from "@heroui/modal";
import ModalReview from "./AddReviewModal";
import { useRouter } from "next/navigation";

interface ReviewsClientWrapperProps {
  initialReviews: any[];
}

const ReviewsClientWrapper = ({ initialReviews }: ReviewsClientWrapperProps) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  // Нам больше не нужен loading state, так как данные пришли с сервера
  const [reviews, setReviews] = useState(initialReviews);
  const router = useRouter();

  useEffect(() => {
    setReviews(initialReviews);
  }, [initialReviews]);

  // Функция обновления теперь просто делает revalidate (через router.refresh)
  // или повторный запрос, если нужно мгновенное обновление без перезагрузки страницы
  const refreshReviews = async () => {
     // Опционально: можно сделать fetch тут, чтобы обновить список на клиенте сразу
     // Но для экономии ресурсов лучше просто подождать ISR или добавить отзыв в стейт вручную
     router.refresh(); 
  };

  return (
    <div className="flex flex-col w-full items-center">
      <ReviewsList reviews={reviews} />
      
      <ModalReview
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        // Мы передаем refreshReviews, но в ModalReview нужно немного поправить логику (см. ниже)
        fetchReviews={refreshReviews} 
      />

      <div className="w-full flex justify-end px-[50px] mt-[50px] mobile:justify-center mobile:px-[40px]">
        <Button className="w-[308px] mobile:w-full" onPress={onOpenChange}>
          Оставить отзыв
        </Button>
      </div>
    </div>
  );
};

export default ReviewsClientWrapper;