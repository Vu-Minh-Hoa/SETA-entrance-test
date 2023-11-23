import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GET_POST_API } from '../constant/common';

export const getPostItems = createAsyncThunk('post/getPostItems', () => {
  return fetch(GET_POST_API)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const initialState = {
  posts: [],
  isLoading: false,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, { payload }) => {
      state.posts = [payload, ...state.posts];
    },
  },
  extraReducers: {
    [getPostItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [getPostItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
