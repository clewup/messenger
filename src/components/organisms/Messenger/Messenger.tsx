import React, { useEffect, useState } from "react";
import { IUser } from "../../../types/user";
import UserList from "../../molecules/UserList/UserList";
import Chat from "../../molecules/Chat/Chat";
import styles from "./Messenger.module.scss";
import { userListMockData } from "@/components/molecules/UserList/data/mockData";
import RoomList from "@/components/molecules/RoomList/RoomList";
import { roomListMockData } from "@/components/molecules/RoomList/data/mockData";
import io from "socket.io-client";
import { useUser } from "@/contexts/User/User";
import Button from "@/lib/mui/components/Button/Button";
import { chatDomains } from "@/enums/chatDomains";
import clsx from "clsx";

const socket = io("http://localhost:3000", { transports: ["websocket"] });

const Messenger: React.FC = () => {
  const [domain, setDomain] = useState(chatDomains.USER);
  const [selectedUser, setSelectedUser] = useState<IUser>();

  return (
    <div id={styles.organism_messenger}>
      {!selectedUser ? (
        <>
          <div className={styles.domain_tabs}>
            <div
              className={clsx({
                [styles.domain_tab_active]: domain === chatDomains.USER,
                [styles.domain_tab_inactive]: domain !== chatDomains.USER,
              })}
              onClick={() => setDomain(chatDomains.USER)}
              bg-color={"black"}
            >
              <p>Users</p>
            </div>
            <div
              className={clsx({
                [styles.domain_tab_active]: domain === chatDomains.ROOM,
                [styles.domain_tab_inactive]: domain !== chatDomains.ROOM,
              })}
              onClick={() => setDomain(chatDomains.ROOM)}
            >
              <p>Rooms</p>
            </div>
          </div>
          {domain === chatDomains.USER && (
            <UserList
              users={userListMockData}
              setSelectedUser={setSelectedUser}
            />
          )}
          {domain === chatDomains.ROOM && <RoomList rooms={roomListMockData} />}
        </>
      ) : (
        <Chat
          socket={socket}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    </div>
  );
};
export default Messenger;
