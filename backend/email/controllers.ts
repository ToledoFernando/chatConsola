import { IEmailConfig, IUserSendEmail } from "../types/Email";
import { emailUser } from "../config/config";
import fs from "fs";
import path from "path";

export function sendEmailVerify(
  data: IUserSendEmail,
  emailConfig: IEmailConfig
): IEmailConfig {
  emailConfig.from = `"Verify Email" <${emailUser}>`;
  emailConfig.to = data.email;
  emailConfig.subject = "Verify Email";
  emailConfig.text = "Verify Email";

  let html_body = fs.readFileSync(
    path.join(__dirname, "html", "VerifyAcount.html"),
    "utf8"
  );

  let nombre = `${data.username[0].toUpperCase() + data.username.slice(1)}`;

  html_body = html_body
    .replace("##NOMBRE##", nombre)
    .replace("##CODE##", data.codeVerify);

  emailConfig.html = html_body;
  return emailConfig;
}
