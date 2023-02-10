import React, { useEffect, useState } from "react";
import styles from "./GroupList.module.scss";
import { IGroup } from "@/types/group";
import GroupTile from "@/components/atoms/GroupTile/GroupTile";
import { Socket } from "socket.io-client";
import Button from "@/lib/mui/components/Button/Button";

interface IProps {
  socket: Socket;
  groups: IGroup[];
}

const GroupList: React.FC<IProps> = ({ socket, groups }) => {
  const handleCreateGroup = () => {
    const group: IGroup = {
      id: `${Math.random()}`,
      name: "Group",
    };
    socket.emit("createGroupRequest", group);
  };

  return (
    <div id={styles.molecule_group_list}>
      {groups.map((group) => {
        return (
          <div key={group.id}>
            <GroupTile group={group} />
          </div>
        );
      })}
      <div className={styles.groups_action_row}>
        <Button onClick={handleCreateGroup}>Add</Button>
      </div>
    </div>
  );
};
export default GroupList;
