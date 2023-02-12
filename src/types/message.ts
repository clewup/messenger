import { IChatUser } from "@/types/user";

export interface IMessage {
  sender: IChatUser;
  recipient: string;
  text: string;
  room: string;
}
