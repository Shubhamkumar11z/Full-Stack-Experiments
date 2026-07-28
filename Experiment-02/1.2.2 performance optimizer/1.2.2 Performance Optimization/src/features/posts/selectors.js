import { createSelector } from "@reduxjs/toolkit";

// Basic selector
export const selectPosts = (state) => state.posts.posts;

// Memoized selector
export const selectProgrammingPosts = createSelector(
  [selectPosts],
  (posts) => {
    console.log("Filtering programming posts...");
    return posts.filter(
      (post) => post.category === "Programming"
    );
  }
);