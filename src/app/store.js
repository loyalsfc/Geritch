import { configureStore } from "@reduxjs/toolkit";
import savesReducer from "./savesSlice"
import userReducer from "./userSlice"

export const store = configureStore({
    reducer: {
        saves: savesReducer,
        user: userReducer
    },
})