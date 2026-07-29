import { createSelector } from "@reduxjs/toolkit";

const selectPostState = (state) => state.posts;

export const selectAllPosts = createSelector(
  [selectPostState],
  (posts) => posts.allIds.map((id) => posts.byId[id])
);

export const selectDrafts = createSelector(
  [selectAllPosts],
  (posts) => posts.filter((post) => post.status === "draft")
);

export const selectPublishedPosts = createSelector(
  [selectAllPosts],
  (posts) => posts.filter((post) => post.status === "published")
);

export const selectDraftCount = createSelector(
  [selectDrafts],
  (drafts) => drafts.length
);

export const selectPublishedCount = createSelector(
  [selectPublishedPosts],
  (posts) => posts.length
);