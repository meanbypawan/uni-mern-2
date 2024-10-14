import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "Wishing",
    initialState:{
        m1: "Good Morning",
        m2: "Good Evening",
        m3: "Good Afternoon"
    }
});

export default slice.reducer;