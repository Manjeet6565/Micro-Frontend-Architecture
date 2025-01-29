// shared-state/store.js


import emailReducer from "../Component/emailSlice"
import { configureStore } from '@reduxjs/toolkit';
import chatReducer from "../Component/ChatSlice"
// Create store
const store = configureStore({
  reducer: {
    email: emailReducer,
    chat: chatReducer, 
  },

}

)
export default store;