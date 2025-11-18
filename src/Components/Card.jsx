import React from "react";
import { Link, useNavigate } from "react-router";

const Card = ({ food }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
        <div className="relative mx-4 -mt-5 h-40 overflow-hidden rounded-xl shadow-xl transition-all duration-500 group-hover:scale-110">
          <img
            src={food.photo}
            alt={food.foodName}
            className="w-full h-full object-cover "
          />
        </div>

        <div className="p-6">
          <h5 className="mb-1 block font-sans text-xl font-bold leading-snug tracking-normal text-green-800 antialiased">
            {food.foodName}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            <span className="font-semibold text-lg">Restaurant Name:</span>{" "}
            <span className="text-green-700 font-semibold">
              {food.restaurantName}
            </span>
          </p>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            <span className="font-semibold text-lg">Location:</span>{" "}
            <span className="text-green-700 font-semibold">
              {food.restaurantLocation}
            </span>
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
          <button
            onClick={() => navigate("/all-review")}
            className="px-3 py-1  bg-white text-green-700 font-semibold rounded-xl shadow-xl hover:bg-green-700 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
          >
            Show All
          </button>

          <Link
            to="/view-details"
            className="px-3 py-1 bg-white text-green-700 font-semibold rounded-xl shadow-xl hover:bg-green-700 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
