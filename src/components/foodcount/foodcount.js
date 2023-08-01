import React, { useState } from "react";
import FoodEntryForm from "./FoodEntryForm";
import FoodEntryList from "./FoodEntryList";

const FoodCounter = () => {
  const [foodEntries, setFoodEntries] = useState([]);

  const addFoodEntry = (newFoodEntry) => {
    setFoodEntries((prevEntries) => [...prevEntries, newFoodEntry]);
  };

  return (
    <div className="counter">
      <FoodEntryForm addFoodEntry={addFoodEntry} />
      <FoodEntryList foodEntries={foodEntries} />
    </div>
  );
};

export default FoodCounter;
