import React from "react";

const Billboard = () => {
  return (
    <div className="relative h-screen w-screen">
      <img
        src={require("../images/cafe_background.jpg")}
        alt="billboard"
        className="w-full object-cover h-full"
      />
      <div className="absolute top-72 w-full text-white flex flex-col">
        <div className="flex flex-col w-full items-center justify-center flex-wrap">
          <div className="text-9xl">BIG LOGO</div>
          <div className="flex flex-row gap-4 w-full items-center justify-center flex-wrap font-bold">
            <span className="text-6xl text-center">
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
            <button className="border-2 border-amber-500 w-48 py-4 text-zinc-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
