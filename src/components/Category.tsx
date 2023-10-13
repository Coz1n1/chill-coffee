import React, { FC } from "react";
import PRODUCTS from "../data.json";

interface categoryProps {
  name: string;
}

const Category: FC<categoryProps> = ({ name }) => {
  const handleFilter = (name: string) => {};

  return (
    <button
      onClick={() => handleFilter(name)}
      className="w-48 py-4 text-white bg-amber-500 rounded-lg font-bold font-croissant border-2 border-amber-500 hover:border-2 hover:border-white"
    >
      {name}
    </button>
  );
};

export default Category;
