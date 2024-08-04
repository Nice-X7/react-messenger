import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { useNavigate } from 'react-router-dom';

const Contacts: React.FC = () => {
  const navigate = useNavigate();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  const handleContactClick = (userId: number) => {
    navigate(`/chat/${userId}`);
  };

  return (
    <div>
      {contacts.map((contact) => (
        <div
          className="contact"
          key={contact.id}
          onClick={() => handleContactClick(contact.userId)}
        >
          {contact.name} {contact.lastName}
        </div>
      ))}
    </div>
  );
};

export default Contacts;