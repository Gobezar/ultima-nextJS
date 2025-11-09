import type {ReviewType} from "./Review";

import React from "react";
import cn from 'classnames'

import Review from "./Review";

export type CardReviewProps = React.HTMLAttributes<HTMLDivElement> & ReviewType;

const CardReview = React.forwardRef<HTMLDivElement, CardReviewProps>(
  ({className, ...review}, ref) => (
    <div ref={ref} className={cn("rounded-medium bg-[#2d2d2d] shadow-small p-5 w-[300px]", className)}>
      <Review {...review} />
    </div>
  ),
);

CardReview.displayName = "CardReview";

export default CardReview;
