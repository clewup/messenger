import { IMessage } from "@/types/message";
import { userListMockData } from "@/components/molecules/DomainSelector/components/UserList/data/mockData";

export const messagesMockData: IMessage[] = [
  {
    user: userListMockData[0],
    text: "test message",
    room: "1",
  },
  {
    user: userListMockData[1],
    text: "test message",
    room: "1",
  },
  {
    user: userListMockData[2],
    text: "test message",
    room: "1",
  },
];
