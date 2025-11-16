import React from "react";

const MapMobile = () => {
  return (
    <div style={{position:'relative',overflow:'hidden', width: '100%'}}>
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
        height="230"
         frameBorder="1"
        allowFullScreen={true}
        style={{ position: "relative" }}
      ></iframe>
    </div>
  );
};

export default MapMobile;
