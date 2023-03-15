import { createSlice } from "@reduxjs/toolkit";
import { supabase } from "../supabaseClient";
import {user} from './userSlice'

const { data, error } = await supabase
  .from('saves')
  .select()
  .eq('user_id', user?.id)


const initialState = {
    saves: data
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
    }
})

export const {addSaves, removeSaves} = savesSlice.actions
export default savesSlice.reducer