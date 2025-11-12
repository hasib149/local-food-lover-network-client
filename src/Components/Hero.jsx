import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const slides = [
    {
      title: "Discover Local Flavors",
      subtitle: "Taste the best dishes from your community.",
      button: "Explore Now",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Share Your Food Story",
      subtitle: "Join our community of food lovers and storytellers.",
      button: "Join Today",
      image:
        "https://images.unsplash.com/photo-1609015746380-571227e2bc72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    {
      title: "Support Local Chefs",
      subtitle: "Celebrate homemade and street food experiences.",
      button: "Start Exploring",
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="w-11/12 mx-auto relative  min-h-[80vh] bg-white text-black overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-10"
        >
          <div className="flex-1 space-y-5 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              {slides[current].title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-700">
              {slides[current].subtitle}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden group px-8 py-3 text-lg font-semibold uppercase tracking-wide bg-[#2c9caf] text-white rounded-full outline outline-[#2c9caf] transition duration-800 hover:bg-green-700 hover:text-white hover:outline-green-700 hover:shadow-[4px_5px_17px_-4px_#268391]"
            >
              <span className="relative z-10">{slides[current].button}</span>
              <span className="absolute -left-10 top-0 h-full w-0 bg-green-700 skew-x-45 transition-all duration-700 group-hover:w-[250%] -z-10"></span>
            </motion.button>
          </div>

          <motion.div
            key={slides[current].image}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              key={slides[current].image}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex-1 flex justify-center"
            >
              <div className="w-full max-w-md h-80 md:h-96 lg:h-112 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={slides[current].image}
                  alt={slides[current].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative w-4 h-4 rounded-full overflow-hidden outline outline-gray-300 group transition-all duration-700 ${
              i === current ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <span className="absolute -left-10 top-0 w-0 h-full bg-green-500 skew-x-45 transition-all duration-700 group-hover:w-[250%] -z-10"></span>
            <span className="relative z-10 block w-full h-full"></span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
