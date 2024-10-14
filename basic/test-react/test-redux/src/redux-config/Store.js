import { configureStore } from "@reduxjs/toolkit";
import MessageSlice from "./MessageSlice";
import WishingSlice from "./WishingMessage";
import CounterSlice from "./CounterSlice";
const store = configureStore({
    reducer:{
        DataMessage: MessageSlice,
        WishingMessage: WishingSlice,
        Counter: CounterSlice
    }
});
/* {
    DataMessage: {
        message: "Hello Students.."
    },
    WishingMessage:{
      m1: "GM",
      m2: "GE",
      m3: "GA"
    },
    Counter:{counter: 100}
} */   

export default store;