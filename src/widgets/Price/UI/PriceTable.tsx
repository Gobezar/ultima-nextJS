import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";
import { priceList } from "../consts";

const PriceTable = () => {
  return (
    <Table
      removeWrapper
      aria-label="Example static collection table"
      className="max-w-[1372px]
        laptop:max-w-[1150px]
        tablet:max-w-[685px]
        "
    >
      <TableHeader>
        <TableColumn className="text-[#D1933C] text-[17px] laptop:text-[15px] mobile:text-[13px] h-[60px]">УСЛУГА</TableColumn>
        <TableColumn className="text-[#D1933C] text-[17px] laptop:text-[15px] mobile:text-[13px] h-[60px]">ОПИСАНИЕ</TableColumn>
        <TableColumn className="text-[#D1933C] text-[17px] laptop:text-[15px] mobile:text-[13px] h-[60px] min-w-[111px]">СТОИМОСТЬ</TableColumn>
      </TableHeader>
      <TableBody>
        {priceList.map((price) => {
          return (
            <TableRow key={price.id} className="text-[#E7E7E7] h-[60px] ">
              <TableCell className="text-[17px] laptop:text-[15px] mobile:text-[13px] font-bold">{price.title}</TableCell>
              <TableCell className="text-[17px] laptop:text-[15px] mobile:text-[13px] font-light">{price.description}</TableCell>
              <TableCell className="text-[17px] laptop:text-[15px] mobile:text-[13px] font-bold">{`от ${price.price} ₽`}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default PriceTable;
