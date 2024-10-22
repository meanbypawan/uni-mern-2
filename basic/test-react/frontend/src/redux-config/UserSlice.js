import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "UserSlice",
    initialState:{
        isLoggedIn: false,
        token: null,
        user: {}
    },
    reducers:{
        setUser: (state,action)=>{
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        removeUser: (state,action)=>{
            state.isLoggedIn = false;
            state.token = null;
            state.user = {}
        }
    }
});
export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;