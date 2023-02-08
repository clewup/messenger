import { IUser } from "@/types/user";

export interface IMessage {
  user: IUser;
  text: string;
  room: string;
}
