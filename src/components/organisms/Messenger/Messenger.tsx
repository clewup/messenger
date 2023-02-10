import React, { useEffect, useState } from "react";
import Chat from "../../molecules/Chat/Chat";
import styles from "./Messenger.module.scss";
import io from "socket.io-client";
import DomainSelector from "@/components/molecules/DomainSelector/DomainSelector";
import { useUser } from "@/contexts/User/User";
import { IChatUser } from "@/types/user";

const socket = io("http://localhost:3000", { transports: ["websocket"] });

const Messenger: React.FC = () => {
  const [room, setRoom] = useState("");
  const [chatUsers, setChatUsers] = useState<IChatUser[]>([]);
  const { chatUser } = useUser();

  useEffect(() => {
    socket.emit("joinChatRequest", chatUser);
  }, []);

  useEffect(() => {
    socket.on("joinChatResponse", (chatUsers: IChatUser[]) => {
      setChatUsers(chatUsers);
    });
  }, [socket]);

  return (
    <div id={styles.organism_messenger}>
      <div className={styles.domain}>
        <DomainSelector
          socket={socket}
          setRoom={setRoom}
          chatUsers={chatUsers}
        />
      </div>
      <div className={styles.chat}>
        <Chat socket={socket} room={room} />
      </div>
    </div>
  );
};
export default Messenger;
