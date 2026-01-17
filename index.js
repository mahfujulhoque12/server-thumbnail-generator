import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
