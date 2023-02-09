import React from "react";
import styles from "./GroupList.module.scss";
import { IGroup } from "@/types/group";
import GroupTile from "@/components/atoms/GroupTile/GroupTile";

interface IProps {
  groups: IGroup[];
}

const GroupList: React.FC<IProps> = ({ groups }) => {
  return (
    <div id={styles.molecule_group_list}>
      {groups.map((group) => {
        return (
          <div key={group.id}>
            <GroupTile group={group} />
          </div>
        );
      })}
    </div>
  );
};
export default GroupList;
