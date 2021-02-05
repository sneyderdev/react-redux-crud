import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await window.fetch(
    'https://jsonplaceholder.typicode.com/users'
  );
  const data = await response.json();
  return data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => action.payload,
  },
});

export default usersSlice.reducer;
