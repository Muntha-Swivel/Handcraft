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
