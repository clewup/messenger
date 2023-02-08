import React, { useState } from "react";
import { IUser } from "../../../types/user";
import UserList from "../../molecules/UserList/UserList";
import Messages from "../../molecules/Messages/Messages";
import styles from "./Messenger.module.scss";
import { userListMockData } from "@/components/molecules/UserList/data/mockData";
import RoomList from "@/components/molecules/RoomList/RoomList";
import { roomListMockData } from "@/components/molecules/RoomList/data/mockData";
import io from "socket.io-client";

const socket = io("http://localhost:3000", { transports: ["websocket"] });

const Messenger: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<IUser>();

  return (
    <div id={styles.organism_messenger}>
      {!selectedUser ? (
        <>
          <UserList
            users={userListMockData}
            setSelectedUser={setSelectedUser}
          />
          <RoomList rooms={roomListMockData} />
        </>
      ) : (
        <Messages
          socket={socket}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    </div>
  );
};
export default Messenger;
