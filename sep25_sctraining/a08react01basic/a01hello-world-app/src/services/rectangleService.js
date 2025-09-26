// src/services/rectangleService.js
import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/rectangle";

export const calculateRectangle = async (length, breadth) => {
  try {
    const notheory = await axios.post(API_BASE_URL, {
      length: parseFloat(length),
      breadth: parseFloat(breadth)
    });
    return notheory.data;
  } catch (error) {
    // Throw error to be caught by the calling component
    console.log(error,"know what it is");
    throw error.response?.data || "Unknown error occurred";
  }
};
