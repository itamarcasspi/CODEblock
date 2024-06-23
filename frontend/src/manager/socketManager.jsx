import  { useEffect, useState } from "react";
import io from "socket.io-client";
import _ from "lodash.throttle";

//id == codeRoom number
const socketManager = (id) => {
  const [socket, setSocket] = useState();
  const [codeRoom, setCodeRoom] = useState([]);
  const [role, setRole] = useState("");
  const [code, setCode] = useState();

  //Send code updates to mentor
  const codeChangeUpdate = (newCode) => {
    if (socket) {
      if (role == "mentor") return;
      //get the other user socket id
      let mentorId = "";
      for (let index = 0; index < codeRoom.length; index++) {
        let curr_user = codeRoom[index];
        if (curr_user != socket.id) {
          mentorId = curr_user;
        }
      }
      socket.emit("clientCodeChange", { mentorId, newCode });
    }
  };
  //throttle the codeChange update
  const throttledCodeChange = _(codeChangeUpdate, 1000);

  useEffect(() => {
    

    if (!socket) {
      //socket setup
      const socket = io.connect("http://localhost:5000/");
      setSocket(socket);

      socket.on("getRoom", (room) => {
        setCodeRoom(room);
        console.log("Get rooms update", room);
      });

      socket.emit("joinRoom", id);
      //set role var, for privileges check
      socket.on("role", (role) => {
        setRole(role);
      });

      socket.on("codeChange", (code) => {
        setCode(code);
      });

      return () => {
        console.log("Client called for DC");
        socket.close();
      };
    } else {
    }
  }, []);
  return { role, socket, codeRoom, code, throttledCodeChange };
};

export default socketManager;
