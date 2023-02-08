import { IMessage } from "./message";

export interface IChatRequest {
  message: IMessage;
  room: string;
}
