import React, { FC } from "react";
import { BsChevronDown } from "react-icons/bs";

interface navitemProps {
  name: string;
}

const NavItem: FC<navitemProps> = ({ name }) => {
  return (
    <div className="flex flex-row items-center text-white text-xl gap-2 cursor-pointer py-2">
      <span>{name}</span>
      <BsChevronDown />
    </div>
  );
};

export default NavItem;
