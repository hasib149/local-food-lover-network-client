import React, { useEffect, useState } from "react";

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
    return <p>Loading...</p>; 
  }
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {foods.map((food) => (
          <div key={food._id} className="border p-4 rounded">
            <img
              src={food.photo}
              alt={food.name}
              className="w-full h-40 object-cover"
            />
            <h2 className="font-bold text-lg">{food.name}</h2>
            <p>Rating: {food.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighratingFood;
