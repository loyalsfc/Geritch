import { createSlice } from "@reduxjs/toolkit";
import { supabase } from "../supabaseClient";

const { data: { user } } = await supabase.auth.getUser()

const initialState = {
    user: user
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user  = action.payload
        }
    }
})

export {user}
export const {setUser} = userSlice.actions
export default userSlice.reducer