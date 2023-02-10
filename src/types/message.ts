import { IChatUser } from "@/types/user";

export interface IMessage {
  user: IChatUser;
  text: string;
  room: string;
}
