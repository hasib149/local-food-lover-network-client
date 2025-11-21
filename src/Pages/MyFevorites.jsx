import React, { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Contex/AuthContex";
import Loader from "../Components/Loader";
import FevoritesCard from "../Components/FevoritesCard";

const MyFevorites = () => {
  const { user } = useContext(AuthContex);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://local-food-lover-network-puce.vercel.app/favorites?email=${user.email}`
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
      <FevoritesCard reviews={reviews}></FevoritesCard>
    </div>
  );
};

export default MyFevorites;
