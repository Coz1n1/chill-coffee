import React, { FC } from "react";
import NavItem from "./NavItem";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
import Switcher from "../Switcher";

interface MobileProps {
  visible?: boolean;
}

const MobileMenu: FC<MobileProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="flex flex-col z-44 border-2 border-gray-600 absolute top-12 right-1 px-4 py-2 w-64 items-center bg-black rounded-t-xl rounded-b-xl">
      <NavItem name="Products" />
      <NavItem name="About" />
      <NavItem name="Recipes" />
      <NavItem name="Types" />
    </div>
  );
};

export default MobileMenu;
