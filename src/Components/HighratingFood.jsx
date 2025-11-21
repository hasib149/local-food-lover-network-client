import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Card from "./Card";

const HighratingFood = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopFoods = async () => {
      try {
        const res = await fetch(
          "https://local-food-lover-network-puce.vercel.app/high-rating-food"
        );
        const data = await res.json();
        setFoods(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopFoods();
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-full">
      <div
        className="grid gap-x-3 gap-y-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 
    place-items-center"
      >
        {foods.map((food) => (
          <Card key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default HighratingFood;
