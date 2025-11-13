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
          <button className="px-8 py-3 bg-white text-green-700 font-semibold rounded-xl shadow-lg hover:bg-green-700 hover:text-white transform hover:-translate-y-1 transition-all duration-300">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Ourstory;
