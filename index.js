import "dotenv/config";
import express from "express";
import cors from "cors";
import session from "express-session";
import connectDB from "./config/db.js";

const app = express();

// IMPORTANT: connect DB only once
let isConnected = false;
async function dbConnectOnce() {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
}

await dbConnectOnce();

/* ---------- Middleware ---------- */
app.use(
  cors({
    origin: ["http://localhost:3000"],
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
      httpOnly: true,
      secure: true,
      sameSite: "none",
    },
  }),
);

/* ---------- Routes ---------- */
app.get("/", (req, res) => {
  res.send("Server is Live on Vercel!");
});

/* ---------- EXPORT (THIS IS THE KEY) ---------- */
export default app;
