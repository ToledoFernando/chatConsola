import express from "express";
import routes from "./routes/routes";
import conn from "./db/conn";

conn();

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  console.log("Server on port 3000");
});
