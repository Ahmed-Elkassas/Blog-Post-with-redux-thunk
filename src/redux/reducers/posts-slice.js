import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

const postSlice = createSlice({
    name: 'posts',
    initialState, 
    reducers: {

    }
});

export const postReducer = postSlice.reducer;