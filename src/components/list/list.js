import React, { useEffect, useState } from "react";
import { getFoodEntries } from "../api/api";

const FoodEntryList = () => {
  const [foodInput, setFoodInput] = useState([]); 

  useEffect(() => {
    fetchFoodEntries();
  }, []);

  const fetchFoodEntries = async () => {
    try {
      const entries = await getFoodEntries();
      setFoodInput(entries); 
    } catch (error) {
      console.error("Error fetching food entries:", error);
    }
  };

  return (
    <div className="food-entry-list">
      <h2>Food Entry List</h2>
      {foodInput.length === 0 ? (
        <p>Nothing yet.</p>
      ) : (
        foodInput.map((foodEntry) => (
          <div key={foodEntry._id} className="food-entry-item">
            <p>Date/Time: {foodEntry.datetime}</p>
            <p>Food Name: {foodEntry.foodName}</p>
            <p>Calorie Value: {foodEntry.calorieValue}</p>
            <p>Price: {foodEntry.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FoodEntryList;
