import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "Counter",
    initialState:{
        counter: 100
    }
});

export default slice.reducer;