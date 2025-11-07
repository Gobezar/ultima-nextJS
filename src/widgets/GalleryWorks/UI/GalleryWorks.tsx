"use client";

import { useMediaQuery } from "@/shared/helpers/hooks/useMediaQuery";
import { Spinner } from "@heroui/spinner";
import React, { useEffect, useState } from "react";
import MobileGalleryWorks from "./MobileGalleryWorks";

interface DetailingGalleryProps {
  description: string;
  images: string[];
}

const GalleryWorks: React.FC<DetailingGalleryProps> = React.memo(
  ({ description, images }) => {
    const { breakPoint } = useMediaQuery();
    const isMobile = breakPoint === "mobile";
    const [validImages, setValidImages] = useState<string[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
      if (!images?.length) {
        setValidImages([]);
        setIsChecking(false);
        return;
      }

      setIsChecking(true);

      const checkImage = (src: string) =>
        new Promise<string | null>((resolve) => {
          const img = new Image();
          img.onload = () => resolve(src);
          img.onerror = () => resolve(null);
          img.src = src;
        });

      Promise.all(images.map(checkImage)).then((results) => {
        const filtered = results.filter((src): src is string => Boolean(src));
        setValidImages(filtered);
        setIsChecking(false);
      });
    }, [images]);

    const handleThumbnailClick = (index: number) => setActiveIndex(index);

    if (isChecking) {
      return (
        <div className="text-[20px] laptop:text-[17px] mobile:text-[15px] flex items-center justify-center">
          <Spinner
            color="warning"
            label="Идёт загрузка..."
            labelColor="warning"
          />
        </div>
      );
    }

    if (validImages.length === 0) {
      return (
        <div className="p-4">
          <p className="text-[#E7E7E7] text-[17px] laptop:text-[15px] mobile:text-[13px]">
            {description}
          </p>
          <p className="mt-4 text-red-500 text-[17px] laptop:text-[15px] mobile:text-[13px]">
            Нет доступных изображений для отображения.
          </p>
        </div>
      );
    }

    return (
      <section className="mx-auto w-full h-full flex flex-col overflow-hidden">
        <div className="pb-4 flex-shrink-0">
          <p className="text-[#E7E7E7] text-[17px] laptop:text-[15px] mobile:text-[13px]">
            {description}
          </p>
        </div>
        {isMobile
          ? <MobileGalleryWorks images={validImages}/>
          : <div className="flex flex-row gap-4 flex-1 overflow-hidden">
          <div className="flex flex-col gap-3 w-1/4 flex-shrink-0 overflow-y-auto">
            <div
              className="
                flex flex-col 
                overflow-x-auto overflow-y-auto 
                w-full 
                gap-3 
                pb-2 tablet:pb-0 tablet:pr-2
                tablet:max-h-[70vh]
              "
            >
              {validImages.map((src, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`
                    flex-shrink-0 
                    w-50 h-40
                    tablet:w-full tablet:h-auto tablet:aspect-video
                    rounded-lg overflow-y-auto 
                    border-1 
                    hover:opacity-80
                    ${
                      activeIndex === index
                        ? "border-[#F7BB03]"
                        : "border-transparent"
                    }
                  `}
                >
                  <img
                    src={src}
                    alt={`Пример работы ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="tablet:w-3/4 flex-1 tablet:h-auto">
            <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden shadow-lg relative aspect-video">
              <img
                key={activeIndex}
                src={validImages[activeIndex]}
                alt={`Полный размер, работа ${activeIndex + 1}`}
                className="w-full h-full object-cover object-center absolute top-0 left-0"
              />
            </div>
          </div>
        </div>
        }

        
      </section>
    );
  }
);

GalleryWorks.displayName = "GalleryWorks";
export default GalleryWorks;
