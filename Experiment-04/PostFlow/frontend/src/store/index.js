import { configureStore } from '@reduxjs/toolkit'
import calendarReducer from './calendarSlice'
import renderReducer from './renderSlice'

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    render: renderReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})