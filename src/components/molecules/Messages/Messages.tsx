import { IUser } from "../../../types/user";
import React, { SetStateAction, useContext, useEffect, useState } from "react";
import styles from "./Messages.module.scss";
import { messagesMockData } from "@/components/molecules/Messages/data/mockData";
import MessageTile from "@/components/atoms/MessageTile/MessageTile";
import Button from "@/lib/mui/components/Button/Button";
import Input from "@/lib/mui/components/Input/Input";
import SendIcon from "@mui/icons-material/Send";
import BackIcon from "@mui/icons-material/ArrowBackIosNew";
import { Divider } from "@mui/material";
import { UserContext, useUser } from "@/contexts/User/User";
import { useSocket } from "@/contexts/Socket/Socket";
import { IMessage } from "@/types/message";

interface IProps {
  selectedUser: IUser;
  setSelectedUser: React.Dispatch<SetStateAction<IUser | undefined>>;
}

const Messages: React.FC<IProps> = ({ selectedUser, setSelectedUser }) => {
  const { user } = useUser();
  const { socket } = useSocket();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (socket) {
      socket.on("message-response", (message: IMessage) => {
        setMessages((prev) => {
          return [...prev, message];
        });
      });
    }
  }, [socket]);

  if (!user) return <></>;

  const handleSubmit = () => {
    socket?.emit("message-request", { user, text: message });
    setMessage("");
  };

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
        {messages.map((message) => {
          return (
            <div key={`message-${Math.random()}`}>
              <MessageTile user={user} message={message} />
            </div>
          );
        })}
      </div>
      <div className={styles.messages_action_row}>
        <Input
          label={""}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.new_message_input}
        />
        <Button onClick={handleSubmit} color={"info"}>
          <SendIcon />
        </Button>
      </div>
    </div>
  );
};
export default Messages;
