import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../Services/authService";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../store/slices/userSlice";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(credentials); // API call
      localStorage.setItem("token", data.token); // Save token to local storage
      dispatch(loginAction(data.user)); // Update Redux state
      navigate("/dashboard/donor"); // Redirect to donor dashboard
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom align="center">
        Login
      </Typography>
      {error && <Typography color="error" gutterBottom>{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={credentials.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Login;
