import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  renderCounts: {},
  totalRenders: 0,
};

const renderSlice = createSlice({
  name: "render",

  initialState,

  reducers: {
    incrementRender: (state, action) => {
      const id = action.payload;

      state.renderCounts[id] =
        (state.renderCounts[id] || 0) + 1;

      state.totalRenders += 1;
    },

    resetRenders: (state) => {
      state.renderCounts = {};
      state.totalRenders = 0;
    },
  },
});

export const {
  incrementRender,
  resetRenders,
} = renderSlice.actions;

export default renderSlice.reducer;