import styles from "./DomainSelector.module.scss";
import { chatDomains } from "@/enums/chatDomains";
import UserList from "@/components/molecules/DomainSelector/components/UserList/UserList";
import GroupList from "@/components/molecules/DomainSelector/components/GroupList/GroupList";
import { groupListMockData } from "@/components/molecules/DomainSelector/components/GroupList/data/mockData";
import React, { SetStateAction, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { IChatUser } from "@/types/user";
import { IGroup } from "@/types/group";

interface IProps {
  socket: Socket;
  setRoom: React.Dispatch<SetStateAction<string>>;
}

const DomainSelector: React.FC<IProps> = ({ socket, setRoom }) => {
  const [domain, setDomain] = useState(chatDomains.USER);
  const [chatUsers, setChatUsers] = useState<IChatUser[]>([]);
  const [groups, setGroups] = useState<IGroup[]>([]);

  useEffect(() => {
    socket.on("joinChatResponse", (chatUsers: IChatUser[]) => {
      setChatUsers(chatUsers);
    });
    socket.on("createGroupResponse", (groups: IGroup[]) => {
      setGroups(groups);
    });
  }, [socket]);

  return (
    <div id={styles.domain_selector}>
      <div className={styles.domain_tabs}>
        <div
          className={styles.domain_tab}
          onClick={() => setDomain(chatDomains.USER)}
        >
          <p>Users</p>
        </div>
        <div
          className={styles.domain_tab}
          onClick={() => setDomain(chatDomains.GROUP)}
        >
          <p>Groups</p>
        </div>
      </div>
      {domain === chatDomains.USER && (
        <UserList socket={socket} chatUsers={chatUsers} setRoom={setRoom} />
      )}
      {domain === chatDomains.GROUP && (
        <GroupList socket={socket} groups={groups} setRoom={setRoom} />
      )}
    </div>
  );
};
export default DomainSelector;
