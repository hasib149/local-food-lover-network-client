import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Card from "./Card";

const HighratingFood = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopFoods = async () => {
      try {
        const res = await fetch("http://localhost:3000/high-rating-food");
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
    <div>
      <div className="grid gap-4  grid-cols-1   sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-3 space-y-8 ">
        {foods.map((food) => (
          <Card key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default HighratingFood;
