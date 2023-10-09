import React, { FC, ReactNode } from "react";
import { useCart } from "../context/shoppingContext";
import { AiOutlineClose } from "react-icons/ai";
import Products from "../data.json";
import CartItem from "./CartItem";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface ShoppingCartProps {
  isOpen: boolean;
  totalAmount: number;
}

const ShoppingCart: FC<ShoppingCartProps> = ({ isOpen, totalAmount }) => {
  const { closeCart, cartQuantity, cartItems } = useCart();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex flex-col dark:bg-zinc-600 lg:w-[40%] right-0 top-0 z-20 fixed h-screen overflow-y-auto">
      <div className="flex flex-row items-center justify-between px-4 py-4">
        <span className="text-xl text-white font-croissant font-bold">
          ShoppingCart
        </span>
        <span className="cursor-pointer text-white" onClick={closeCart}>
          <AiOutlineClose size={32} />
        </span>
      </div>
      {cartQuantity > 0 ? (
        <div className="py-4 px-4 flex flex-col gap-4">
          {cartItems.map((e) => (
            <CartItem key={e.id} {...e} />
          ))}
          <div className="w-full text-right pt-4 border-t-2 border-t-amber-500">
            <span className="text-xl font-bold dark:text-white">
              Total<span className="ml-2">{totalAmount}zł</span>
            </span>
            <button className="flex flex-row items-center text-xl w-full rounded-lg py-2 bg-lime-300 justify-center gap-2 mt-2">
              <AiOutlineShoppingCart size={25} />
              Purchase
            </button>
          </div>
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center text-2xl text-white font-bold font-croissant">
          Your Cart Is Empty :(
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
