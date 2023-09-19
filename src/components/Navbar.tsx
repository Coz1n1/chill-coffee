import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import MobileMenu from "./MobileMenu";

const Y_OFFSET = 70;

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <div className="fixed w-screen z-10">
      <div className="flex items-center justify-between flex-row px-4 lg:px-12 py-6 bg-zinc-800/60 text-white transition duration-500">
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
          <div className="flex flex-row gap-2">
            <div className="border-2 border-white flex items-center justify-center w-8 h-8 rounded-full bg-green-500 cursor-pointer">
              <BsFillMoonFill size={22} />
            </div>
            <div className="border-2 border-white flex items-center justify-center w-8 h-8 rounded-full cursor-pointer">
              <BsFillSunFill size={22} />
            </div>
          </div>
          <BiCoffeeTogo size={32} />
        </div>
        <div
          className="lg:hidden flex items-center relative"
          onClick={() => setShowMobile(!showMobile)}
        >
          <AiOutlineMenu size={32} className="cursor-pointer" />
          <MobileMenu visible={showMobile} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
