import { Response } from "express";

export const sendError = (res: Response, status: number, message: string) => {
  return res.status(status).json({ Error: message });
};

export const sendSuccess = (res: Response, status: number, data: any) => {
  return res.status(status).json({ data });
};
