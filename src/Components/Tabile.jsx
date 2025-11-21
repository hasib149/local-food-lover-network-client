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
    <div className="p-4">
      <div className="overflow-x-auto rounded-xl shadow-md border border-green-600">
        <table className="min-w-full text-left">
          <thead className="bg-gray-200 text-gray-700 hidden md:table-header-group">
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
                className="md:table-row block border-b hover:bg-green-100 transition-all duration-150"
              >
                {/* Image */}
                <td className="p-4 flex items-center md:table-cell ">
                  <span className="md:hidden font-semibold text-green-700">
                    Image:
                  </span>
                  <img
                    src={r.foodImage}
                    className="w-16 h-16 rounded-lg object-cover shadow-sm ml-2 md:ml-0"
                  />
                </td>

                {/* Food Name */}
                <td className="p-4 font-medium text-gray-800 md:table-cell block">
                  <span className="md:hidden font-semibold text-green-700">
                    Food Name:
                  </span>
                  {r.foodName}
                </td>

                {/* Restaurant */}
                <td className="p-4 text-gray-600 md:table-cell block">
                  <span className="md:hidden font-semibold text-green-700">
                    Restaurant:
                  </span>
                  {r.restaurantName}
                </td>

                {/* Posted Date */}
                <td className="p-4 text-gray-600 md:table-cell block">
                  <span className="md:hidden font-semibold text-green-700">
                    Posted Date:
                  </span>
                  {r.reviewDate}
                </td>

                {/* Actions */}
                <td className="p-4 flex gap-3 md:table-cell items-center">
                  <span className="md:hidden font-semibold text-green-700">
                    Actions:
                  </span>

                  <div className="flex gap-3 mt-2 md:mt-0 ">
                    <Link
                      to={`/edit-review/${r._id}`}
                      className=" px-5 py-2 
          bg-white text-green-700 
          font-semibold 
          rounded-lg 
          border border-green-600
          shadow-sm 
          transition-all duration-300
          hover:bg-blue-600 hover:text-white 
          hover:border-green-700
          hover:-translate-y-0.5"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(r._id)}
                      className=" px-6 py-2 
          bg-white text-green-700 
          font-semibold 
          rounded-lg 
          border border-green-600
          shadow-sm 
          transition-all duration-300
          hover:bg-red-600 hover:text-white 
          hover:border-green-700
          hover:-translate-y-0.5"
                    >
                      Delete
                    </button>
                  </div>
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
