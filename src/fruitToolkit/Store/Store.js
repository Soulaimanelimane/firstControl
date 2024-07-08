import { configureStore } from "@reduxjs/toolkit";
import fruitSlice from "../feature/fruitSlice";

 const Store = configureStore({
    reducer:{
        fruits:fruitSlice
    }
})

export default Store 