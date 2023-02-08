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

    const messages = [];
    socket.on("messageRequest", (message) => {
      console.log(`messageRequest: ${message.user.email} - ${message.text}`);
      messages.push(message);

      socket.emit("messageResponse", messages);
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
