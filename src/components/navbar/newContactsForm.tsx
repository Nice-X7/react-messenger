import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/ContactsSlice';

const NewContactsForm: React.FC<{onClose: () => void}> = ({ onClose }) => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && lastName) {
          dispatch(addContact({ name, lastName }));
          onClose();
        }
      };

    return (
        <div className="new-contact-form">
          <form onSubmit={handleSubmit}>
            <label>
              Имя:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Фамилия:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <button type="submit">Создать контакт</button>
            <button type="button" onClick={onClose}>Отмена</button>
          </form>
        </div>
      );
    };

export default NewContactsForm
