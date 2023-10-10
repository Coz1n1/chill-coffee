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
    <div className="overflow-hidden w-screen pb-24">
      <div className="text-3xl text-white font-croissant text-center">
        Recipes
      </div>
      <div className="flex flex-row justify-center pt-8 w-full">
        <div className="flex flex-col w-2/5 items-center">
          {RECIPES.map((e, i) => (
            <div
              className={
                currentRecipe === i
                  ? "border-b-2 border-slate-400 flex items-center justify-center w-64 text-white font-bold py-4 bg-amber-500 cursor-pointer text-xl"
                  : "border-b-2 border-slate-400 flex items-center justify-center w-64 text-white font-bold py-4 cursor-pointer text-xl"
              }
              onClick={() => handleVisible(i, e)}
              key={i}
            >
              {e.name}
            </div>
          ))}
        </div>
        {showRecipe === null ? (
          <div className="w-3/5 text-center text-white font-bold text-2xl font-croissant">
            Click the recipe and do it by yourself in home
          </div>
        ) : (
          <div className="flex flex-col w-3/5 items-center justify-start">
            <div className="text-center pb-8">
              <span className="text-2xl text-white font-bold font-croissant">
                {showRecipe?.name}
              </span>
            </div>
            <div className="h-64 bg-red-200 w-full"></div>
            <div className="flex items-center gap-2 py-4 text-white">
              <BiTime size={32} />
              <span>{showRecipe?.prep_time}</span>
            </div>
            <div className="text-gray-400 gap-2 flex flex-col pb-4">
              <div className="text-white text-xl font-bold text-center">
                Ingredients:
              </div>
              <div className="flex flex-row">
                {showRecipe?.ingredients.map((e, i) => (
                  <div className="flex items-center" key={i}>
                    <BsDot />
                    <span>{e}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-center text-xl font-bold text-white pb-4">
                Preparation:
              </div>
              {showRecipe?.instruction.map((e, i) => (
                <div className="text-gray-400" key={i}>
                  {e}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
