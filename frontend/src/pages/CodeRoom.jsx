import React from "react";
import CodeEditor from "../components/CodeEditor";
import { useParams } from "react-router-dom";
import socketManager from "../manager/socketManager";
import useGetCode from "../manager/useGetCode";

const CodeRoom = () => {
  const { roomId } = useParams();
  const { role, code, throttledCodeChange } = socketManager(roomId);
  const { defaultCode } = useGetCode(roomId);

  return (
    <div>
      <CodeEditor
        role={role}
        onCodeChange={throttledCodeChange}
        code={code || defaultCode}
        roomId={roomId}
      ></CodeEditor>
    </div>
  );
};

export default CodeRoom;
