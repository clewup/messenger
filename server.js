const express = require("express");
const http = require("http");
const next = require("next");
const socketIO = require("socket.io");
const cors = require("cors");

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

  io.on("connection", (socket) => {
    console.log("connection");
    socket.emit("status", "Hello from Socket.io");

    const users = [];
    const groups = [];
    const messages = [];

    socket.on("joinChatRequest", (chatUser) => {
      console.log(`joinChatRequest: ${chatUser?.username}`);

      if (chatUser && !users.includes(chatUser)) {
        users.push(chatUser);
      }

      socket.emit("joinChatResponse", users);
    });

    socket.on("createGroupRequest", (group) => {
      console.log(`newGroupRequest: ${group.name}`);

      groups.push(group);

      socket.emit("createGroupResponse", groups);
    });

    socket.on("joinRoomRequest", (room) => {
      console.log(`joinRoomRequest: ${room}`);
      socket.join(room);
      socket.emit(
        "joinRoomResponse",
        messages.filter((x) => x.room === room)
      );
    });

    socket.on("messageRequest", (message) => {
      const { user, text, room } = message;
      console.log(`messageRequest: ${user.email} - ${text}`);
      messages.push(message);

      socket.emit(
        "messageResponse",
        messages.filter((x) => x.room === room)
      );
    });

    socket.on("disconnect", () => {
      console.log("client disconnected");
    });
  });

  app.all("*", (req, res) => nextHandler(req, res));

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
