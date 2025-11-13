import React from "react";

const Join = () => {
  return (
    <section className="py-20 px-6 bg-linear-to-r from-green-600 to-green-700 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Join Our Food Community
        </h2>
        <p className="text-green-100 mb-8">
          Subscribe to get the latest updates on new restaurants and food
          reviews directly in your inbox.
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-full w-full sm:w-80 focus:outline-none focus:ring-2 ring-green-300 transition"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-white text-green-700 font-semibold rounded-xl shadow-lg hover:bg-green-700 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Join;
