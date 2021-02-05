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
  },
});

export const { postCreated } = postsSlice.actions;

export default postsSlice.reducer;
