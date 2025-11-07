'use client'
import classNames from "classnames";
import {Button} from "@heroui/button";
import React from "react";

interface Props {
  width?: number;
  children: string;
  className?: string;
  onPress?: any
}

export const StyledButton = ({ width, children, className, onPress }: Props) => {
  return (
    <Button className={classNames(
     "relative overflow-hidden flex items-center justify-center h-[53px] w-fit py-[14px] bg-gradient-to-b from-[#F7BB03] to-[#D1933C] shadow-[10px_10px_100px_0px_#F7BB03] text-white font-normal text-[17px] leading-[24px] rounded-[30px] cursor-pointer",
     "transition-shadow duration-300 ease-out hover:shadow-none", 
     "laptop:text-[15px] mobile:text-[13px]", className
   )}
   style={{ width: width ? `${width}px` : undefined }} onPress={onPress}>{children}</Button>
  );
};