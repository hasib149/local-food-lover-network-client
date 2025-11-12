import React from "react";
import { Link } from "react-router";

const Errorpage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 text-center px-4">
      <div>
        <h2 className="text-8xl sm:text-9xl font-extrabold text-green-700">
          404
        </h2>
      </div>
      <div>
        <p className="mt-4 text-gray-700 text-xl sm:text-2xl">
          The page you are looking for does not exist.
        </p>
      </div>
      <div className="mt-8">
        <Link to="/" className="btn btn-outline space-x-3 hover:bg-green-700 transition-all duration-800 ease-in-out">
          Go Home
        </Link>{" "}
      </div>
    </div>
  );
};

export default Errorpage;
