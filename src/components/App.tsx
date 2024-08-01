import React from "react";
import Navbar from "./navbar/navbar";
import UserChat from "./chat/userChat";
import { Route, Routes } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/chat/:userId" element={<UserChat />} />
      </Routes>
    </div>
  );
}