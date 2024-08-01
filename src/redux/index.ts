import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './ChatSlice'
import collapseReducer from './CollapseSlice';

export const store = configureStore({
  reducer: {
    collapse: collapseReducer,
    chat: chatReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;