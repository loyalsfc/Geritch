import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    saves: []
}

const savesSlice = createSlice({
    name: 'saves',
    initialState,
    reducers: {
        addSaves: (state, action) => {
            state.saves = [...state.saves, action.payload]
        },
        removeSaves: (state, payload) => {
            state.saves = state.filter(item => item.id !== payload.id)
        }
    }
})

export const {addSaves, removeSaves} = savesSlice.actions
export default savesSlice.reducer