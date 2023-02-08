import React, { SetStateAction } from "react";
import styles from "./RoomTile.module.scss";
import { IUser } from "@/types/user";
import SendIcon from "@mui/icons-material/Send";
import { placeholders } from "@/enums/placeholders";
import { IRoom } from "@/types/room";

interface IProps {
  room: IRoom;
}

const RoomTile: React.FC<IProps> = ({ room }) => {
  return (
    <div id={styles.atom_room_tile} onClick={() => null}>
      <div className={styles.room_information}>
        <img src={room.avatar ?? placeholders.IMAGE} alt={room.id} />
        <p>{room.name}</p>
      </div>
      <div className={styles.action_row}>
        <SendIcon />
      </div>
    </div>
  );
};
export default RoomTile;
