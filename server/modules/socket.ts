import http from "http";
import socketIO from "socket.io";
import { IChatUser } from "@/types/user";
import { IGroup } from "@/types/group";
import { IMessage } from "@/types/message";

const socketIo = new socketIO.Server();

exports.initialize = (server: http.Server) => {
  socketIo.attach(server);

  const users: IChatUser[] = [];
  const groups: IGroup[] = [];
  const messages: IMessage[] = [];

  socketIo.on("connection", (socket: any) => {
    socket.on("joinChatRequest", (chatUser: IChatUser) => {
      if (chatUser && !users.find((x) => x.id === chatUser.id)) {
        users.push(chatUser);
      }

      socketIo.emit("joinChatResponse", users);
    });

    socket.on("createGroupRequest", (group: IGroup) => {
      groups.push(group);

      socket.emit(
        "createGroupResponse",
        groups.filter((x) => x.users.includes(group.creator))
      );
    });

    socket.on("joinRoomRequest", (room: string) => {
      socket.join(room);

      socket.emit(
        "joinRoomResponse",
        messages.filter((x) => x.room === room)
      );
    });

    socket.on(
      "joinGroupRequest",
      ({ room, chatUser }: { room: string; chatUser: IChatUser }) => {
        const group = groups.find((x) => x.id === room);

        if (group) {
          group.users.push(chatUser.id);
          socket.emit(
            "joinGroupResponse",
            groups.filter((x) => x.users.includes(chatUser.id))
          );
        }
      }
    );

    socket.on("messageRequest", (message: IMessage) => {
      const { room } = message;
      messages.push(message);

      socket.emit(
        "messageResponse",
        messages.filter((x) => x.room === room)
      );
      socket.to(room).emit(
        "messageResponse",
        messages.filter((x) => x.room === room)
      );
    });

    socket.on("disconnect", () => {});
  });
};

exports.getInstance = () => {
  return socketIo;
};
