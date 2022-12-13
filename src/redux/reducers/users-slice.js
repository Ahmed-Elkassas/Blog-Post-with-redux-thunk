import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, name: 'Ahmed' },
    {id: 2, name: 'Ali' },
    {id: 3, name: 'Sayed' },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const getAllUsers  = state => state.users;

export const usersReducer = usersSlice.reducer;