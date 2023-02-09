import React, { useEffect, useState } from "react";
import { IUser } from "../../../types/user";
import UserList from "../../molecules/UserList/UserList";
import Chat from "../../molecules/Chat/Chat";
import styles from "./Messenger.module.scss";
import { userListMockData } from "@/components/molecules/UserList/data/mockData";
import RoomList from "@/components/molecules/RoomList/RoomList";
import { roomListMockData } from "@/components/molecules/RoomList/data/mockData";
import io from "socket.io-client";
import { chatDomains } from "@/enums/chatDomains";
import clsx from "clsx";
import DomainSelector from "@/components/molecules/DomainSelector/DomainSelector";

const socket = io("http://localhost:3000", { transports: ["websocket"] });

const Messenger: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<IUser>();

  return (
    <div id={styles.organism_messenger}>
      <div className={styles.domain}>
        <DomainSelector
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      </div>
      <div className={styles.chat}>
        <Chat
          socket={socket}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      </div>
    </div>
  );
};
export default Messenger;
