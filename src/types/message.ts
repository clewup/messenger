import {IUser} from "@/types/user";

export interface IMessage {
    sender: IUser;
    text: string;
}