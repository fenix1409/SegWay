import React from "react";
import { AccessoryType } from "../../service/Accessory";

interface ProductCardType {
  item: AccessoryType;
}

const ScooterCard: React.FC<ProductCardType> = ({ item }) => {
  return (
    <li className="w-[137px] pt-[9px] px-[31px] pb-[14px] text-center cursor-pointer hover:bg-gray-700">
      <img src={item.image} alt={`${item.name} image`} width={80} height={80} className="mx-auto"/>
      <strong className="text-[18px] leading-[21px] font-bold text-white">{item.name}</strong>
    </li>
  );
};

export default ScooterCard;
