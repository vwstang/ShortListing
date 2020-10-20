import express from "express";
import app from "./routes/app";
import api from "./routes/api";

const server = express();
const port = 1726;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// API Routing
server.use("/api", api);

// App Routing
server.use(express.static("public"));
server.use("/", app);

server.listen(port, () => {
  console.info(
    "\x1b[32m%s\x1b[0m %s \x1b[4m\x1b[33m%s\x1b[0m",
    "Server",
    "running at",
    `http://localhost:${port}`
  );
});
