import { createSlice } from "@reduxjs/toolkit";

const ChatSlice=createSlice({
  name:"chat",
  initialState: {
    messages: [],
   currentUser: null,
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setNewMessages: (state, action) => {
      state.newMessage = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  }
})
export const { setNewMessages, addMessage, setCurrentUser } = ChatSlice.actions;
export default ChatSlice.reducer;