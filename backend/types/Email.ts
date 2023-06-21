export interface IEmailConfig {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

export interface IUserSendEmail {
  username: string;
  email: string;
  codeVerify: string;
}
