import React, { useState } from "react";
import { IUser } from "../../../interfaces/user";
import UserList from "../../molecules/UserList/UserList";
import Messages from "../../molecules/Messages/Messages";
import "./Messenger.scss";

const Messenger: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<IUser>();

  return (
    <div id={"organism-messenger"}>
      {!selectedUser ? (
        <UserList setSelectedUser={setSelectedUser} />
      ) : (
        <Messages selectedUser={selectedUser} />
      )}
    </div>
  );
};
export default Messenger;
