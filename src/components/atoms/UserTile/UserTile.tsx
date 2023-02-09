import React, { SetStateAction } from "react";
import styles from "./UserTile.module.scss";
import { IUser } from "@/types/user";
import SendIcon from "@mui/icons-material/Send";
import { placeholders } from "@/enums/placeholders";

interface IProps {
  user: IUser;
  handleSelectUser: (user: IUser) => void;
}

const UserTile: React.FC<IProps> = ({ user, handleSelectUser }) => {
  return (
    <div id={styles.atom_user_tile} onClick={() => handleSelectUser(user)}>
      <div className={styles.user_information}>
        <img src={user.avatar ?? placeholders.IMAGE} alt={user.id} />
        <p>
          {user.firstName} {user.lastName}
        </p>
      </div>
      <div className={styles.action_row}>
        <SendIcon />
      </div>
    </div>
  );
};
export default UserTile;
