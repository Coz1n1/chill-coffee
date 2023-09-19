import React from "react";
import Navbar from "../components/Navbar";
import Billboard from "../components/Billboard";

const Home = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <Billboard />
      </div>
    </>
  );
};

export default Home;
