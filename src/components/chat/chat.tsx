import React, { useEffect, useRef, useState } from "react";
import { RootState, AppDispatch } from "../../redux";
import { addMessage } from "../../redux/ChatSlice";
import { useDispatch, useSelector } from "react-redux";

const Chat: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const messages = useSelector((state: RootState) => state.chat.message);
  const [messageText, setMessageText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const messengerRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (): void => {
    if (messageText.trim() !== "") {
      dispatch(addMessage(messageText));
      setMessageText("");

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (messengerRef.current) {
      messengerRef.current.scrollTop = messengerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat">
      <div className="user_title">
        <h2>Пользователь</h2>
      </div>
      <div className="messages">
        <div className="conversation">
          <div className="messenger" ref={messengerRef}>
            {messages.map((msg) => (
              <div className="message" key={msg.id}>
                {msg.text}
              </div>
            ))}
          </div>
          <input
            type="text"
            className="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
          <button className="send" onClick={handleSendMessage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

