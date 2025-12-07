// // "use client";
// // import React, { useEffect, useState, useRef } from "react";
// // import HeaderBlock from "@/shared/UI/HeaderBlock/UI/HeaderBlock";
// // import MasonryGrid from "./MasonryGrid";
// // import {
// //   Modal,
// //   ModalContent,
// //   ModalHeader,
// //   ModalBody,
// //   ModalFooter,
// //   useDisclosure
// // } from "@heroui/modal";
// // import { Button } from "@/shared";

// // // ✨ Фиксированный пул размеров: 2 больших и 8 маленьких, общая площадь 16 для сетки 4x4
// // const sizesPool = [
// //   'large', 'large',
// //   'small', 'small', 'small', 'small',
// //   'small', 'small', 'small', 'small',
// // ];

// // // ✨ Создаем фиксированные элементы без размеров
// // const createFixedItems = () => {
// //   return Array.from({ length: sizesPool.length }, (_, i) => ({
// //     id: `item-${i}`,
// //     content: (
// //       <>
// //       {/* <GalleryWorks/> */}
// //       <div className="text-center" >
// //         <p className="font-semibold">Элемент {i + 1}</p>
// //         <p className="text-sm text-gray-300">Проект #{i + 1}</p>
// //       </div>
// //       </>
// //     ),
// //   }));
// // };

// // const Portfolio = () => {
// //     const {
// //     isOpen,
// //     onOpenChange,
// //   } = useDisclosure();
// //   const fixedItems = createFixedItems();
// //   const scrollRef = useRef<number>(0); // Ref для хранения позиции прокрутки
// // console.log(isOpen)
// //   // Функция для присвоения случайных размеров, гарантируя, что предыдущие большие не остаются большими
// //   const assignRandomSizes = (prevItems?: typeof fixedItems) => {
// //     // Перемешиваем пул размеров
// //     let shuffledSizes = [...sizesPool].sort(() => Math.random() - 0.5);

// //     if (prevItems) {
// //       // Определяем предыдущие большие элементы
// //       const prevLargeIndices = prevItems
// //         .map((item, index) => (item.size === 'large' ? index : -1))
// //         .filter(index => index !== -1);

// //       // Перемешиваем до тех пор, пока новые большие не совпадают с предыдущими
// //       let attempts = 0;
// //       while (attempts < 100) { // Ограничение попыток на случай неудачи
// //         const newLargeIndices = shuffledSizes
// //           .map((size, index) => (size === 'large' ? index : -1))
// //           .filter(index => index !== -1);

// //         if (!newLargeIndices.every(index => prevLargeIndices.includes(index))) {
// //           break; // Новые большие отличаются от предыдущих
// //         }

// //         shuffledSizes = [...sizesPool].sort(() => Math.random() - 0.5);
// //         attempts++;
// //       }
// //     }

// //     return fixedItems.map((item, i) => ({
// //       ...item,
// //       size: shuffledSizes[i] as "large" | "small",
// //     }));
// //   };

// //   const [items, setItems] = useState(() => assignRandomSizes());
// //   // console.log(items)

// //   // Каждые 3 секунды присваиваем новые случайные размеры с условием и перемешиваем порядок
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       scrollRef.current = window.scrollY; // Сохраняем текущую позицию прокрутки перед обновлением
// //       setItems((prevItems) => {
// //         let newItems = assignRandomSizes(prevItems);
// //         // Дополнительно перемешиваем порядок элементов для случайности позиций
// //         newItems = [...newItems].sort(() => Math.random() - 0.5);
// //         return newItems;
// //       });
// //     }, 3000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   // Восстанавливаем позицию прокрутки после рендеринга (после изменения items)
// //   useEffect(() => {
// //     window.scrollTo(0, scrollRef.current);
// //   }, [items]);

// //   return (
// //     <div className="bg-[#171717] pt-[130px] pb-[100px] overflow-hidden">
// //       <HeaderBlock text="Примеры наших работ" />
// //       <div
// //         className="flex mt-[87px] items-center justify-center w-full mx-auto h-fit
// //         laptop:mt-[65px]
// //         tablet:mt-[50px]
// //         mobile:flex-col mobile:mt-[40px] px-[15px]"
// //       >
// //         <MasonryGrid items={items} columns={4} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Portfolio;

// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import HeaderBlock from "@/shared/UI/HeaderBlock/UI/HeaderBlock";
// import MasonryGrid from "./MasonryGrid";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   useDisclosure,
// } from "@heroui/modal";
// import { Button } from "@/shared";
// import GalleryWorks from "@/widgets/GalleryWorks/UI/GalleryWorks";

// const sizesPool = [
//   "large",
//   "large",
//   "small",
//   "small",
//   "small",
//   "small",
//   "small",
//   "small",
//   "small",
//   "small",
// ];

// const createFixedItems = () => {
//   return Array.from({ length: sizesPool.length }, (_, i) => ({
//     id: `item-${i}`,
//     images: [
//       `/portfolio_${i + 1}/1.jpg`,
//       `/portfolio_${i + 1}/2.jpg`,
//       `/portfolio_${i + 1}/3.jpg`,
//       `/portfolio_${i + 1}/4.jpg`,
//       `/portfolio_${i + 1}/5.jpg`,
//       `/portfolio_${i + 1}/6.jpg`,
//       `/portfolio_${i + 1}/7.jpg`,
//       `/portfolio_${i + 1}/8.jpg`,
//       `/portfolio_${i + 1}/9.jpg`,
//       `/portfolio_${i + 1}/10.jpg`,
//       `/portfolio_${i + 1}/11.jpg`,
//       `/portfolio_${i + 1}/12.jpg`,
//     ],
//     content: (
//       <div
//         className="
//     w-full h-full
//     flex flex-col items-center justify-center
//     text-center
//     bg-cover bg-center bg-no-repeat
//     rounded-lg overflow-hidden text-white
//   "
//         style={{
//           backgroundImage: `url(/portfolio_${i + 1}/1.jpg)`,
//         }}
//       >
//         <p className="font-semibold text-lg">Элемент {i + 1}</p>
//         <p className="text-sm text-gray-200">Проект #{i + 1}</p>
//       </div>
//     ),
//   }));
// };

// type PortfolioItem = ReturnType<typeof createFixedItems>[0] & {
//   size: "large" | "small";
// };

// const Portfolio = () => {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();

//   const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

//   const fixedItems = createFixedItems();
//   const scrollRef = useRef<number>(0);

//   const assignRandomSizes = (prevItems?: PortfolioItem[]) => {
//     let shuffledSizes = [...sizesPool].sort(() => Math.random() - 0.5);

//     if (prevItems) {
//       const prevLargeIndices = prevItems
//         .map((item, index) => (item.size === "large" ? index : -1))
//         .filter((index) => index !== -1);

//       let attempts = 0;
//       while (attempts < 100) {
//         const newLargeIndices = shuffledSizes
//           .map((size, index) => (size === "large" ? index : -1))
//           .filter((index) => index !== -1);

//         if (
//           !newLargeIndices.every((index) => prevLargeIndices.includes(index))
//         ) {
//           break;
//         }

//         shuffledSizes = [...sizesPool].sort(() => Math.random() - 0.5);
//         attempts++;
//       }
//     }

//     return fixedItems.map((item, i) => ({
//       ...item,
//       size: shuffledSizes[i] as "large" | "small",
//     }));
//   };

//   const [items, setItems] = useState(() => assignRandomSizes());

//   useEffect(() => {
//     // const interval = setInterval(() => {
//     //   scrollRef.current = window.scrollY;
//     //   setItems((prevItems) => {
//     //     let newItems = assignRandomSizes(prevItems as PortfolioItem[]);
//     //     newItems = [...newItems].sort(() => Math.random() - 0.5);
//     //     return newItems;
//     //   });
//     // }, 100000);

//     // return () => clearInterval(interval);

//     setItems((prevItems) => {
//         let newItems = assignRandomSizes(prevItems as PortfolioItem[]);
//         newItems = [...newItems].sort(() => Math.random() - 0.5);
//         return newItems;
//       });
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, scrollRef.current);
//   }, [items]);

//   useEffect(() => {
//     if (!isOpen) {
//       setSelectedItem(null);
//     }
//   }, [isOpen]);

//   const handleItemClick = (item: PortfolioItem) => {
//     setSelectedItem(item);
//     onOpen();
//   };
//   console.log(items);
//   return (
//     <div className="bg-[#171717] pt-[130px] pb-[100px] overflow-hidden">
//       <HeaderBlock text="Примеры наших работ" />
//       <div
//         className="flex mt-[87px] items-center justify-center w-full mx-auto h-fit
//           laptop:mt-[65px]
//           tablet:mt-[50px]
//           mobile:flex-col mobile:mt-[40px] px-[15px]"
//       >
//         <MasonryGrid items={items} columns={4} onItemClick={handleItemClick} />
//       </div>
//       <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="font-bold">
//                 {selectedItem ? `Проект: ${selectedItem.id}` : "Загрузка..."}
//               </ModalHeader>
//               <ModalBody>
//                 <GalleryWorks
//                   description="111"
//                   title="111"
//                   images={selectedItem?.images || []}
//                 />
//               </ModalBody>
//               <ModalFooter>
//                 <Button onPress={onClose}>Закрыть</Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// };

// export default Portfolio;

// Portfolio.tsx
"use client";
import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import HeaderBlock from "@/shared/UI/HeaderBlock/UI/HeaderBlock";
import MasonryGrid from "./MasonryGrid";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@/shared";
import GalleryWorks from "@/widgets/GalleryWorks/UI/GalleryWorks";
import { useMediaQuery } from "@/shared/helpers/hooks/useMediaQuery";
import MasonryGridMobile from "./MasonryGridMobile";

const sizesPool = [
  "large",
  "large",
  "small",
  "small",
  "small",
  "small",
  "small",
  "small",
  "small",
  "small",
];

const portfolioData = [
  {
    id: 1,
    car: "Mercedes-Benz GLE",
    title: "Оклейка пленкой",
    description:
      "Полная оклейка кузова полиуретановой защитной плёнкой премиум-класса. Поверхность тщательно подготовлена, нанесение выполнено без стыков и пузырей. Работа заняла 5 дней.",
  },
  {
    id: 2,
    car: "Geely Monjaro",
    title: "Оклейка пленкой",
    description:
      "Полная оклейка матовым полиуретаном, полный антихром, шумоизоляция арок, притемнение значка в тонирующий полиуретан.",
  },
  {
    id: 3,
    car: "Li L7",
    title: "Оклейка пленкой",
    description:
      "Полная оклейка кузова в сатиновый прозрачный полиуретан",
  },
  {
    id: 4,
    car: "Audi RS 7",
    title: "Оклейка пленкой",
    description:
      "Полная оклейка в сатиновый прозрачный полиуретан. Полный антихром",
  },
  {
    id: 5,
    car: "BMW X5",
    title: "Оклейка пленкой",
    description:
      "Полная оклейка в сатиновый прозрачный полиуретан. Установка доводчиков. Оклейка глянца в салоне",
  },
  {
    id: 6,
    car: "BMW X3",
    title: "Оклейка пленкой",
    description:
      "Полная оклейка в сатиновый прозрачный полиуретан, оклейка крыши в защитную пленку для стекол",
  },
  {
    id: 7,
    car: "BMW 3 ",
    title: "Оклейка пленкой",
    description:
      "Оклейка в цветной полиуретан, установка аэродинамического обвеса, стайлинг фар желтыми глазками под m3 cs",
  },
  {
    id: 8,
    car: "ВАЗ 2114",
    title: "Химчистка",
    description:
      "Глубокая химчистка салона, потолка и багажника с использованием парогенератора. Автомобиль полностью избавлен от пятен и запахов. Выполнено за 1 день.",
  },
  {
    id: 9,
    car: "Porsche",
    title: "Защитное покрытие",
    description:
      "Нанесено керамическое покрытие на кузов и диски для защиты от внешних воздействий и блеска. Поверхность отполирована до зеркала. Работа выполнена за 2 дня.",
  },
  {
    id: 10,
    car: "Geely",
    title: "Оклейка пленкой",
    description:
      "Оклейка кузова цветной плёнкой в фирменном стиле заказчика. Все элементы тщательно подогнаны, плёнка защищает лакокрасочное покрытие. Срок — 5 дней.",
  },
];

const createFixedItems = () => {
  return Array.from({ length: sizesPool.length }, (_, i) => ({
    id: `item-${i}`,
    images: [
      `/portfolio_${i + 1}/1.jpg`,
      `/portfolio_${i + 1}/2.jpg`,
      `/portfolio_${i + 1}/3.jpg`,
      `/portfolio_${i + 1}/4.jpg`,
      `/portfolio_${i + 1}/5.jpg`,
      `/portfolio_${i + 1}/6.jpg`,
      `/portfolio_${i + 1}/7.jpg`,
      `/portfolio_${i + 1}/8.jpg`,
      `/portfolio_${i + 1}/9.jpg`,
      `/portfolio_${i + 1}/10.jpg`,
      `/portfolio_${i + 1}/11.jpg`,
      `/portfolio_${i + 1}/12.jpg`,
    ],
    car: portfolioData[i].car,
    title: portfolioData[i].title,
    description: portfolioData[i].description,
    coverImage: `/portfolio_${i + 1}/1.jpg`,
    size: sizesPool[i],
  }));
};

type PortfolioData = ReturnType<typeof createFixedItems>[0];
type PortfolioItem = PortfolioData & {
  size: "large" | "small";
};

const assignRandomSizes = (
  items: PortfolioData[],
  prevItems?: PortfolioItem[]
): PortfolioItem[] => {
  let shuffledSizes = [...sizesPool].sort(() => Math.random() - 0.5);

  if (prevItems) {
    const prevLargeIndices = prevItems
      .map((item, index) => (item.size === "large" ? index : -1))
      .filter((index) => index !== -1);

    let attempts = 0;
    while (attempts < 100) {
      const newLargeIndices = shuffledSizes
        .map((size, index) => (size === "large" ? index : -1))
        .filter((index) => index !== -1);

      if (!newLargeIndices.every((index) => prevLargeIndices.includes(index))) {
        break;
      }

      shuffledSizes = [...sizesPool].sort(() => Math.random() - 0.5);
      attempts++;
    }
  }

  const newItems = items.map((item, i) => ({
    ...item,
    size: shuffledSizes[i] as "large" | "small",
  }));

  return newItems.sort(() => Math.random() - 0.5);
};

const Portfolio = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const { breakPoint } = useMediaQuery();
  const isMobile = breakPoint === "mobile";

  const fixedItems = useMemo(() => createFixedItems(), []);

  const scrollRef = useRef<number>(0);

  const [items, setItems] = useState(() => assignRandomSizes(fixedItems));

  useEffect(() => {
    window.scrollTo(0, scrollRef.current);
  }, [items]);

  useEffect(() => {
    if (!isOpen) {
      setSelectedItem(null);
    }
  }, [isOpen]);

  const handleItemClick = useCallback(
    (item: PortfolioItem) => {
      scrollRef.current = window.scrollY;
      setSelectedItem(item);
      onOpen();
    },
    [onOpen]
  );

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        scrollRef.current = window.scrollY;
        setItems((prevItems) => {
          let newItems = assignRandomSizes(prevItems as PortfolioItem[]);
          newItems = [...newItems].sort(() => Math.random() - 0.5);
          return newItems;
        });
      }, 5000);

      return () => clearInterval(interval);
    }

    // setItems((prevItems) => {
    //     let newItems = assignRandomSizes(prevItems as PortfolioItem[]);
    //     newItems = [...newItems].sort(() => Math.random() - 0.5);
    //     return newItems;
    //   });
  }, [isMobile]);

  return (
    <div className="bg-[#171717] pt-[130px] overflow-hidden" id='portfolioContainer'>
      <HeaderBlock text="Примеры наших работ" />
      <div
        className="flex mt-[87px] items-center justify-center w-full mx-auto h-fit
           laptop:mt-[65px]
           tablet:mt-[50px]
           mobile:flex-col mobile:mt-[40px] px-[15px]"
      >
        {isMobile 
          ? <MasonryGridMobile items={items} onItemClick={handleItemClick}/>
          : <MasonryGrid items={items} columns={4} onItemClick={handleItemClick} />
        }
        
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="font-bold">
                <div className="text-[#E7E7E7] text-[20px] laptop:text-[17px] mobile:text-[15px] font-bold">
                  {selectedItem ? selectedItem.car : "Загрузка..."}
                </div>
              </ModalHeader>
              <ModalBody className="h-[70vh] max-h-[70vh]">
                {selectedItem && (
                  <GalleryWorks
                    description={selectedItem.description}
                    images={selectedItem.images}
                  />
                )}
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Закрыть</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Portfolio;
