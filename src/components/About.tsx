import React from "react";

const About = () => {
  return (
    <div className=" h-[60%] w-screen flex items-center justify-center relative">
      <img
        src={require("../images/coffee_beans.png")}
        alt="coffee beans"
        className="w-[600px] absolute top-72 flex lg:hidden lg:top-44 left-1 z-0"
      />
      <div className="flex flex-col items-center justify-center mt-12 max-w-[1100px]">
        <h1 className="text-4xl font-bold dark:text-white text-black font-croissant text-center px-2">
          Every Cup Made With Passion
        </h1>
        <div className="px-4 z-1">
          <img
            src={require("../images/passion_sectiion.jpg")}
            alt="caffee shapes png"
            className="rounded-2xl w-[600px] z-1 mt-6 shadow-xl"
          />
        </div>
        <span className="py-8 dark:text-zinc-300 text-zinc-600 px-4 w-[100%] lg:w-1/2 text-xl z-1 text-left">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          iplorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          iplorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          iplorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ip
        </span>
        <div className="flex flex-row gap-8 pb-12 px-4">
          <button className="border-2 border-amber-500 px-4 py-2 dark:text-white text-black text-center lg:px-8 lg:py-4">
            Check our products
          </button>
          <button className="border-2 border-amber-500 px-4 py-2 dark:text-white text-black text-center lg:px-8 lg:py-4">
            Show me your recipes!
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
