import nodemailer from "nodemailer";
import * as email from "../config/config";
import { IEmailConfig, IUserSendEmail } from "../types/Email";
import { sendEmailVerify } from "./controllers";

let transporter = nodemailer.createTransport({
  host: email.emailService,
  port: Number(email.emailPort),
  secure: true,
  auth: {
    user: email.emailUser,
    pass: email.emailPass,
  },
});

async function sendEmail(type: string, data: IUserSendEmail) {
  let emailConfig: IEmailConfig = {
    from: "",
    to: "",
    subject: "",
    text: "",
    html: "",
  };

  switch (type) {
    case "sendVerifyAcount":
      emailConfig = sendEmailVerify(data, emailConfig);
      break;
  }

  console.log(emailConfig.to);
  let info = await transporter.sendMail(emailConfig);

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

export default sendEmail;
