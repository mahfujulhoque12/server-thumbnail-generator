import "dotenv/config"; // this auto-loads .env variables
import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import session from "express-session";

declare module "express-session" {
  interface SessionData {
    isLoggedIn: boolean;
    userId: string;
  }
}

await connectDB();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:3000"],
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
  })
);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live!");
});

const port = process.env.PORT || 7000; // fallback if .env fails
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
