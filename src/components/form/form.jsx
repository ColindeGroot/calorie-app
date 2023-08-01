import React, { useState } from "react";
import "./form.css";

const FoodEntryForm = ({ addFoodEntry }) => {
  const [foodEntry, setFoodEntry] = useState({
    datetime: "",
    foodName: "",
    calorieValue: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(foodEntry);
  
    // Add the entered food to the list of foods
    addFoodEntry(foodEntry);
  
    // Reset the form inputs to empty strings
    setFoodEntry({
      datetime: "",
      foodName: "",
      calorieValue: "",
      price: "",
    });
  };

  return (
    <div className="food-form">
      <h2>Add food</h2>
      <form onSubmit={handleSubmit}>
        <label>Date/Time:</label>
        <input
          type="datetime-local"
          name="datetime"
          value={foodEntry.datetime}
          onChange={handleChange}
          required
        />

        <label>Food Name:</label>
        <input
          type="text"
          name="foodName"
          value={foodEntry.foodName}
          onChange={handleChange}
          required
        />

        <label>Number of calories:</label>
        <input
          type="number"
          name="calorieValue"
          value={foodEntry.calorieValue}
          onChange={handleChange}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={foodEntry.price}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default FoodEntryForm;