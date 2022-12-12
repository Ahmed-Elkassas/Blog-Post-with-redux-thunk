import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./reducers/posts-slice";


export const store  = configureStore({
    reducer: {
        posts: postReducer
    }
})