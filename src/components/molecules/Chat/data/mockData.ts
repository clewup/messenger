import { IMessage } from "@/types/message";
import { userListMockData } from "@/components/molecules/DomainSelector/components/UserList/data/mockData";

export const messagesMockData: IMessage[] = [
  {
    sender: userListMockData[0],
    recipient: "1",
    text: "test message",
    room: "1",
  },
  {
    sender: userListMockData[1],
    recipient: "2",
    text: "test message",
    room: "1",
  },
  {
    sender: userListMockData[2],
    recipient: "3",
    text: "test message",
    room: "1",
  },
];
