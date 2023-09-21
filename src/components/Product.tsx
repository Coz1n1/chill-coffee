import React, { FC, useState } from "react";
import { ProductType } from "../types";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCart } from "../context/shoppingContext";

interface ProductProps {
  data: ProductType;
}

const Product: FC<ProductProps> = ({ data }) => {
  const { getQuantity, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const quantity = getQuantity(data.id);
  return (
    <div className="lg:w-[430px] border-2 border-amber-500 flex flex-row bg-gradient-to-r from-zinc-700 rounded-lg">
      <div className="w-full flex items-center justify-center ">
        <img src={data.image} alt="Product" className="w-[80%]" />
      </div>
      <div className="px-2 py-2 w-full">
        <div className="w-full text-left dark:text-white">
          <span className="font-bold pr-2">Name:</span>
          {data.name}
        </div>
        <div className="w-full text-left dark:text-white">
          <span className="font-bold pr-2">Price:</span>
          {data.price}zł
        </div>
        <div className="w-full text-left dark:text-white">
          <span className="font-bold pr-2">Type:</span> {data.type}
        </div>
        <div className="w-full text-left dark:text-white">
          <span className="font-bold pr-2">Intensity:</span> {data.intensity}
        </div>
        <div className="flex flex-row w-full pt-4 pb-2">
          <div
            className="w-1/5 bg-amber-500 flex items-center justify-center rounded-tl-md rounded-bl-md py-2 cursor-pointer"
            onClick={() => decreaseQuantity(data.id)}
          >
            <AiOutlineMinus className="text-white" />
          </div>
          <div className=" text-black bg-white flex items-center justify-center w-3/5">
            {quantity}
          </div>
          <div
            className="w-1/5 bg-amber-500 flex items-center justify-center rounded-tr-md rounded-br-md py-2 cursor-pointer"
            onClick={() => increaseQuantity(data.id)}
          >
            <AiOutlinePlus className="text-white" />
          </div>
        </div>
        <div className="w-full pb-2">
          <button className="w-full py-1 text-white rounded-md bg-amber-500 font-bold font-croissant ">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
