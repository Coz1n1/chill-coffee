import React, { useState } from "react";
import RECIPES from "../recipes-data.json";
import { RecipeType } from "../types";
import { BiTime } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

const Recipes = () => {
  const [currentRecipe, setCurrentRecipe] = useState<number | null>(null);
  const [showRecipe, setShowRecipe] = useState<RecipeType | null>(null);

  const handleVisible = (i: number, e: RecipeType) => {
    if (i === currentRecipe) {
      return null;
    }
    setCurrentRecipe(i);
    setShowRecipe(e);
  };

  return (
    <div className="overflow-hidden w-screen pb-24" id="recipes">
      <div className="text-3xl text-white font-croissant text-center px-2">
        Our Most Popular Recipes
      </div>
      <div className="flex flex-col md:flex-row justify-center pt-8 w-full">
        <div className="flex flex-row flex-wrap w-full md:flex-col md:w-2/5 items-center justify-center gap-2 md:gap-0">
          {RECIPES.map((e, i) => (
            <div
              className={
                currentRecipe === i
                  ? "border-b-2 border-slate-400 flex items-center justify-center w-2/5 md:w-64 text-white font-bold py-4 bg-amber-500 cursor-pointer text-xl"
                  : "border-b-2 border-slate-400 flex items-center justify-center w-2/5 md:w-64 dark:text-white text-black font-bold py-4 cursor-pointer text-xl"
              }
              onClick={() => handleVisible(i, e)}
              key={i}
            >
              {e.name}
            </div>
          ))}
        </div>
        {showRecipe === null ? (
          <div className="md:mt-0 mt-4 w-full md:w-3/5 text-center dark:text-white text-black font-bold text-2xl font-croissant">
            Click the recipe and do it by yourself in home
          </div>
        ) : (
          <div className="flex flex-row w-full md:w-3/5 md:mt-0 mt-4 px-4 md:px-0">
            <div className="md:h-80 w-48 h-48 md:w-80 rounded-xl">
              <img
                src={showRecipe?.image}
                alt="recipe"
                className="w-48 h-48 md:w-full md:h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col ml-8 max-w-[200px] md:max-w-[550px] px-4">
              <div className="text-left">
                <span className="text-2xl dark:text-white font-bold font-croissant">
                  {showRecipe?.name}
                </span>
              </div>
              <div className="flex items-center gap-2 py-4 dark:text-white">
                <BiTime size={32} />
                <span>{showRecipe?.prep_time}</span>
              </div>
              <div className="text-gray-400 gap-2 flex flex-col pb-4">
                <div className="dark:text-white text-black text-xl font-bold text-left">
                  Ingredients:
                </div>
                <div className="flex flex-row flex-wrap">
                  {showRecipe?.ingredients.map((e, i) => (
                    <div className="flex items-center" key={i}>
                      <BsDot />
                      <span>{e}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-left text-xl font-bold dark:text-white text-black pb-4">
                  Preparation:
                </div>
                {showRecipe?.instruction.map((e, i) => (
                  <div className="text-gray-400" key={i}>
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
