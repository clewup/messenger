export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IChatUser {
  id: string;
  username: string;
  socketId: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
