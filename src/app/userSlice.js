import { createSlice } from "@reduxjs/toolkit";
import { supabase } from "../supabaseClient";
const initialState = {
    user: null
}

async function getuser(){
    await supabase.auth.getUser().then((value) => {
        console.log(value)
    })
}

getuser()
// const { data: { user } } = await supabase.auth.getUser()
// console.log(user)

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