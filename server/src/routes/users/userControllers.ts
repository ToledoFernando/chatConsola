import { Response, Request } from "express";
import database from "../../db/conn";
import { sendError, sendSuccess } from "../response";
import { IUserRegister } from "./userTypes";

const { Users } = database.models;

export const registerUser = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  const t = await database.transaction();
  try {
    const { username, password, email } = req.body as IUserRegister;
    const user = await Users.create({
      username,
      email,
      password,
      transaction: t,
    });
    await t.commit();
    return sendSuccess(res, 201, user);
  } catch (error: unknown | any) {
    await t.rollback();
    return sendError(res, 400, error.message);
  }
};
