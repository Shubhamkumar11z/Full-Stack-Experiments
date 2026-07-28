import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postslice";
import platformReducer from "../features/platforms/platformslice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    platform: platformReducer,
  },
});