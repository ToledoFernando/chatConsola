import { Router } from "express";
import { IUser } from "../../types/Users";
import { loginUser, registerUser } from "./usersControllers";

const route = Router();

route.post("/login", loginUser);

route.post("/registro", registerUser);

export default route;
