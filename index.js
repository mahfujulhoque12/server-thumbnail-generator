import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

// Connect DB and then add routes
try {
  await connectDB();
  console.log("MongoDB connected");
} catch (error) {
  console.error("Failed to connect to MongoDB:", error);
  // Still start server but without DB routes
  app.use("/api/*", (req, res) => {
    res.status(503).json({ error: "Database connection failed" });
  });
}

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
