import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const EditReview = () => {
  const review = useLoaderData();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      foodName: e.target.foodName.value,
      restaurantName: e.target.restaurantName.value,
      foodImage: e.target.foodImage.value,
      reviewDate: e.target.reviewDate.value,
    };
    console.log(formData);

    fetch(`http://localhost:3000/reviewUser/${review._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Successfully saved:", data);
        toast.success("Your review has been submitted successfully.")
        navigate("/my-review");
      })

      .catch((error) => {
        console.error("Error while saving data:", error);
      });
  };
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Edit Review</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="foodName"
          defaultValue={review.foodName}
          placeholder="Food Name"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="restaurantName"
          defaultValue={review.restaurantName}
          placeholder="Restaurant Name"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="foodImage"
          defaultValue={review.foodImage}
          placeholder="Food Image URL"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="reviewDate"
          defaultValue={review.reviewDate}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Update Review
        </button>
      </form>
    </div>
  );
};

export default EditReview;
