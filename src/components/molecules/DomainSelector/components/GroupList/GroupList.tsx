import React, { SetStateAction, useEffect, useState } from "react";
import styles from "./GroupList.module.scss";
import { IGroup } from "@/types/group";
import GroupTile from "@/components/atoms/GroupTile/GroupTile";
import { Socket } from "socket.io-client";
import Button from "@/lib/mui/components/Button/Button";
import { IChatUser } from "@/types/user";
import { Modal } from "@mui/material";
import GroupForm from "@/components/molecules/GroupForm/GroupForm";

interface IProps {
  socket: Socket;
  groups: IGroup[];
  setRoom: React.Dispatch<SetStateAction<string>>;
}

const GroupList: React.FC<IProps> = ({ socket, groups, setRoom }) => {
  const handleSelectGroup = (selectedGroup: IGroup) => {
    const room = selectedGroup.id;
    setRoom(room);
    socket.emit("joinRoomRequest", room);
  };

  return (
    <div id={styles.molecule_group_list}>
      {groups.map((group) => {
        return (
          <div key={group.id}>
            <GroupTile group={group} handleSelectGroup={handleSelectGroup} />
          </div>
        );
      })}
    </div>
  );
};
export default GroupList;
