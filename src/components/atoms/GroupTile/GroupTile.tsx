import React from "react";
import styles from "./GroupTile.module.scss";
import SendIcon from "@mui/icons-material/Send";
import { placeholders } from "@/enums/placeholders";
import { IGroup } from "@/types/group";

interface IProps {
  group: IGroup;
}

const GroupTile: React.FC<IProps> = ({ group }) => {
  return (
    <div id={styles.atom_group_tile} onClick={() => null}>
      <div className={styles.group_information}>
        <img src={group.avatar ?? placeholders.IMAGE} alt={group.id} />
        <p>{group.name}</p>
      </div>
      <div className={styles.action_row}>
        <SendIcon />
      </div>
    </div>
  );
};
export default GroupTile;
