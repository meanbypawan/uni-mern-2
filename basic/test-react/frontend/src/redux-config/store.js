import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
const store = configureStore({
    reducer:{
        user: UserSlice
    }
});
// user: {isLoggedIn: false, token: null, user:{}}
export default store;