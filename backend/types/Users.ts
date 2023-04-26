export interface IUser {
  username: string;
  email: string;
  password: string;
}

export interface IUserRegister {
  username: string;
  email: string;
  password: string;
  codeVerify: string;
}
