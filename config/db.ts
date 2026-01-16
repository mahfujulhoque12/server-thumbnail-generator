import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(
      "MongoDB connection failed:",
      error instanceof Error ? error.message : String(error)
    );
    process.exit(1);
  }
};

export default connectDB;
