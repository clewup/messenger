import { IUser } from "../../../interfaces/user";
import React from "react";
import "./Messages.scss";

interface IProps {
  selectedUser: IUser;
}

const Messages: React.FC<IProps> = ({ selectedUser }) => {
  return (
    <div id={"molecule-messages"}>
      <></>
    </div>
  );
};
export default Messages;
