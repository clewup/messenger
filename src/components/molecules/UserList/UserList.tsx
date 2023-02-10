import React, { SetStateAction, useEffect, useState } from "react";
import { IChatUser } from "../../../types/user";
import styles from "./UserList.module.scss";
import UserTile from "@/components/atoms/UserTile/UserTile";
import { Socket } from "socket.io-client";
import { useUser } from "@/contexts/User/User";

interface IProps {
  socket: Socket;
  chatUsers: IChatUser[];
  setRoom: React.Dispatch<SetStateAction<string>>;
}

const UserList: React.FC<IProps> = ({ socket, chatUsers, setRoom }) => {
  const { user } = useUser();

  const handleSelectUser = (selectedUser: IChatUser) => {
    if (user && selectedUser) {
      const ids = [user.id, selectedUser.id];
      const room = ids.sort().join("");
      setRoom(room);
      socket.emit("joinRoomRequest", room);
    }
  };

  return (
    <div id={styles.molecule_user_list}>
      {chatUsers.map((chatUser) => {
        return (
          <div key={chatUser.id}>
            <UserTile chatUser={chatUser} handleSelectUser={handleSelectUser} />
          </div>
        );
      })}
    </div>
  );
};
export default UserList;
