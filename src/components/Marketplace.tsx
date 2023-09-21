import React, { useState } from "react";
import Category from "./Category";
import PRODUCTS from "../data.json";
import Product from "./Product";
import ReactPaginate from "react-paginate";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const Marketplace = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 4;
  const pageVisited = pageNumber * productsPerPage;

  const displayProducts = PRODUCTS.slice(
    pageVisited,
    pageVisited + productsPerPage
  ).map((e, i) => <Product data={e} key={i} />);

  const pageCount = Math.ceil(PRODUCTS.length / productsPerPage);

  const handleChangePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <div className="overflow-y-hidden">
      <div className="flex flex-col pt-12">
        <div className="flex flex-col text-center">
          <h1 className="text-3xl dark:text-white text-black font-croissant font-bold">
            Welcome to our marketplace,
          </h1>
          <h1 className="text-3xl text-amber-500 font-croissant">
            select your favourite product and enjoy!
          </h1>
        </div>
        <div className="flex flex-row gap-8 w-full items-center justify-center mt-8">
          <Category name="Arabica" />
          <Category name="Robusta" />
        </div>
        <div className="w-full flex items-center justify-center mt-4 flex-col pb-24">
          <div className="lg:w-[1000px] flex flex-wrap items-center justify-center mt-4 gap-8">
            {displayProducts}
          </div>
          <div>
            <ReactPaginate
              previousLabel={<BsFillArrowLeftSquareFill size={32} />}
              nextLabel={<BsFillArrowRightSquareFill size={32} />}
              pageCount={pageCount}
              onPageChange={handleChangePage}
              containerClassName="flex flex-row py-8 gap-4 text-amber-500 items-center [&>a]:bg-white [&>a]:border-black"
              activeClassName="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
