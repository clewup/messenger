import React, { SetStateAction } from "react";
import styles from "./UserTile.module.scss";
import { IUser } from "@/types/user";
import SendIcon from "@mui/icons-material/Send";
import { placeholders } from "@/enums/placeholders";

interface IProps {
  user: IUser;
  setSelectedUser: React.Dispatch<SetStateAction<IUser | undefined>>;
}

const UserTile: React.FC<IProps> = ({ user, setSelectedUser }) => {
  return (
    <div id={styles.atom_user_tile} onClick={() => setSelectedUser?.(user)}>
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
