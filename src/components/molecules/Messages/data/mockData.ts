import { IMessage } from "@/types/message";
import { userListMockData } from "@/components/molecules/UserList/data/mockData";

export const messagesMockData: IMessage[] = [
  {
    user: userListMockData[0],
    text: "test message",
  },
  {
    user: userListMockData[1],
    text: "test message",
  },
  {
    user: userListMockData[2],
    text: "test message",
  },
];
