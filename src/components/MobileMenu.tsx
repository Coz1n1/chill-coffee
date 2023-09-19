import React, { FC } from "react";
import NavItem from "./NavItem";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";

interface MobileProps {
  visible?: boolean;
}

const MobileMenu: FC<MobileProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="flex flex-col z-20 border-2 border-gray-600 absolute top-8 right-1 px-4 py-2 w-48 items-center">
      <NavItem name="Products" />
      <NavItem name="About" />
      <NavItem name="Recipes" />
      <NavItem name="Types" />
      <div className="flex flex-row gap-2 mt-4">
        <div className="border-2 border-white flex items-center justify-center w-8 h-8 rounded-full bg-green-500 cursor-pointer">
          <BsFillMoonFill size={22} />
        </div>
        <div className="border-2 border-white flex items-center justify-center w-8 h-8 rounded-full cursor-pointer">
          <BsFillSunFill size={22} />
        </div>
      </div>
      <BiCoffeeTogo size={22} />
    </div>
  );
};

export default MobileMenu;
