import React from "react";

const About = () => {
  return (
    <div className=" h-[60%] w-screen flex items-center justify-center relative">
      <div className="flex flex-col items-center justify-center mt-12 max-w-[1100px] px-2">
        <h1 className="text-4xl font-bold dark:text-white text-black font-croissant text-center px-4 pb-2">
          Every Cup Made With Passion
        </h1>
        <div className="px-4 z-1">
          <img
            src={require("../images/passion_sectiion.jpg")}
            alt="caffee shapes png"
            className="rounded-2xl w-[400px] md:w-[600px] z-1 mt-6 shadow-xl"
          />
        </div>
        <span className="pt-8 dark:text-zinc-300 text-zinc-600 px-4 w-[100%] lg:w-[1000px] text-xl z-1 text-center">
          When preparing each coffee, we pay attention to the smallest details.
          The taste of our products is enriched with the highest quality
          ingredients. For those who wants to make their cockatils in home we
          prepared our online market and list of our best rated recipes.
        </span>
        <span className="text-white text-center pt-2 pb-4 text-xl">
          Take a look and enjoy! :)
        </span>
        <div className="w-full flex flex-row gap-8 pb-12 px-2 items-center justify-center">
          <button className="rounded-lg py-2 text-white bg-black w-32 px-2 md:w-56 text-center lg:py-4">
            Check our market
          </button>
          <button className="rounded-lg py-2 text-white bg-black w-32 px-2 md:w-56 text-center lg:py-4">
            Show me your recipes!
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
