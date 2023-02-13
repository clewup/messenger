const socketIo = require("./modules/socket");

import express, { Request, Response } from "express";
import http from "http";
import next from "next";
import cors from "cors";

const PORT = 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
  const app = express();
  app.use(cors());
  const server = http.createServer(app);

  socketIo.initialize(server);

  app.all("*", (req: Request, res: Response) => nextHandler(req, res));

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
