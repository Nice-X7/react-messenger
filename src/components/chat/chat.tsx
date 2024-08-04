import React, { useRef, useState } from 'react';
import { RootState, AppDispatch } from '../../redux';
import { addMessage } from '../../redux/ChatSlice';
import { useDispatch, useSelector } from 'react-redux';

type ChatProps = {
  userId: number;
};

const Chat: React.FC<ChatProps> = ({ userId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const messages = useSelector((state: RootState) => state.chat.message.filter(msg => msg.userId === userId));
  const contact = useSelector((state: RootState) => state.contacts.contacts.find(contact => contact.userId === userId));
  const [messageText, setMessageText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = (): void => {
    if (messageText.trim() !== '') {
      dispatch(addMessage({ text: messageText, userId }));
      setMessageText('');

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!contact) {
    return <div className='select_user'>Контакт не найден</div>;
  }

  return (
    <div className="chat">
      <div className="user_title">
        <h2>{contact.name} {contact.lastName}</h2>
      </div>
      <div className="messages">
        <div className="conversation">
          <div className="messenger">
            {messages.map((msg) => (
              <span className="message" key={msg.id}>
                {msg.text}
              </span>
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

