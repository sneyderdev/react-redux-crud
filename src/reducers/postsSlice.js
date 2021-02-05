import { createSlice, nanoid } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [
    { id: '1', title: 'First Post!', body: 'Hello!' },
    { id: '2', title: 'Second Post!', body: 'World!' },
  ],
  reducers: {
    postCreated: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, body, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
            user: userId,
          },
        };
      },
    },
    postUpdated(state, action) {
      const { id, title, body } = action.payload;
      const existingPost = state.find((post) => post.id === id);

      if (existingPost) {
        existingPost.title = title;
        existingPost.body = body;
      }
    },
    postDeleted(state, action) {
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export const { postCreated, postUpdated, postDeleted } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts;

export const selectPostById = (state, postId) =>
  state.posts.find((post) => post.id === postId);
