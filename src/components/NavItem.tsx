import React, { FC } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-scroll";

interface navitemProps {
  name: string;
  navigateTo: string;
}

const NavItem: FC<navitemProps> = ({ name, navigateTo }) => {
  return (
    <Link
      className="flex flex-row items-center text-white text-xl gap-2 cursor-pointer py-2"
      to={navigateTo}
      spy={true}
      smooth={true}
      duration={700}
    >
      <span>{name}</span>
      <BsChevronDown />
    </Link>
  );
};

export default NavItem;
