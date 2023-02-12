import { IChatUser } from "@/types/user";
import { IGroup } from "@/types/group";
import { IMessage } from "@/types/message";
import express, { Request, Response } from "express";
import http from "http";
import next from "next";
import socketIO from "socket.io";
import cors from "cors";

const PORT = 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
  const app = express();
  app.use(cors());
  const server = http.createServer(app);
  const io = new socketIO.Server();
  io.attach(server);

  const users: IChatUser[] = [];
  const groups: IGroup[] = [];
  const messages: IMessage[] = [];

  io.on("connection", (socket: any) => {
    socket.on("joinChatRequest", (chatUser: IChatUser) => {
      if (chatUser && !users.find((x) => x.id === chatUser.id)) {
        users.push(chatUser);
      }

      io.emit("joinChatResponse", users);
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

  app.all("*", (req: Request, res: Response) => nextHandler(req, res));

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
