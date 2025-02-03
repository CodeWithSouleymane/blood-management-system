import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Donor from "./pages/Dashboard/Donor";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token"); // Clear the token or any authentication state
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/donor" element={isAuthenticated ? <Donor /> : <Home />} />
      </Routes>
    </Router>
    </ThemeProvider>
    
  );
}

export default App;
