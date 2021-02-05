/* eslint-disable no-param-reassign */
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await window.fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const data = await response.json();
  return data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    postCreated: {
      reducer(state, action) {
        state.data.unshift(action.payload);
      },
      prepare(title, body, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
            userId,
          },
        };
      },
    },
    postUpdated(state, action) {
      const { id, title, body } = action.payload;
      const existingPost = state.data.find((post) => post.id === id);

      if (existingPost) {
        existingPost.title = title;
        existingPost.body = body;
      }
    },
    postDeleted(state, action) {
      return state.data.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = state.data.concat(action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { postCreated, postUpdated, postDeleted } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts.data;

export const selectPostById = (state, postId) =>
  state.posts.data.find((post) => post.id.toString() === postId);
