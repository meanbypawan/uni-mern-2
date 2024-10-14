import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "MessageSlice",
    initialState:{
        message: "Hello Students.."
    }
});

export default slice.reducer;