/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await window.fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const data = await response.json();
  return data;
});

export const createPost = createAsyncThunk(
  'posts/createPost',
  async ({ title, body, userId }) => {
    const response = await window.fetch(
      'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        body: JSON.stringify({
          title,
          body,
          userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    const data = await response.json();
    return data;
  }
);

export const editPost = createAsyncThunk(
  'posts/editPost',
  async ({ id, title, body }) => {
    const response = await window.fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify({
          title,
          body,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    const data = await response.json();
    return data;
  }
);

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  await window.fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });
  return id;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
    id: 100,
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      if (!localStorage.getItem('GET')) {
        localStorage.setItem('GET', 1);
      } else {
        const counter = localStorage.getItem('GET');
        const newCounter = Number(counter) + 1;
        localStorage.setItem('GET', newCounter);
      }

      state.status = 'succeeded';
      state.data = state.data.concat(action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [createPost.fulfilled]: (state, action) => {
      if (!localStorage.getItem('POST')) {
        localStorage.setItem('POST', 1);
      } else {
        const counter = localStorage.getItem('POST');
        const newCounter = Number(counter) + 1;
        localStorage.setItem('POST', newCounter);
      }

      state.id += 1;

      const { title, body, userId } = action.payload;
      state.data.unshift({
        id: state.id,
        title,
        body,
        userId,
      });
    },
    [editPost.fulfilled]: (state, action) => {
      if (!localStorage.getItem('PUT')) {
        localStorage.setItem('PUT', 1);
      } else {
        const counter = localStorage.getItem('PUT');
        const newCounter = Number(counter) + 1;
        localStorage.setItem('PUT', newCounter);
      }

      const { id, title, body } = action.payload;
      const existingPost = state.data.find((post) => post.id === id);

      if (existingPost) {
        existingPost.title = title;
        existingPost.body = body;
      }
    },
    [deletePost.fulfilled]: (state, action) => {
      if (!localStorage.getItem('DELETE')) {
        localStorage.setItem('DELETE', 1);
      } else {
        const counter = localStorage.getItem('DELETE');
        const newCounter = Number(counter) + 1;
        localStorage.setItem('DELETE', newCounter);
      }
      return {
        ...state,
        data: state.data.filter((post) => post.id !== action.payload),
      };
    },
  },
});

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts.data;

export const selectPostById = (state, postId) =>
  state.posts.data.find((post) => post.id.toString() === postId);
