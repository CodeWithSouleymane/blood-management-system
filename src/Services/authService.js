import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Replace with your backend URL

// Login user
export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

// Register user
export const register = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      return response.data;
    } catch (error) {
      console.error("Error in register:", error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  };
  

// Logout user (optional, depending on your backend logic)
export const logout = () => {
  localStorage.removeItem("token");
};
