import React from "react";
import styles from "./MessageTile.module.scss";
import { IMessage } from "@/types/message";
import { IChatUser, IUser } from "@/types/user";

interface IProps {
  chatUser: IChatUser;
  message: IMessage;
}

const MessageTile: React.FC<IProps> = ({ chatUser, message }) => {
  return (
    <div
      id={
        message.sender.id !== chatUser.id
          ? styles.atom_message_tile
          : styles.atom_message_tile_self
      }
    >
      <p>
        <b>
          {message.sender.id !== chatUser.id ? message.sender.username : "You"}:
        </b>
      </p>
      <p>{message.text}</p>
    </div>
  );
};
export default MessageTile;
