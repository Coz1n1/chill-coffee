import React, { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Footer = () => {
  const [rating, setRating] = useState<any>(null);
  const [hover, setHover] = useState<any>(null);

  return (
    <div className="w-full bg-black text-white flex flex-row h-72">
      <div className="md:flex-1 w-32 flex md:flex-row flex-col md:px-0 px-2 items-center justify-center text-3xl font-bold border-r-2 border-r-zinc-600 my-4">
        <span>Chill</span>
        <span className="text-amber-500">Coffee</span>
        <BiRightArrow />
      </div>
      <div className="md:flex-1 w-full my-4 flex flex-row md:px-16 px-2 gap-4">
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-md md:text-xl text-white font-bold">
              Have you been to our place?
            </span>
            <span>Help us improve our services:</span>
            <div className="flex flex-row">
              {[...Array(5)].map((star, i) => {
                const current = i + 1;
                return (
                  <label>
                    <input
                      type="radio"
                      name="rating"
                      value={current}
                      onClick={() => setRating(current)}
                      className="hidden"
                    />
                    <FaStar
                      size={32}
                      className="cursor-pointer"
                      color={
                        current <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                      }
                      onMouseEnter={() => setHover(current)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="mb-1">Our Socials:</span>
            <div className="flex flex-row gap-1">
              <AiFillTwitterCircle size={32} />
              <AiFillGithub size={32} />
              <AiFillInstagram size={32} />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[100px] md:w-full">
          <span className="flex md:flex-row flex-col items-center text-md md:text-xl font-bold w-full justify-center gap-2 mb-4">
            Any question? Write to us
            <BsFillArrowDownCircleFill
              size={42}
              className="text-amber-500 animate-bounce"
            />
          </span>
          <input
            type="text"
            placeholder="Title"
            className="px-4 md:py-2 py-1 rounded-xl outline-0 text-black mb-2"
          />
          <input
            type="text"
            placeholder="Your email"
            className="px-4 md:py-2 py-1 rounded-xl outline-0 text-black mb-2"
          />
          <textarea
            className="px-4 py-2 rounded-xl outline-0 text-black"
            placeholder="Text"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Footer;
