import React from 'react';
import Chat from './chat';
import '../../styles/chat.scss';
import { useParams } from 'react-router-dom';

const UserChat: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  return (
    <div className="user_chat">
      <Chat userId={parseInt(userId!)} />
    </div>
  );
};

export default UserChat;