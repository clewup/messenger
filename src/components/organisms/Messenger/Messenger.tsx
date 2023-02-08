import React, { useState } from "react";
import { IUser } from "../../../types/user";
import UserList from "../../molecules/UserList/UserList";
import Messages from "../../molecules/Messages/Messages";
import styles from "./Messenger.module.scss";
import { userListMockData } from "@/components/molecules/UserList/data/mockData";
import { useUser } from "@/contexts/User/User";
import RoomList from "@/components/molecules/RoomList/RoomList";
import { roomListMockData } from "@/components/molecules/RoomList/data/mockData";

const Messenger: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<IUser>();
  const { user } = useUser();

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
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    </div>
  );
};
export default Messenger;
