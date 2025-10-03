'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import doubleDown from "@/shared/assets/images/doubleDown.png";
import clsx from 'clsx';
import './DoubleDown.css'

const DoubleDown = ({className}: {className?: string}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500); 
    }, 2500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={clsx(className, "w-[38px] h-[45px] cursor-pointer p-[5px]")}>
      <Image
        src={doubleDown}
        alt="down"
        className={animate ? "animate-peck" : ""}
      />
    </div>
  )
}

export default DoubleDown
