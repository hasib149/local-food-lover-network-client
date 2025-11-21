import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router";
import ReViewCard from "../Components/ReViewCard";
import Loader from "../Components/Loader";

const AllReview = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  const [search, setSearch] = useState(data);
  const [loading, setLoading] = useState(false);

  const handlesearch = (e) => {
    e.preventDefault();
    const search_text = e.target.searchfield.value;
    setLoading(true);
    console.log(search_text);
    fetch(`http://localhost:3000/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => setSearch(data))
      .finally(() => setLoading(false));
  };

  if (navigation.state === "loading") {
    return <Loader />;
  }
  return (
    <div>
      <div className="text-4xl text-green-700 pt-5 text-center font-bold w-11/12 mx-auto">
        All Review
      </div>
      <p className=" text-center mb-10 font-semibold text-green-800">
        Explore review
      </p>
      {/* search */}
      <form
        onSubmit={handlesearch}
        className="flex justify-center items-center gap-1.5 "
      >
        <label className="flex items-center border-2 border-green-500 rounded-lg px-3 py-2 w-full max-w-sm focus-within:ring-1 focus-within:ring-green-400">
          <svg
            className="h-5 w-5 text-green-500 mr-2 opacity-70"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.3-4.3"></path>
            </g>
          </svg>

          <input
            type="search"
            name="searchfield"
            required
            placeholder="Search"
            className="flex-1 outline-none bg-transparent"
          />
        </label>
        <button
          className="
           px-5 py-2 
          bg-white text-green-700 
          font-semibold 
          rounded-lg 
          border border-green-600
          shadow-sm 
          transition-all duration-300
          hover:bg-green-700 hover:text-white 
          hover:border-green-700
          hover:-translate-y-0.5
        "
        >
          {loading ? "searching..." : " Search"}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 py-6 mx-auto w-11/12">
        {search.map((review) => (
          <ReViewCard key={review._id} review={review}></ReViewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
