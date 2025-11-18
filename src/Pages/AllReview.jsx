import React from "react";
import { useLoaderData, useNavigation } from "react-router";
import ReViewCard from "../Components/ReViewCard";
import Loader from "../Components/Loader";

const AllReview = () => {
  const data = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loader />;
  }
  return (
    <div>
      <div className="text-4xl text-green-700 pt-5 text-center font-bold">
        All Review
      </div>
      <p className=" text-center mb-10 font-semibold text-green-800">
        Explore review
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 py-6 mx-auto w-11/12">
        {data.map((review) => (
          <ReViewCard key={review._id} review={review}></ReViewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
