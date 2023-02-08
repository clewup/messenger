import React from "react";
import styles from "./RoomList.module.scss";
import { IRoom } from "@/types/room";
import RoomTile from "@/components/atoms/RoomTile/RoomTile";

interface IProps {
  rooms: IRoom[];
}

const RoomList: React.FC<IProps> = ({ rooms }) => {
  return (
    <div id={styles.molecule_room_list}>
      {rooms.map((room) => {
        return (
          <div key={room.id}>
            <RoomTile room={room} />
          </div>
        );
      })}
    </div>
  );
};
export default RoomList;
