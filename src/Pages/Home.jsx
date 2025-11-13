import React from "react";
import Hero from "../Components/Hero";
import HighratingFood from "../Components/HighratingFood";
import TopFood from "../Components/TopFood";

const Home = () => {
  return (
    <div className="">
      <Hero></Hero>
      <div className="pt-20 w-11/12 mx-auto">
        <div className="text-center my-8 px-4 sm:px-6 lg:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            🔥 Top Rated Dishes You Must Try! 🔥
          </h2>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-300">
            Discover the best flavors from our community favorites.
          </p>
        </div>
        <div className="pt-16">
          <HighratingFood></HighratingFood>
        </div>
      </div>
      <div>
        <TopFood></TopFood>
      </div>
    </div>
  );
};

export default Home;
