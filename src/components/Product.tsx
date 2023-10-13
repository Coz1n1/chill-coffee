import React, { FC } from "react";
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
    <div className="w-[200px] h-[430px] md:h-auto lg:w-[430px] border-2 border-amber-500 flex flex-col lg:flex-row dark:bg-gradient-to-r dark:from-zinc-700 rounded-lg">
      <div className="w-full flex items-center justify-center ">
        <img src={data.image} alt="Product" className="w-[160px] h-[180px]" />
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
            onClick={() => decreaseQuantity(data.id, data.price)}
          >
            <AiOutlineMinus className="text-white" />
          </div>
          <div className=" text-black dark:bg-white bg-zinc-100 flex items-center justify-center w-3/5">
            {quantity}
          </div>
          <div
            className="w-1/5 bg-amber-500 flex items-center justify-center rounded-tr-md rounded-br-md py-2 cursor-pointer"
            onClick={() => increaseQuantity(data.id, data.price)}
          >
            <AiOutlinePlus className="text-white" />
          </div>
        </div>
        <div className="w-full pb-2">
          {quantity > 0 ? (
            <button
              className="w-full py-1 text-white rounded-md bg-red-500 font-bold font-croissant"
              onClick={() => removeFromCart(data.id, quantity, data.price)}
            >
              Remove
            </button>
          ) : (
            <div className="w-full py-1 invisible">t</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
