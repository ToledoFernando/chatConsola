import express from "express";
import routes from "./routes/routes";
import conn from "./db/conn";
import { PORT } from "./config/config";

conn();

const app = express();

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
