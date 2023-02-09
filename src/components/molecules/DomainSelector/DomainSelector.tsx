import styles from "./DomainSelector.module.scss";
import clsx from "clsx";
import { chatDomains } from "@/enums/chatDomains";
import UserList from "@/components/molecules/UserList/UserList";
import { userListMockData } from "@/components/molecules/UserList/data/mockData";
import RoomList from "@/components/molecules/RoomList/RoomList";
import { roomListMockData } from "@/components/molecules/RoomList/data/mockData";
import React, { SetStateAction, useState } from "react";
import { IUser } from "@/types/user";

interface IProps {
  selectedUser: IUser | undefined;
  setSelectedUser: React.Dispatch<SetStateAction<IUser | undefined>>;
}

const DomainSelector: React.FC<IProps> = ({
  selectedUser,
  setSelectedUser,
}) => {
  const [domain, setDomain] = useState(chatDomains.USER);

  return (
    <div id={styles.domain_selector}>
      <div className={styles.domain_tabs}>
        <div
          className={clsx({
            [styles.domain_tab_active]: domain === chatDomains.USER,
            [styles.domain_tab_inactive]: domain !== chatDomains.USER,
          })}
          onClick={() => setDomain(chatDomains.USER)}
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
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
      {domain === chatDomains.ROOM && <RoomList rooms={roomListMockData} />}
    </div>
  );
};
export default DomainSelector;
