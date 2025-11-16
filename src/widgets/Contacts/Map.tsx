"use client";
import { useMediaQuery } from "@/shared/helpers/hooks/useMediaQuery";
import React from "react";

const Map = () => {
  const { breakPoint } = useMediaQuery();
  const isMobile = breakPoint === "mobile";
  return (
    <div
      style={{
        position: "absolute",
        bottom: "-150px",
        right: 0,
        overflow: "hidden",
        width: "inherit",
      }}
    >
      <a
        href="https://yandex.ru/maps/org/ultima/23903118150/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "0px",
        }}
      >
        Ультима
      </a>
      <a
        href="https://yandex.ru/maps/194/saratov/category/auto_detailing/9561111444/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "14px",
        }}
      >
        Детейлинг в Саратове
      </a>
      <a
        href="https://yandex.ru/maps/194/saratov/category/auto_cleaning/28364857613/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "28px",
        }}
      >
        Автохимчистка в Саратове
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=46.025732%2C51.573631&mode=search&oid=23903118150&ol=biz&z=17.02"
        width="100%"
        height={isMobile ? "230" : "400"}
        frameBorder="1"
        allowFullScreen={true}
        style={{ position: "relative" }}
      ></iframe>
    </div>
  );
};

export default Map;
