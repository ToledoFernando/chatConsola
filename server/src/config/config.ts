import dotenv from "dotenv";
dotenv.config();

export const PSQL = process.env.PSQL as string;
