import React from "react";
import Navbar from "../components/Navbar";
import Billboard from "../components/Billboard";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <div className="bg-black overflow-x-hidden">
        <Navbar />
        <Billboard />
        <About />
      </div>
    </>
  );
};

export default Home;
