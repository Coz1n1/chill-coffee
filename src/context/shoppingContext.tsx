import { createContext, useContext, ReactNode, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

type shoppingProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingContext = {
  openCart: () => void;
  closeCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
  getQuantity: (id: number) => number;
  increaseQuantity: (id: number, price: number) => void;
  decreaseQuantity: (id: number, price: number) => void;
  removeFromCart: (id: number, quantity: number, price: number) => void;
};

const ShoppingContext = createContext({} as ShoppingContext);

export function useCart() {
  return useContext(ShoppingContext);
}

export function ShoppingProvider({ children }: shoppingProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseQuantity(id: number, price: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    setTotalAmount((totalAmount) => (totalAmount += price));
  }

  function decreaseQuantity(id: number, price: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
    setTotalAmount((totalAmount) => (totalAmount -= price));
  }

  function removeFromCart(id: number, quantity: number, price: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
    setTotalAmount((totalAmount) => (totalAmount -= quantity * price));
  }

  return (
    <ShoppingContext.Provider
      value={{
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} totalAmount={totalAmount} />
    </ShoppingContext.Provider>
  );
}
