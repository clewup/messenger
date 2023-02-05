import React from "react";
import styles from "./MessageTile.module.scss";
import { IMessage } from "@/types/message";

interface IProps {
  message: IMessage;
}

const MessageTile: React.FC<IProps> = ({ message }) => {
  return (
    <div id={styles.atom_message_tile}>
      <p>{message.sender.firstName}:</p>
      <p>{message.text}</p>
    </div>
  );
};
export default MessageTile;
