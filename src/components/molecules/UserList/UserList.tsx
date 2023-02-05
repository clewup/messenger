import React, { SetStateAction } from "react";
import { IUser } from "../../../interfaces/user";
import "./UserList.scss";

interface IProps {
  setSelectedUser: React.Dispatch<SetStateAction<IUser | undefined>>;
}

const UserList: React.FC<IProps> = ({ setSelectedUser }) => {
  return (
    <div id={"molecule-user-list"}>
      <></>
    </div>
  );
};
export default UserList;
