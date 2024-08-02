import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './ChatSlice'
import collapseReducer from './CollapseSlice';
import contactsReducer from './ContactsSlice';

export const store = configureStore({
  reducer: {
    collapse: collapseReducer,
    chat: chatReducer,
    contacts: contactsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;