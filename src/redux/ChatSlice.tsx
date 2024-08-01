import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Message = {
  id: number,
  text: string
}

type Chat = {
    displayChat: boolean
    message: Message[]
}

const initialState: Chat = {
    displayChat: true,
    message: []
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    isDisplayChat(state) {
        state.displayChat = !state.displayChat
    },
    addMessage(state, action: PayloadAction<string>) {
      const newMessage = {
        id: state.message.length,
        text: action.payload
      }
      state.message.push(newMessage)
    }
  },
})

export const { isDisplayChat, addMessage } = chatSlice.actions
export default chatSlice.reducer