import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      title: "Learn Redux Toolkit",
      category: "Programming",
    },
    {
      id: 2,
      title: "React Hooks Guide",
      category: "Programming",
    },
    {
      id: 3,
      title: "Trip to Manali",
      category: "Travel",
    },
    {
      id: 4,
      title: "Healthy Eating Tips",
      category: "Health",
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;