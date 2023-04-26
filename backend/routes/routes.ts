import { Router } from "express";
import users from "./users/users";

const routes = Router();

routes.use(users);

export default routes;
