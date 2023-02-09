import React, { SetStateAction } from "react";
import { IUser } from "../../../types/user";
import styles from "./UserList.module.scss";
import UserTile from "@/components/atoms/UserTile/UserTile";

interface IProps {
  users: IUser[];
  selectedUser: IUser | undefined;
  setSelectedUser: React.Dispatch<SetStateAction<IUser | undefined>>;
}

const UserList: React.FC<IProps> = ({
  users,
  selectedUser,
  setSelectedUser,
}) => {
  return (
    <div id={styles.molecule_user_list}>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <UserTile
              user={user}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          </div>
        );
      })}
    </div>
  );
};
export default UserList;
