import React from "react";
import Hero from "../components/home/Hero";
import NavBar from "../components/home/NavBar";
import Tour from "../components/home/Tour";
import Tournext from "../components/home/Tournext";

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero />
	  <div className="w-[75%] md:mt-[100px] mt-[400px] mx-auto">
	  <Tour />
	  <Tournext />
	  </div>
    </div>
  );
};

export default Home;
