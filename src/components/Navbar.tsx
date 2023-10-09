import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { BiCoffeeTogo } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import MobileMenu from "./MobileMenu";
import Switcher from "../Switcher";
import { useCart } from "../context/shoppingContext";

const Y_OFFSET = 70;

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const { openCart, cartQuantity } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= Y_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-screen z-10">
      <div
        className={`flex items-center justify-between flex-row px-4 lg:px-12 text-white transition duration-700 ${
          showBackground ? "bg-black py-2" : "bg-zinc-800/60 py-6"
        }`}
      >
        <div className="flex flex-row items-center">
          <img
            src={require("../images/cup_logo.png")}
            alt="Logo Coffee"
            className="w-16"
          />
          <span className="font-bold text-2xl">ChillCoffee</span>
        </div>
        <div className="hidden lg:flex flex-row items-center gap-8">
          <NavItem name="Products" />
          <NavItem name="About" />
          <NavItem name="Recipes" />
          <NavItem name="Types" />
          <span className="text-3xl">|</span>
          <Switcher />
          <div className="relative w-8 cursor-pointer" onClick={openCart}>
            <BiCoffeeTogo size={32} />
            <span className="text-xl text-white bg-blue-700 w-6 h-6 rounded-full flex items-center justify-center absolute -translate-y-10 translate-x-4">
              {cartQuantity}
            </span>
          </div>
        </div>
        <div className="lg:hidden flex flex-row items-center relative gap-4">
          <div
            className="lg:hidden flex"
            onClick={() => setShowMobile(!showMobile)}
          >
            <AiOutlineMenu size={32} className="cursor-pointer" />
            <MobileMenu visible={showMobile} />
          </div>
          <Switcher />
          <div className="relative w-8" onClick={openCart}>
            <BiCoffeeTogo size={32} />
            <span className="text-xl text-white bg-blue-700 w-6 h-6 rounded-full flex items-center justify-center absolute -translate-y-10 translate-x-4">
              {cartQuantity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
