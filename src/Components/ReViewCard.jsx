import React from "react";

const ReViewCard = ({ review }) => {
  const {
    reviewDate,
    userEmail,
    reviewText,
    starRating,
    location,
    restaurantName,
    foodImage,
    foodName,
  } = review;

  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hiddentransform transition-all duration-500 hover:scale-105 hover:shadow-xl">
      <img
        className="w-full h-48 object-cover rounded-t-xl"
        src={foodImage}
        alt={foodName}
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-green-700">{foodName}</h2>
        <p className="text-gray-500 text-sm mb-2">
          {restaurantName} - {location}
        </p>
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < starRating ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.145c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.95c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.03 9.377c-.783-.57-.38-1.81.588-1.81h4.145a1 1 0 00.95-.69l1.286-3.95z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 mb-4">{reviewText}</p>
        <div className="flex justify-between text-sm text-gray-400">
          <span>{userEmail}</span>
          <span>{new Date(reviewDate).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default ReViewCard;
