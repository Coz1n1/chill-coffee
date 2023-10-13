import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Billboard = () => {
  return (
    <div className="relative h-screen w-screen">
      <img
        src={require("../images/cafe_background.jpg")}
        alt="billboard"
        className="w-full object-cover h-full"
      />
      <div className="absolute top-56 w-full text-white flex flex-col items-center justify-center">
        <div className="flex flex-col w-full items-center justify-center flex-wrap">
          <div className="w-48 bg-white rounded-3xl text-black py-2 text-center mb-4 shadow-2xl font-bold animate-bounce">
            We are now public!
          </div>
          <div className="md:text-9xl text-5xl w-full flex flex-wrap items-center justify-center">
            <span className="font-bold text-white">CHILL</span>
            <span className="font-bold text-amber-500">COFFEE</span>
          </div>
          <div className="flex flex-row gap-4 w-full items-center justify-center flex-wrap font-bold">
            <span className="md:text-6xl text-4xl text-center">
              Through coffee to the heart
            </span>
          </div>
          <div className="flex w-full items-center justify-center flex-wrap py-4">
            <span className="text-zinc-300 text-center">
              We care about the well-being of our customers by providing the
              best quality goods and services.
            </span>
          </div>
          <div className="">
            <button className="w-48 py-4 text-white bg-black rounded-lg shadow-xl font-bold flex items-center justify-center gap-2">
              Learn More
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
