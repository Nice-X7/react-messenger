import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Contact = {
  id: number;
  name: string;
  lastName: string;
};

type ContactsState = {
  contacts: Contact[];
};

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<{ name: string; lastName: string }>) => {
      const newContact: Contact = {
        id: state.contacts.length,
        name: action.payload.name,
        lastName: action.payload.lastName,
      };
      state.contacts.push(newContact);
    },
  },
});

export const { addContact } = contactsSlice.actions;

export default contactsSlice.reducer;