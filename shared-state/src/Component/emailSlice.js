import {createSlice} from "@reduxjs/toolkit"
const emailSlice = createSlice({
  name:"email",
  initialState:{
    emails: [],
    newEmail: '',
  },
  reducers: {
    addEmail: (state,action)=>{
     state.emails.push(action.payload)
    },
    setNewEmail:(state,action)=>{
      state.newEmail = (action.payload)
    }

    
  }
}) 

export const {addEmail, setNewEmail}=emailSlice.actions
export default emailSlice.reducer