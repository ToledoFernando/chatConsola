import mongoose from "mongoose";
import { mongoURI } from "../config/config";

export default async () => {
  try {
    mongoose.set("strictQuery", false);
    const data = await mongoose.connect(mongoURI);
    console.log("MongoDB Connected at", data.connection.name);
  } catch (error) {
    console.log("Error al conectar mongoDB");
    console.log(error);
  }
};
