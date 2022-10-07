import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    id:1,
    userName:"ilyes",
    email:"ilyes@gmail.com"
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        updateUsername:(state, action)=>{
            state.userName = action.payload;
        },
        updateEmail:(state, action)=>{
            state.email = action.payload;
        }
    }
})

export const {updateUsername,updateEmail} = userSlice.actions;
export default userSlice.reducer;