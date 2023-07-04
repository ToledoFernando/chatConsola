import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import database from "./db/conn";
import cors from "cors";
import Routers from "./routes/routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(Routers);

const server = createServer(app);

const sokcet = new Server(server);

server.listen(4000, async () => {
  try {
    console.clear();
    await database.sync({ force: true });
    console.log("Base de datos conectada");
    console.log(`Modelos creado:`);
    for (let a in database.models) {
      console.log(` - ${a}`);
    }
    console.log("Server running on port 4000");
  } catch (error) {
    console.log("Base de datos no conectada");
  }
});
