import "dotenv/config";
import express from "express";
import cors from "cors";
import session from "express-session";
import connectDB from "./config/db.js";

await connectDB();

const app = express();

/* ---------- Middleware ---------- */
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    credentials: true,
  }),
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    },
  }),
);

/* ---------- Routes ---------- */
app.get("/", (req, res) => {
  res.send("Server is Live!");
});

/* ---------- Server ---------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
