import React from "react";
import { Link } from "react-router";

const Card = ({ food }) => {
  return (
    <div>
      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
        <div className="relative mx-4 -mt-5 h-40 overflow-hidden rounded-xl shadow-xl transition-all duration-500 group-hover:scale-110">
          <img
            src={food.photo}
            alt={food.foodName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h5 className="mb-1 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {food.foodName}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            <span className="font-semibold text-lg">Restaurant Name:</span>{" "}
            <span className="text-green-700 font-semibold">{food.restaurantName}</span>
          </p>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            <span className="font-semibold text-lg">Location:</span>{" "}
            <span className="text-green-700 font-semibold">{food.restaurantLocation}</span>
          </p>
          <p className="block font-sans text-base font-semibold leading-relaxed text-inherit antialiased">
            <span className="font-semibold text-lg">Reviewer Name:</span>{" "}
            <span className="text-green-700">{food.reviewerName}</span>
          </p>
          <p className="block font-sans text-base font-semibold leading-relaxed antialiased">
            <span className="font-semibold text-lg">Rating:</span>{" "}
            <span className="text-green-700">{food.rating}</span>
          </p>
        </div>

        <div className="p-6 pt-0 flex gap-4 justify-between">
          <Link
            to="/Show All"
            className="
              relative overflow-hidden group
              px-3 py-1 text-sm font-semibold uppercase tracking-wide
              text-green-700 outline outline-green-600
              transition duration-700
              rounded-md
            "
          >
            <span className="relative z-10 transition-all group-hover:text-white">Show All</span>
            <span className="absolute -left-10 top-0 h-full w-0 bg-green-700 skew-x-45 transition-all duration-700 group-hover:w-[250%] -z-10"></span>
          </Link>

          <Link
            to="/view-details"
            className="
              relative overflow-hidden group
              px-3 py-1 text-sm font-semibold uppercase tracking-wide
              text-green-700 outline outline-green-600
              transition duration-700
              rounded-md
            "
          >
            <span className="relative z-10 transition-all group-hover:text-white">View Details</span>
            <span className="absolute -left-10 top-0 h-full w-0 bg-green-700 skew-x-45 transition-all duration-700 group-hover:w-[250%] -z-10"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
