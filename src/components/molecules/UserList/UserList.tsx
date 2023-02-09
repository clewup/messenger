import React, { SetStateAction } from "react";
import { IUser } from "../../../types/user";
import styles from "./UserList.module.scss";
import UserTile from "@/components/atoms/UserTile/UserTile";
import { Socket } from "socket.io-client";
import { useUser } from "@/contexts/User/User";

interface IProps {
  socket: Socket;
  users: IUser[];
  setRoom: React.Dispatch<SetStateAction<string>>;
}

const UserList: React.FC<IProps> = ({ socket, users, setRoom }) => {
  const { user } = useUser();

  const handleSelectUser = (selectedUser: IUser) => {
    if (user && selectedUser) {
      const ids = [user.id, selectedUser.id];
      const room = ids.sort().join("");
      setRoom(room);
      socket.emit("joinRoomRequest", room);
    }
  };

  return (
    <div id={styles.molecule_user_list}>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <UserTile user={user} handleSelectUser={handleSelectUser} />
          </div>
        );
      })}
    </div>
  );
};
export default UserList;
