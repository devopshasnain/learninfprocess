const dotenv = require("dotenv")
dotenv.config()

const express = require("express");

const app = express();

// Azure / cloud friendly port
const PORT = process.env.PORT || 3000;

// health check (CI + Azure dono ke kaam ka)
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
  });
});

// home
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
