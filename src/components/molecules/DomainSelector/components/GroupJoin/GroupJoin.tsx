import styles from "./GroupJoin.module.scss";
import { Modal } from "@mui/material";
import GroupForm from "@/components/molecules/GroupForm/GroupForm";
import React, { useState } from "react";
import Button from "@/lib/mui/components/Button/Button";
import { Socket } from "socket.io-client";
import Input from "@/lib/mui/components/Input/Input";

interface IProps {
  socket: Socket;
}

const GroupJoin: React.FC<IProps> = ({ socket }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [code, setCode] = useState("");

  return (
    <>
      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <div id={styles.groups_modal_wrapper}>
          <GroupForm socket={socket} setModalOpen={setModalOpen} />
        </div>
      </Modal>

      <div id={styles.molecule_group_join}>
        <Input
          placeholder={"Enter a Room Code"}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <p>or</p>
        <Button onClick={() => setModalOpen(true)}>Create</Button>
      </div>
    </>
  );
};
export default GroupJoin;
