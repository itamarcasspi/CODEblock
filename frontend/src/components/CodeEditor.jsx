import React from "react";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";
import Editor, { loader } from "@monaco-editor/react";
import useSendCode from "../manager/useSendCode.js";



function CodeEditor({ role, onCodeChange, code, roomId}) {
  //get send code hook
  const { throttledSendCode } = useSendCode();
  //mentor flag for writing privileges
  const isMentor = role == "mentor" ? true : false;

  // console.log(defaultCode);
  //Load a custom theme for the monaco editor, based on the visual studio dark mode theme.
  loader.init().then((monaco) => {
    monaco.editor.defineTheme("myTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#111827",
        "editor.text": "white",
      },
    });
  });
  //Editor text handler function
  const handleEditorChange = (value) => {
    console.log("CodeEditor: code is being changed");
    onCodeChange(value);
    //send code to server router

    throttledSendCode(value, roomId);
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-white to-gray-300 shadow-md rounded-lg m-2 p-1">
        <h2 className="text-xl font-bold text-black">
          CodeRoom number {roomId}. Logged in as {role}
        </h2>
      </div>
      <div
        className="relative bg-gray-900 text-white p-4 rounded-lg shadow-md sm:h-[450px] md:h-[550px] lg:h-[650px]
    sm:w-[650px] md:w-[750px] lg:w-[850px]"
      >
        <Editor
          height="100%"
          width="100%"
          theme="myTheme"
          defaultLanguage="javascript"
          value={code}
          onChange={handleEditorChange}
          options={{
            readOnly: isMentor,
          }}
        ></Editor>
      </div>
    </div>
  );
}
export default CodeEditor;
