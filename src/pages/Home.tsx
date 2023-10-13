import React from "react";
import Navbar from "../components/Navbar";
import Billboard from "../components/Billboard";
import About from "../components/About";
import Marketplace from "../components/Marketplace";
import Recipes from "../components/Recipes";
import Fact from "../components/Fact";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";

const Home = () => {
  return (
    <>
      <div className="dark:bg-zinc-800 bg-white overflow-x-hidden">
        <Navbar />
        <InfoCard />
        <Billboard />
        <About />
        <Marketplace />
        <Fact />
        <Recipes />
        <Footer />
      </div>
    </>
  );
};

export default Home;
