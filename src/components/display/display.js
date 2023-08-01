import React, { useState } from "react"; 
import FoodEntryList from "../list/list";
import FoodEntryForm from "../form/form";
import "./display.css";

const Display = () => {

  const [foodEntries, setFoodEntries] = useState([]);

  const addFoodEntry = (newFoodEntry) => {
    setFoodEntries((prevEntries) => [...prevEntries, newFoodEntry]);
  };

  return (
    <section className="homescreen">
      <FoodEntryForm addFoodEntry={addFoodEntry} />
      <FoodEntryList foodEntries={foodEntries} />
    </section>
  );
};

export default Display;