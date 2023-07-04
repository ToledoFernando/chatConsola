import { Router } from "express";
import { registerUser } from "./userControllers";

const route = Router();

route.post("/register", registerUser);

export default route;
