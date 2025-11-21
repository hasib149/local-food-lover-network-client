import React from "react";

const Ourstory = () => {
  return (
    <div>
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-6">Our Story</h2>
          <p className="text-gray-700 text-lg mb-6">
            We started as a small food blog to share our love for delicious
            dishes. Over the years, we've grown into a community of food lovers
            exploring the best eateries around the world. Join us on this
            flavorful journey!
          </p>
          <button
            className=" px-4 py-2 
          bg-white text-green-700 
          font-semibold 
          rounded-lg 
          border border-green-600
          shadow-sm 
          transition-all duration-300
          hover:bg-green-700 hover:text-white 
          hover:border-green-700
          hover:-translate-y-0.5"
          >
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Ourstory;
