import express from "express";
// import "dotenv/config";
// import connectDB from "./config/db.js";

// await connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
