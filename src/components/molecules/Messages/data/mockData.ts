import { IMessage } from "@/types/message";
import { userListMockData } from "@/components/molecules/UserList/data/mockData";

export const messagesMockData: IMessage[] = [
  {
    sender: userListMockData[0],
    text: "test message",
  },
  {
    sender: userListMockData[1],
    text: "test message",
  },
  {
    sender: userListMockData[2],
    text: "test message",
  },
];
