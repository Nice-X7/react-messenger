import React from "react";
import { Contact } from "../../Types/types";
import { NavLink } from "react-router-dom";

const Contacts: React.FC = () => {
  const contacts: Contact[] = [
    {
      id: 0,
      userId: 0,
      name: "Асвад",
      lastName: "Ясаев",
    },
    {
      id: 1,
      userId: 1,
      name: "Мохьмад",
      lastName: "Хасанов",
    },
    {
      id: 2,
      userId: 2,
      name: "Ислам",
      lastName: "Касумов",
    },
  ];

  return (
    <div>
      {contacts.map((contact) => {
        return (
          <div className="contact" key={contact.id}>
            <NavLink to={`/chat/${contact.userId}`} key={contact.id}>
              {contact.name} {contact.lastName}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
