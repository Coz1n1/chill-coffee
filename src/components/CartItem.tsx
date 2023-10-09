import React, { FC } from "react";
import PRODUCTS from "../data.json";
import { useCart } from "../context/shoppingContext";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem: FC<CartItemProps> = ({ id, quantity }) => {
  const { removeFromCart } = useCart();
  const item = PRODUCTS.find((i) => i.id === id);

  if (item == null) {
    return null;
  }

  return (
    <div className="flex flex-row pt-4 border-t-2 border-t-amber-500  items-center justify-between">
      <div className="flex flex-row items-center">
        <div className="w-auto bg-white rounded-lg h-[200px] flex items-center justify-center">
          <img
            src={item.image}
            alt="Cart Product"
            className="w-[150px] object-cover"
          />
        </div>
        <div className="flex flex-col px-4 text-white">
          <span className="text-xl">{item.name}</span>
          <span className="text-xl text-zinc-400">{item.price}zł</span>
          <span className="text-sm text-zinc-400">x{quantity}</span>
        </div>
      </div>
      <div className="text-white flex flex-row items-center gap-2">
        <span className="text-xl font-bold">{quantity * item.price} zł</span>
        <button
          onClick={() => removeFromCart(item.id, quantity, item.price)}
          className="bg-red-400 px-2 py-2 rounded-lg cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
