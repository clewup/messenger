import { IUser } from "../../../types/user";
import React, { SetStateAction, useContext, useState } from "react";
import styles from "./Messages.module.scss";
import { messagesMockData } from "@/components/molecules/Messages/data/mockData";
import MessageTile from "@/components/atoms/MessageTile/MessageTile";
import Button from "@/lib/mui/components/Button/Button";
import Input from "@/lib/mui/components/Input/Input";
import SendIcon from "@mui/icons-material/Send";
import BackIcon from "@mui/icons-material/ArrowBackIosNew";
import { Divider } from "@mui/material";
import { UserContext } from "@/contexts/User/User";

interface IProps {
  selectedUser: IUser;
  setSelectedUser: React.Dispatch<SetStateAction<IUser | undefined>>;
}

const Messages: React.FC<IProps> = ({ selectedUser, setSelectedUser }) => {
  const { user } = useContext(UserContext);
  const [newMessage, setNewMessage] = useState("");

  if (!user) return <></>;

  return (
    <div id={styles.molecule_messages}>
      <div className={styles.messages_header}>
        {" "}
        <Button
          variant={"text"}
          color={"primary"}
          onClick={() => setSelectedUser(undefined)}
        >
          <BackIcon />
        </Button>
      </div>
      <Divider />
      <div className={styles.user_communications}>
        {messagesMockData.map((message) => {
          return (
            <div key={message.text}>
              <MessageTile user={user} message={message} />
            </div>
          );
        })}
      </div>
      <div className={styles.messages_action_row}>
        <Input
          label={""}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className={styles.new_message_input}
        />
        <Button onClick={() => null} color={"info"}>
          <SendIcon />
        </Button>
      </div>
    </div>
  );
};
export default Messages;
