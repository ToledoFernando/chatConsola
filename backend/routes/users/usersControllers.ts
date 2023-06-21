import { IUserRegister } from "../../types/Users";
import { Request, Response } from "express";
import users from "../../models/users";
import bcrypt from "bcrypt";
import sendEmail from "../../email/sendEmail";
import { IUserSendEmail } from "../../types/Email";

export const loginUser = (req: Request, res: Response) => {
  res.send("ERROR");
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const codes: string[] = [
      "1234567890",
      "abcdefghijklmnopqrstuvwxyz",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    ];

    //getCode
    let code: string = "";
    for (let a = 0; a <= 8; a++) {
      const type: string = codes[Math.round(Math.random() * 2)];
      code = code + type[Math.round(Math.random() * (type.length - 1))];
    }

    const passHash: string = bcrypt.hashSync(req.body.password, 10);

    let newUser: IUserRegister = {
      username: req.body.username,
      email: req.body.email,
      password: passHash,
      codeVerify: code,
    };

    const result = await users.create(newUser);
    let dataEmail: IUserSendEmail = {
      username: result.username,
      email: result.email,
      codeVerify: result.codeVerify,
    };
    await sendEmail("sendVerifyAcount", dataEmail);
    res.send("OK");
  } catch (error: Error | any) {
    console.log(error.message);
    res.send("OCURRIO UN ERROR");
  }
};
