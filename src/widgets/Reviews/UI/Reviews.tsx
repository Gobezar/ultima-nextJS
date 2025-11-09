"use client";
import HeaderBlock from "@/shared/UI/HeaderBlock/UI/HeaderBlock";
import React, { useEffect, useState } from "react";
import ReviewsList from "./ReviewsList";
import { Button } from "@/shared";
import { useDisclosure } from "@heroui/modal";
import ModalReview from "./AddReviewModal";
import axios from "axios";

const Reviews = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const res = await axios.get("http://localhost:4000/reviews", {
        params: { limit: 20 },
      });
      alert(JSON.stringify(res.data.data || res.data, null, 2));
      setReviews(res.data.data || res.data); // поддержка обеих форматов ответа
    } catch (err) {
      console.error("Ошибка при получении отзывов:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="bg-[#171717] pt-[130px] pb-[100px] overflow-hidden">
      <HeaderBlock text="Отзывы" />
      <div
        className="flex mt-[87px] items-center justify-center w-full mx-auto h-fit
           laptop:mt-[65px]
           tablet:mt-[50px]
           mobile: mobile:mt-[40px] pl-[15px] pr-0"
      >
        <ReviewsList reviews={reviews} loading={loading} />
        <ModalReview
          isOpen={isOpen}
          onClose={onClose}
          onOpenChange={onOpenChange}
          fetchReviews={fetchReviews}
        />
      </div>
      <div className="w-full flex justify-end px-[50px] mt-[50px] mobile:justify-center mobile:px-[40px]">
        <Button className="mobile:w-full" onPress={onOpenChange}>
          Оставить отзыв
        </Button>
      </div>
    </div>
  );
};

export default Reviews;
