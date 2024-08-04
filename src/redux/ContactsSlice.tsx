import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../Types/types';

type ContactsState = {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<{ name: string; lastName: string }>) => {
      const newId = state.contacts.length > 0 ? state.contacts[state.contacts.length - 1].id + 1 : 1;
      const newUserId = state.contacts.length > 0 ? state.contacts[state.contacts.length - 1].userId + 1 : 1;
      const newContact: Contact = {
        id: newId,
        userId: newUserId,
        name: action.payload.name,
        lastName: action.payload.lastName,
      };
      state.contacts.push(newContact);
    },
  },
});

export const { addContact } = contactsSlice.actions;
export default contactsSlice.reducer;
