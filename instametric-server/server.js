require("dotenv").config();

const express = require("express");
const cors = require("cors");

const overviewRoutes = require("./routes/overviewRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const contentRoutes = require("./routes/contentRoutes");
const reportRoutes = require("./routes/reportRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// Middlewares
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("InstaMetric API is running");
});

// API routes
app.use("/api/overview", overviewRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/auth", authRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);

  res.status(500).json({
    message: "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});