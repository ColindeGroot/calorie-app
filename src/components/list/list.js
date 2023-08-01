import React, { useEffect, useState } from "react";
import { getFoodEntries } from "../api/api";

const FoodEntryList = () => {
  const [foodEntries, setFoodEntries] = useState([]);

  useEffect(() => {
    fetchFoodEntries();
  }, []);

  const fetchFoodEntries = async () => {
    try {
      const entries = await getFoodEntries();
      setFoodEntries(entries);
    } catch (error) {
      console.error("Error fetching food entries:", error);
    }
  };

  return (
    <div className="food-entry-list">
      <h2>Food Entry List</h2>
      {foodEntries.length === 0 ? (
        <p>No food entries yet.</p>
      ) : (
        foodEntries.map((foodEntry) => (
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
