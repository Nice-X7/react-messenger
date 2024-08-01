import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import Chat from "./chat";
import "../../styles/chat.scss";

const UserChat: React.FC = () => {
  const isDisplayChat = useSelector(
    (state: RootState) => state.chat.displayChat
  );

  return (
    <div className="user_chat">
      {isDisplayChat ? (
        <Chat />
      ) : (
        <div className="select_user">← Select User</div>
      )}
    </div>
  );
};

export default UserChat;