import React from "react";
import styles from "./MessageTile.module.scss";
import { IMessage } from "@/types/message";
import { IUser } from "@/types/user";

interface IProps {
  user: IUser;
  message: IMessage;
}

const MessageTile: React.FC<IProps> = ({ user, message }) => {
  return (
    <div
      id={
        message.sender.id !== user.id
          ? styles.atom_message_tile
          : styles.atom_message_tile_self
      }
    >
      <p>
        <b>
          {message.sender.id !== user.id ? message.sender.firstName : "You"}:
        </b>
      </p>
      <p>{message.text}</p>
    </div>
  );
};
export default MessageTile;
