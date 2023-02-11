import React from "react";
import styles from "./GroupTile.module.scss";
import SendIcon from "@mui/icons-material/Send";
import { placeholders } from "@/enums/placeholders";
import { IGroup } from "@/types/group";

interface IProps {
  group: IGroup;
  handleSelectGroup: (selectedGroup: IGroup) => void;
}

const GroupTile: React.FC<IProps> = ({ group, handleSelectGroup }) => {
  return (
    <div id={styles.atom_group_tile} onClick={() => handleSelectGroup(group)}>
      <div className={styles.group_information}>
        <img src={placeholders.IMAGE} alt={group.id} />
        <p>{group.name}</p>
      </div>
      <div className={styles.action_row}>
        <SendIcon />
      </div>
    </div>
  );
};
export default GroupTile;
