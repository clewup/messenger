import React, { SetStateAction } from "react";
import styles from "./UserTile.module.scss";
import { IChatUser, IUser } from "@/types/user";
import SendIcon from "@mui/icons-material/Send";
import { placeholders } from "@/enums/placeholders";
import { useUser } from "@/contexts/User/User";

interface IProps {
  chatUser: IChatUser;
  handleSelectUser: (user: IChatUser) => void;
}

const UserTile: React.FC<IProps> = ({ chatUser, handleSelectUser }) => {
  const { user } = useUser();

  return (
    <div id={styles.atom_user_tile} onClick={() => handleSelectUser(chatUser)}>
      <div className={styles.user_information}>
        <img src={placeholders.IMAGE} alt={chatUser?.id} />
        <p>{chatUser?.username}</p>
      </div>
      <div className={styles.action_row}>
        <SendIcon />
      </div>
    </div>
  );
};
export default UserTile;
