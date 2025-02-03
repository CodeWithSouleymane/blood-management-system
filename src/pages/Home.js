import React from "react";
import { Container, Typography, Box } from "@mui/material";
import missionImage from "../assets/images/bg.png"; // For local hosting

function Home() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
      <Box
        component="img"
        src={missionImage} // Replace with the correct path
        alt="Blood donation mission"
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      />
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to the Blood Management System
      </Typography>
      <Typography variant="body1" align="center">
        Join us in saving lives by promoting and facilitating blood donation.
      </Typography>
    </Container>
  );
}

export default Home;
