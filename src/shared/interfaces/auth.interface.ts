export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  _id: string;
  email: string;
  isAdmin: boolean;
  sessionId: string;
}

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
