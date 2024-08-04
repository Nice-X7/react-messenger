import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../Types/types';

type ChatState = {
  message: Message[];
}

const initialState: ChatState = {
  message: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<{ text: string; userId: number }>) => {
      const newMessage: Message = {
        id: state.message.length > 0 ? state.message[state.message.length - 1].id + 1 : 1,
        text: action.payload.text,
        userId: action.payload.userId,
      };
      state.message.push(newMessage);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
