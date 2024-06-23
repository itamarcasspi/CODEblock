import { useState } from "react";
import Lobby from "../src/pages/Lobby";
import CodeRoom from "../src/pages/CodeRoom";
import { Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/coderoom/:roomId" element={<CodeRoom/>} />
        <Route path="/" element={<Lobby/>} />
      </Routes>
    </div>
  );
}

export default App;
