const User = require("../models/User");
const { registerUser, loginUser } = require("../controllers/authController");
const { authenticate } = require("../middleware/authenticate");


const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      // Registration logic here
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error registering user", error: error.message });
    }
  };
  
  const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      // Login logic here
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      res.status(500).json({ message: "Error logging in", error: error.message });
    }
  };
  
  module.exports = { registerUser, loginUser };
  