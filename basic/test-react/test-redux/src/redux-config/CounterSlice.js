import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "Counter",
    initialState:{
        counter: 100
    },
    reducers:{
        incrementCounter: (state,action)=>{ 
            state.counter = state.counter+1;
        },
        decrementCounter: (state,action)=>{
            state.counter = state.counter - 1;
        }
    }
});
export const {incrementCounter, decrementCounter}  = slice.actions;
export default slice.reducer;