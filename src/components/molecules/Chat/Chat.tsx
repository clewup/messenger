import { IUser } from "@/types/user";
import React, { SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./Chat.module.scss";
import MessageTile from "@/components/atoms/MessageTile/MessageTile";
import Button from "@/lib/mui/components/Button/Button";
import Input from "@/lib/mui/components/Input/Input";
import SendIcon from "@mui/icons-material/Send";
import BackIcon from "@mui/icons-material/ArrowBackIosNew";
import { Divider } from "@mui/material";
import { useUser } from "@/contexts/User/User";
import { IMessage } from "@/types/message";
import { Socket } from "socket.io-client";

interface IProps {
  socket: Socket;
  selectedUser: IUser;
  setSelectedUser: React.Dispatch<SetStateAction<IUser | undefined>>;
}

const Chat: React.FC<IProps> = ({ socket, selectedUser, setSelectedUser }) => {
  const { user } = useUser();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    if (user && selectedUser) {
      const ids = [user.id, selectedUser.id];
      setRoom(ids.sort().join(""));
    }
  }, [selectedUser]);

  useEffect(() => {
    socket.emit("joinRoomRequest", room);
  }, [room]);

  useEffect(() => {
    socket.on("joinRoomResponse", (messages: IMessage[]) => {
      setMessages(messages);
      messagesEndRef.current?.scrollIntoView();
    });
    socket.on("messageResponse", (messages: IMessage[]) => {
      setMessages(messages);
      messagesEndRef.current?.scrollIntoView();
    });
  }, [socket]);

  if (!user) return <></>;

  const handleSubmit = () => {
    const messageRequest: IMessage = {
      user: user,
      text: message,
      room: room,
    };
    socket.emit("messageRequest", messageRequest);
    setMessage("");
  };

  return (
    <div id={styles.molecule_chat}>
      <div className={styles.chat_header}>
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
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.chat_action_row}>
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
export default Chat;
