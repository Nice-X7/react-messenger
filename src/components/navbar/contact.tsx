import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

const Contacts: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <>
      {contacts.map((contact) => {
        return (
          <div className="contact" key={contact.id}>
            {contact.name} {contact.lastName}
          </div>
        );
      })}
    </>
  );
};

export default Contacts;
