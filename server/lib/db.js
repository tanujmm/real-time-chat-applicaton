import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}`);
  } catch (error) {
    console.log("Something went wrong", error);
  }
};
