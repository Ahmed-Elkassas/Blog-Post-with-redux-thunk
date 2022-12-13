import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./reducers/posts-slice";
import { usersReducer } from "./reducers/users-slice";


export const store  = configureStore({
    reducer: {
        posts: postReducer,
        users: usersReducer
    }
})