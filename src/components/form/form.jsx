import React, { useState } from "react";
import "./form.css";

const FoodEntryForm = ({ addFoodEntry }) => {
  const [foodInput, setFoodInput] = useState({
    date: "",
    foodName: "",
    calories: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  // reset form so user can put in new food
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(foodInput);

    addFoodEntry(foodInput);

    setFoodInput({
      date: "",
      foodName: "",
      calories: "",
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
          name="date" 
          value={foodInput.date}
          onChange={handleChange}
          required
        />

        <label>Food Name:</label>
        <input
          type="text"
          name="foodName"
          value={foodInput.foodName}
          onChange={handleChange}
          required
        />

        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={foodInput.calories}
          onChange={handleChange}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={foodInput.price}
          onChange={handleChange}
          required
        />

        <button className="form-button" type="submit">Add Entry</button> 
      </form>
    </div>
  );
};

export default FoodEntryForm;
