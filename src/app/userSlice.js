import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../supabaseClient";

export const getUserDetail = createAsyncThunk('user/getUserDetail', async() => {
    return await supabase.auth.getUser()
});

const initialState = {
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user  = action.payload
        }
    },
    extraReducers: {
        [getUserDetail.fulfilled]: (state, action) => {
            state.user = action.payload?.data?.user
        }
    }
})

export {initialState}
export const {setUser} = userSlice.actions
export default userSlice.reducer