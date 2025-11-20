import React, { useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Tabile = ({ reviews }) => {
  const [localReviews, setLocalReviews] = useState(reviews);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/reviewUser/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Successfully saved:", data);
            setLocalReviews(localReviews.filter((r) => r._id !== id));

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };

  return (
    <div className="p-6">
      <div className="overflow-hidden rounded-xl shadow-md border">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4 font-semibold text-green-700">Image</th>
              <th className="p-4 font-semibold text-green-700">Food Name</th>
              <th className="p-4 font-semibold text-green-700">Restaurant</th>
              <th className="p-4 font-semibold text-green-700">Posted Date</th>
              <th className="p-4 font-semibold text-green-700">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {localReviews.map((r) => (
              <tr
                key={r._id}
                className="hover:bg-gray-50 transition-all duration-150"
              >
                <td className="p-4">
                  <img
                    src={r.foodImage}
                    className="w-14 h-14 rounded-lg object-cover shadow-sm"
                  />
                </td>

                <td className="p-4 font-medium text-gray-800">{r.foodName}</td>

                <td className="p-4 text-gray-600">{r.restaurantName}</td>

                <td className="p-4 text-gray-600">{r.reviewDate}</td>

                <td className="p-4 flex gap-3">
                  <Link
                    to={`/edit-review/${r._id}`}
                    className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 shadow-sm"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(r._id)}
                    className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 shadow-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabile;
