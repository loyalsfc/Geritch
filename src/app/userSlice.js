import { createSlice } from "@reduxjs/toolkit";
import { supabase } from "../supabaseClient";
const initialState = {
    user: null
}

const { data: { user } } = await supabase.auth.getUser()
console.log(user)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user  = action.payload
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer