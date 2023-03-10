import React, { useEffect, useState } from "react";
import Chat from "../../molecules/Chat/Chat";
import styles from "./Messenger.module.scss";
import io from "socket.io-client";
import DomainSelector from "@/components/molecules/DomainSelector/DomainSelector";
import { useUser } from "@/contexts/User/User";

const socket = io("http://localhost:3000", { transports: ["websocket"] });

const Messenger: React.FC = () => {
  const [room, setRoom] = useState("");
  const { chatUser } = useUser();

  useEffect(() => {
    socket.emit("joinChatRequest", chatUser);
  }, []);

  return (
    <div id={styles.organism_messenger}>
      <div className={styles.domain}>
        <DomainSelector socket={socket} setRoom={setRoom} />
      </div>
      <div className={styles.chat}>
        <Chat socket={socket} room={room} />
      </div>
    </div>
  );
};
export default Messenger;
