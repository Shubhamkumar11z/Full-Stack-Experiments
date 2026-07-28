import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",

  initialState,

  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post.id !== action.payload
      );
    },

    updatePost: (state, action) => {
      const { id, text } = action.payload;

      const post = state.posts.find((p) => p.id === id);

      if (post) {
        post.text = text;
      }
    },
  },
});

export const {
  addPost,
  deletePost,
  updatePost,
} = postSlice.actions;

export default postSlice.reducer;