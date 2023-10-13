import React, { useState } from "react";
import PRODUCTS from "../data.json";
import Product from "./Product";
import ReactPaginate from "react-paginate";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const Marketplace = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [filter, setFilter] = useState<string>("");

  const productsPerPage = 4;
  const pageVisited = pageNumber * productsPerPage;

  const pageCount = Math.ceil(PRODUCTS.length / productsPerPage);

  const handleChangePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  const filteredProducts = PRODUCTS.filter((e) => {
    return e.type.toLowerCase().includes(filter);
  });

  return (
    <div className="overflow-y-hidden" id="products">
      <div className="flex flex-col pt-12">
        <div className="flex flex-col text-center">
          <h1 className="text-3xl dark:text-white text-black font-croissant font-bold">
            Welcome to our marketplace,
          </h1>
          <h1 className="text-3xl text-amber-500 font-croissant">
            select your favourite product and enjoy!
          </h1>
        </div>
        <div className="flex flex-row gap-8 w-full items-center justify-center mt-8 px-4">
          <button
            onClick={() => setFilter("")}
            className="w-48 py-4 text-white bg-amber-500 rounded-lg font-bold font-croissant border-2 border-amber-500 hover:border-2 hover:border-white"
          >
            All
          </button>
          <button
            onClick={() => setFilter("arabica")}
            className="w-48 py-4 text-white bg-amber-500 rounded-lg font-bold font-croissant border-2 border-amber-500 hover:border-2 hover:border-white"
          >
            Arabica
          </button>
          <button
            onClick={() => setFilter("robusta")}
            className="w-48 py-4 text-white bg-amber-500 rounded-lg font-bold font-croissant border-2 border-amber-500 hover:border-2 hover:border-white"
          >
            Robusta
          </button>
        </div>
        <div className="w-full flex items-center justify-center mt-4 flex-col pb-16 z-20">
          <div className="lg:w-[1000px] flex flex-wrap items-center justify-center mt-4 gap-2 lg:gap-8">
            {filteredProducts
              .slice(pageVisited, pageVisited + productsPerPage)
              .map((product, i) => (
                <Product data={product} key={i} />
              ))}
          </div>
          <div>
            <ReactPaginate
              previousLabel={<BsFillArrowLeftSquareFill size={32} />}
              nextLabel={<BsFillArrowRightSquareFill size={32} />}
              pageCount={pageCount}
              onPageChange={handleChangePage}
              containerClassName="flex flex-row pt-8 mb-16 gap-4 text-amber-500 items-center"
              activeClassName="dark:text-white text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
