import mongoose from "mongoose";
import { mongoURI } from "./dataDB";

export default async () => {
  try {
    const data = await mongoose.connect(mongoURI);
    console.log("MongoDB Connected at", data.connection.name);
  } catch (error) {
    console.log("Error al conectar mongoDB");
    console.log(error);
  }
};
