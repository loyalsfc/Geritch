import { configureStore } from "@reduxjs/toolkit";
import savesReducer from "./savesSlice"

export const store = configureStore({
    reducer: {
        saves: savesReducer
    },
})