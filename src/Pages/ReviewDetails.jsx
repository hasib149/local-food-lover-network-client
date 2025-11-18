import React from "react";
import { useLoaderData } from "react-router";

const ReviewDetails = () => {
  const details = useLoaderData();
  return (
    <div className="flex justify-center p-5">
      <div className="card lg:card-side bg-base-100 shadow-lg overflow-hidden w-full max-w-7xl h-80 lg:h-90">
        {/* Left Image */}
        <figure className="lg:w-2/3 h-full">
          <img
            src={details.photo}
            alt={details.foodName}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Right Content */}
        <div className="card-body lg:w-2/3 p-5 flex flex-col justify-center h-screen">
          <div>
            <h2 className="card-title text-4xl text-green-700 font-bold mb-2">
              {details.foodName}
            </h2>
            <p className="text-gray-700 mb-1 text-xl">
              <span className="font-semibold text-green-700 text-2xl">
                Restaurant:
              </span>
            <span className="font-medium">  {details.restaurantName}</span>
            </p>
            <p className="text-gray-700 mb-1 text-xl">
              <span className="font-semibold text-green-700  text-2xl">
                Location:
              </span>
              <span className="font-medium"> {details.restaurantLocation}</span>
            </p>
            <p className="text-gray-700 mb-1 text-xl">
              <span className="font-semibold text-green-700  text-2xl">
                Reviewed by:
              </span>
              <span className="font-medium">{details.reviewerName}</span>
            </p>
          </div>
          <p className="   text-xl text-gray-700">
            <span className=" text-green-700 text-2xl  font-semibold">
              Rating:
            </span>
            <span className="font-medium">{details.rating}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
