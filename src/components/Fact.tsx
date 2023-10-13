import React, { useState } from "react";
import FACTS from "../random-data.json";
import { AiOutlineArrowRight } from "react-icons/ai";

const Fact = () => {
  const [currentFact, setCurrentFact] = useState<number>(0);
  const factsQuantity = FACTS.length;

  const handleFact = () => {
    let random = Math.floor(Math.random() * factsQuantity);
    setCurrentFact(random);
  };

  return (
    <div className="w-full flex flex-row mb-24 items-center justify-center  text-white relative">
      <div className="absolute w-full -bottom-4">
        <svg
          id="visual"
          viewBox="0 0 2000 550"
          width="2000"
          height="550"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <path
            d="M0 258L33.3 262.8C66.7 267.7 133.3 277.3 200 302.3C266.7 327.3 333.3 367.7 400 366.5C466.7 365.3 533.3 322.7 600 301C666.7 279.3 733.3 278.7 800 271.8C866.7 265 933.3 252 1000 260.7C1066.7 269.3 1133.3 299.7 1200 330.3C1266.7 361 1333.3 392 1400 409C1466.7 426 1533.3 429 1600 429.7C1666.7 430.3 1733.3 428.7 1800 402C1866.7 375.3 1933.3 323.7 1966.7 297.8L2000 272L2000 601L1966.7 601C1933.3 601 1866.7 601 1800 601C1733.3 601 1666.7 601 1600 601C1533.3 601 1466.7 601 1400 601C1333.3 601 1266.7 601 1200 601C1133.3 601 1066.7 601 1000 601C933.3 601 866.7 601 800 601C733.3 601 666.7 601 600 601C533.3 601 466.7 601 400 601C333.3 601 266.7 601 200 601C133.3 601 66.7 601 33.3 601L0 601Z"
            fill="#f59e0b"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col items-center max-w-[800px] z-10">
        <span className="dark:text-white text-black text-center mt-2 font-bold text-xl font-croissant">
          Did you know?
        </span>
        <span className="dark:text-white text-black pt-4 pb-2 text-center font-bold text-xl">
          {FACTS[currentFact].header}
        </span>
        <span className="text-white  text-center pb-4">
          {FACTS[currentFact].text}
        </span>
        <button
          className="w-48 px-2 py-2 my-2 rounded-lg bg-black text-white shadow-lg flex items-center justify-center gap-2"
          onClick={() => handleFact()}
        >
          Different fact
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Fact;
