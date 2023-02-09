import styles from "./DomainSelector.module.scss";
import { chatDomains } from "@/enums/chatDomains";
import UserList from "@/components/molecules/UserList/UserList";
import { userListMockData } from "@/components/molecules/UserList/data/mockData";
import RoomList from "@/components/molecules/RoomList/RoomList";
import { roomListMockData } from "@/components/molecules/RoomList/data/mockData";
import React, { SetStateAction, useState } from "react";
import { Socket } from "socket.io-client";

interface IProps {
  socket: Socket;
  setRoom: React.Dispatch<SetStateAction<string>>;
}

const DomainSelector: React.FC<IProps> = ({ socket, setRoom }) => {
  const [domain, setDomain] = useState(chatDomains.USER);

  return (
    <div id={styles.domain_selector}>
      <div className={styles.domain_tabs}>
        <div
          className={styles.domain_tab}
          onClick={() => setDomain(chatDomains.USER)}
        >
          <p>Users</p>
        </div>
        <div
          className={styles.domain_tab}
          onClick={() => setDomain(chatDomains.ROOM)}
        >
          <p>Rooms</p>
        </div>
      </div>
      {domain === chatDomains.USER && (
        <UserList socket={socket} users={userListMockData} setRoom={setRoom} />
      )}
      {domain === chatDomains.ROOM && <RoomList rooms={roomListMockData} />}
    </div>
  );
};
export default DomainSelector;
