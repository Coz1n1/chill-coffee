import React, { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

const InfoCard = () => {
  const [visibleCard, setVisibleCard] = useState(false);
  const [currenAnswer, setCurrentAnswer] = useState<number | null>(null);

  const helpdeskQuestions = [
    {
      id: 1,
      question: "What is the difference between Arabica and Robusta?",
      answer:
        "Arabica has accustomed us to calm, sweet, even monotone flavors, revolving around flowers and fruits. Robusta, on the other hand, has heavy, bitter-chocolate notes that stay on the tongue for a very long time.",
    },
    {
      id: 2,
      question: "What is the delivery time?",
      answer:
        "Most part of our orders are realized in 2-3 days, in the worst case it takes 4 days.",
    },
  ];

  const handleAnswer = (i: number) => {
    if (i === currenAnswer) {
      return null;
    }
    setCurrentAnswer(i);
  };

  return (
    <div className=" z-30 fixed right-4 bottom-4">
      <AiFillQuestionCircle
        size={42}
        className="text-lime-400 animate-pulse cursor-pointer"
        onClick={() => setVisibleCard(!visibleCard)}
      />
      <div
        className={`${
          visibleCard ? "flex" : "hidden"
        } flex-col bottom-12 w-80 h-96 right-0 dark:bg-zinc-500 bg-zinc-100 border-2 border-amber-500 absolute rounded-xl overflow-y-auto`}
      >
        <span className="w-full text-center text-black py-2 font-bold mb-4 px-2">
          How can we help you?
        </span>
        <div className="flex flex-col gap-4 px-2 w-full">
          {helpdeskQuestions.map((question, i) => (
            <div className="flex flex-col gap-2 px-2">
              <div
                className="w-full text-left bg-white text-black rounded-lg px-2 py-2 cursor-pointer"
                onClick={() => handleAnswer(i)}
              >
                {question.question}
              </div>
              <div
                className={`${
                  currenAnswer === i ? "flex" : "hidden"
                } bg-black px-2 py-2 rounded-lg w-full text-white text-left`}
              >
                {question.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
