import { Router } from "express";
import UsersRouter from "./users/users";

const router = Router();

router.use("/users", UsersRouter);

export default router;
