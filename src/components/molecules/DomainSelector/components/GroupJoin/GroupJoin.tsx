import styles from "./GroupJoin.module.scss";
import { Modal } from "@mui/material";
import GroupForm from "@/components/molecules/GroupForm/GroupForm";
import React, { useState } from "react";
import Button from "@/lib/mui/components/Button/Button";
import { Socket } from "socket.io-client";
import Input from "@/lib/mui/components/Input/Input";
import { useUser } from "@/contexts/User/User";

interface IProps {
  socket: Socket;
}

const GroupJoin: React.FC<IProps> = ({ socket }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [room, setRoom] = useState("");
  const { chatUser } = useUser();

  const handleJoinGroup = () => {
    socket.emit("joinGroupRequest", { room, chatUser });
  };

  return (
    <>
      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <div id={styles.groups_modal_wrapper}>
          <GroupForm socket={socket} setModalOpen={setModalOpen} />
        </div>
      </Modal>

      <div id={styles.molecule_group_join}>
        <div>
          <Input
            placeholder={"Enter a Room Code"}
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <Button onClick={handleJoinGroup}>Join</Button>
        </div>

        <p>or</p>
        <Button onClick={() => setModalOpen(true)}>Create</Button>
      </div>
    </>
  );
};
export default GroupJoin;
