import dotenv from "dotenv";
dotenv.config();

export const mongoURI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/consoleChat";

export const PORT = process.env.PORT || 4000;

export const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const emailPass = process.env.EMAIL_PASS;
export const emailUser = process.env.EMAIL_USER;
export const emailService = process.env.EMAIL_SERVICE;
export const emailPort = process.env.EMAIL_PORT;
