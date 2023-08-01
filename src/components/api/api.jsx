// ./api.js

import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

export const addFoodEntry = async (foodEntry) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/foodEntries`, foodEntry);
    return response.data;
  } catch (error) {
    console.error("Error adding food entry:", error);
    throw error;
  }
};

export const getFoodEntries = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/foodEntries`);
    return response.data;
  } catch (error) {
    console.error("Error fetching", error);
    throw error;
  }
};
