import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContex } from "../Contex/AuthContex";
import { toast } from "react-toastify";

const AddReview = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContex);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const reviewData = {
      foodName: form.foodName.value,
      foodImage: form.foodImage.value,
      restaurantName: form.restaurantName.value,
      location: form.location.value,
      starRating: form.starRating.value,
      reviewText: form.reviewText.value,
      userEmail: user?.email,
      reviewDate: new Date(),
    };

    fetch("http://localhost:3000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/all-review");
        toast.success("Your review has been successfully added!");
      })
      .catch((error) => {
        console.error("Error while saving data:", error);
      });
  };
  return (
    <div className="card border py-5  border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative ">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Add New Review
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label font-medium text-green-700 pb-2">
              Food Name
            </label>
            <input
              type="text"
              name="foodName"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter food name"
            />
          </div>

          <div>
            <label className="label font-medium text-green-700 pb-2">
              Food Image URL
            </label>
            <input
              type="url"
              name="foodImage"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label className="label font-medium text-green-700 pb-2">
              Restaurant Name
            </label>
            <input
              type="text"
              name="restaurantName"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter restaurant name"
            />
          </div>

          <div>
            <label className="label font-medium text-green-700 pb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Restaurant location"
            />
          </div>

          <div>
            <label className="label font-medium text-green-700 pb-2">
              Star Rating
            </label>
            <select
              name="starRating"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled selected>
                Select Rating
              </option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>

          <div>
            <label className="label font-medium text-green-700 pb-2">
              Review Text
            </label>
            <textarea
              name="reviewText"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[200px]"
              placeholder="Write your review..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#16a34a] to-[#0e7a32] text-white font-bold shadow-md hover:scale-105 transform transition-transform flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
