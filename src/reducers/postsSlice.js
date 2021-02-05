import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [
    { id: '1', title: 'First Post!', body: 'Hello!' },
    { id: '2', title: 'Second Post!', body: 'World!' },
  ],
  reducers: {
    postCreated(state, action) {
      state.push(action.payload);
    },
    postUpdated(state, action) {
      const { id, title, body } = action.payload;
      const existingPost = state.find((post) => post.id === id);

      if (existingPost) {
        existingPost.title = title;
        existingPost.body = body;
      }
    },
  },
});

export const { postCreated, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
