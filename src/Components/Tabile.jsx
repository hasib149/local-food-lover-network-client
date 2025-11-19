import React from "react";

const Tabile = ({ reviews }) => {

    
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
            {reviews.map((r) => (
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
                  <button className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 shadow-sm">
                    Edit
                  </button>

                  <button className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 shadow-sm">
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
