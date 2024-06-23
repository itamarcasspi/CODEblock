import path from "path"
import express from "express";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

import connectToDb from "./db/connectToDb.js";
import dbCom from "./routes/dbCom.route.js";

const __dirname = path.resolve();

const PORT = process.env.PORT || "5000";
const app = express();
app.use(cors());
app.options("*", cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.ORIGIN,
    methods: ["GET", "POST"],
  },
});
//add DB communication routes for retrieving and saving data

dotenv.config();
app.use(express.json());
app.use("/api", dbCom);

app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get("/",(req,res) => {
  res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

//roomList, a 2d array to hold both users in each room,for multiple rooms functionality. eg [room_id][user_id]
const roomList = {};
io.on("connection", (socket) => {

  socket.on("joinRoom", (roomId) => {
    if (!roomList[roomId]) {
      roomList[roomId] = [];
    }
    //add socket to roomList arr and socket connection will be its own sock.id
    roomList[roomId].push(socket.id);
    socket.join(socket.id);

    //first user will be the mentor
    if (roomList[roomId].length == 1) {
      io.to(socket.id).emit("role", "mentor");
    } else {
      io.to(socket.id).emit("role", "student");
    }
    //save roomId inside socket obj
    socket.roomId = roomId;
    //emit room[id] users array
    io.to(socket.id).emit("getRoom", roomList[roomId]);
  });

  socket.on("clientCodeChange", ({ mentorId, newCode }) => {
    io.to(mentorId).emit("codeChange", newCode);
  });

  socket.on("disconnect", () => {
    const roomId = socket.roomId;
    //remove socket.id from roomList
    const roomSize = roomList[roomId] ? roomList[roomId].length : 0;
    for (let index = 0; index < roomSize; index++) {
      if (roomList[roomId][index] == socket.id) {
        roomList[roomId].splice(index, 1);
        return;
      }
    }
  });
});

server.listen(PORT, () => {
  connectToDb();
  console.log(`Server  running on port ${PORT}`);
});
