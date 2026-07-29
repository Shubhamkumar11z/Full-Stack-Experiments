import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  byId: {},
  allIds: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    addPost: {
      reducer(state, action) {
        const post = action.payload;
        state.byId[post.id] = post;
        state.allIds.push(post.id);
      },

      prepare(text, platform, status = "draft") {
        return {
          payload: {
            id: nanoid(),
            text,
            platform,
            status,
            createdAt: Date.now(),
          },
        };
      },
    },

    updatePost(state, action) {
      const { id, text } = action.payload;

      if (state.byId[id]) {
        state.byId[id].text = text;
      }
    },

    publishPost(state, action) {
      const id = action.payload;

      if (state.byId[id]) {
        state.byId[id].status = "published";
      }
    },

    deletePost(state, action) {
      const id = action.payload;

      delete state.byId[id];

      state.allIds = state.allIds.filter((item) => item !== id);
    },

    clearPosts(state) {
      state.byId = {};
      state.allIds = [];
    },
  },
});

export const {
  addPost,
  updatePost,
  publishPost,
  deletePost,
  clearPosts,
} = postSlice.actions;

export default postSlice.reducer;