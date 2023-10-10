import React, { useState } from "react";
import FACTS from "../random-data.json";

const Fact = () => {
  const [currentFact, setCurrentFact] = useState<number>(0);
  const factsQuantity = FACTS.length;

  const handleFact = () => {
    let random = Math.floor(Math.random() * factsQuantity);
    setCurrentFact(random);
  };

  return (
    <div className="w-full flex flex-row mb-16 items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center max-w-[800px]">
        <span className="text-center mt-2 font-bold text-xl font-croissant">
          Did you know?
        </span>
        <span className="text-white pt-4 pb-2 text-center">
          {FACTS[currentFact].header}
        </span>
        <span className="text-zinc-300 text-center pb-4">
          {FACTS[currentFact].text}
        </span>
        <button
          className="w-48 px-2 py-2 border-2 border-white my-2"
          onClick={() => handleFact()}
        >
          Different fact
        </button>
      </div>
    </div>
  );
};

export default Fact;
