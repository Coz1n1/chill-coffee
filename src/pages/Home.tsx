import React from "react";
import Navbar from "../components/Navbar";
import Billboard from "../components/Billboard";
import About from "../components/About";
import Marketplace from "../components/Marketplace";

const Home = () => {
  return (
    <>
      <div className="dark:bg-zinc-800 bg-white overflow-x-hidden">
        <Navbar />
        <Billboard />
        <About />
        <Marketplace />
      </div>
    </>
  );
};

export default Home;
