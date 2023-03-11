import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    saves: localStorage.savedMeals ? JSON.parse(localStorage.savedMeals) : []
}

const savesSlice = createSlice({
    name: 'saves',
    initialState,
    reducers: {
        addSaves: (state, action) => {
            state.saves = [...state.saves, action.payload]
            localStorage.savedMeals = JSON.stringify(state.saves)
        },
        removeSaves: (state, action) => {
            state.saves = state.saves.filter(item => item.idMeal != action.payload)
            localStorage.savedMeals = JSON.stringify(state.saves)
        }
    }
})

export const {addSaves, removeSaves} = savesSlice.actions
export default savesSlice.reducer