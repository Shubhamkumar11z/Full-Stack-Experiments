import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  events: [],

  loading: false,

  error: null,

  dragState: {
    draggedId: null,
    dragOverDay: null,
  },

  optimizations: {
    memoEnabled: true,
    useCallbackEnabled: true,
    useMemoEnabled: true,
  },
};


const calendarSlice = createSlice({
  name: "calendar",

  initialState,

  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    moveEvent: (state, action) => {
      const { eventId, targetDay } = action.payload;

      const event = state.events.find(
        (e) => e.id === eventId
      );

      if (event) {
        event.day = targetDay;
      }
    },

    setDraggedId: (state, action) => {
      state.dragState.draggedId = action.payload;
    },

    setDragOverDay: (state, action) => {
      state.dragState.dragOverDay = action.payload;
    },

    resetDragState: (state) => {
      state.dragState.draggedId = null;
      state.dragState.dragOverDay = null;
    },

    setMemoEnabled: (state, action) => {
      state.optimizations.memoEnabled = action.payload;
    },

    setUseCallbackEnabled: (state, action) => {
      state.optimizations.useCallbackEnabled = action.payload;
    },

    setUseMemoEnabled: (state, action) => {
      state.optimizations.useMemoEnabled = action.payload;
    },
  },
});


export const {
  setEvents,
  setLoading,
  setError,
  moveEvent,
  setDraggedId,
  setDragOverDay,
  resetDragState,
  setMemoEnabled,
  setUseCallbackEnabled,
  setUseMemoEnabled,
} = calendarSlice.actions;


export default calendarSlice.reducer;