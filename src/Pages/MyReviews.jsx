import React, { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Contex/AuthContex";
import Tabile from "../Components/Tabile";
import Loader from "../Components/Loader";

const MyReviews = () => {
  const { user } = useContext(AuthContex);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://local-food-lover-network-puce.vercel.app/reviewUser?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  }
  return (
    <div>
      <Tabile reviews={reviews}></Tabile>
    </div>
  );
};

export default MyReviews;
