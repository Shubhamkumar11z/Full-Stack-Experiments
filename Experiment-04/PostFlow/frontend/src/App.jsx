import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "./api";

import {
  setEvents,
  setLoading,
  setError,
} from "./store/calendarSlice";

import { CalendarGrid } from "./components/calendar/CalendarGrid";
import { ToggleControls } from "./components/Controls/ToggleControls";
import LiveClock from "./components/clock/LiveClock";
// Keep this if RenderMonitor.jsx exists
import { RenderMonitor } from "./components/Monitor/RenderMonitor";

import "./App.css";


function App() {
  const dispatch = useDispatch();

  const events = useSelector(
    (state) => state.calendar.events
  );

  const loading = useSelector(
    (state) => state.calendar.loading
  );

  const error = useSelector(
    (state) => state.calendar.error
  );


  useEffect(() => {
    loadPosts();
  }, []);


  const loadPosts = async () => {
    dispatch(setLoading(true));

    try {
      const posts = await fetchPosts();

      dispatch(setEvents(posts));
      dispatch(setError(null));

    } catch (err) {
      dispatch(setError(err.message));

    } finally {
      dispatch(setLoading(false));
    }
  };


  if (loading) {
    return (
      <div className="loading">
        Loading calendar...
      </div>
    );
  }


  if (error) {
    return (
      <div className="error">
        Error: {error}
      </div>
    );
  }


  return (
    <div className="app">

      <header className="app-header">

        <div className="header-left">

          <h1>
            <span className="postflow-logo">
              📅 PostFlow
            </span>

            <span className="subtitle">
              Interactive Calendar
            </span>
          </h1>

        </div>

        <LiveClock />

      </header>


      <div className="experiment-info">
        <p>
          Drag events between days, then flip the switches
          below to see, in real time, what React.memo,
          useCallback, and useMemo actually do to
          re-renders.
        </p>
      </div>


      <ToggleControls />


      <div className="calendar-wrapper">
        <CalendarGrid />
      </div>


      <div className="footer-section">
        <RenderMonitor />
      </div>

    </div>
  );
}


export default App;