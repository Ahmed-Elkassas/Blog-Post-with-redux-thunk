import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(POSTS_URL);
    return response.data;
})

export const updatePost = createAsyncThunk('post/updatePost', async (singlePost) => {
  const {id} = singlePost;
  const response = await axios.put(`${POSTS_URL}/${id}`, singlePost);
  return response.data
})

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addNewPost: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, body, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
            userId,
            date: new Date().toISOString(),
          },
        };
      },
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';   
    }).addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), {minutes: min++}).toISOString()
          return post
        })
        state.posts = state.posts.concat(loadedPosts)
    }).addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
    }).addCase(updatePost.fulfilled, (state, action) => {
      if(!action.payload?.id) {
        console.log('Update could not complete!!')
        return 
      }
      const {id} = action.payload;
      action.payload.date = new Date().toISOString();
      const posts = state.posts.filter(post => post.id !== id);
      state.posts = [...posts, action.payload];
    })
  }
});

export const getAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const selectPostById = (state, postId) =>
    state.posts.posts.find(post => post.id === postId);

export const { addNewPost } = postSlice.actions;

export const postReducer = postSlice.reducer;
