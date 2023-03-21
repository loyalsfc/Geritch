import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../supabaseClient";

export const getSaveMeal = createAsyncThunk('saves/getSaveMeal', async (id) => {
    return await supabase
        .from('saves')
        .select()
        .eq('user_id', id)
})

const initialState = {
    saves: []
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
            state.saves = state.saves.filter(item => item.id != action.payload)
            localStorage.savedMeals = JSON.stringify(state.saves)
        }
    },
    extraReducers: {
        [getSaveMeal.fulfilled]: (state, action) => {
            state.saves = action.payload.data
        }
    }
})

export const {addSaves, removeSaves} = savesSlice.actions
export default savesSlice.reducer