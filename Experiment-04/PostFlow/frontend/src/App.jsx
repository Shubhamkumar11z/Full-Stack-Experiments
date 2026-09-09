import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setEvents,
  setLoading,
  setError,
} from "./store/calendarSlice";

import { CalendarGrid } from "./components/calendar/CalendarGrid";
import { ToggleControls } from "./components/controls/ToggleControls";
import LiveClock from "./components/clock/LiveClock";
import { RenderMonitor } from "./components/Monitor/RenderMonitor";

import "./App.css";


const initialPosts = [
  {
    id: "e1",
    title: "Design review",
    time: "10:00",
    day: 0,
  },
  {
    id: "e2",
    title: "Ship v2.3",
    time: "16:00",
    day: 1,
  },
  {
    id: "e3",
    title: "1:1 with Sam",
    time: "09:30",
    day: 2,
  },
  {
    id: "e4",
    title: "Write proposal",
    time: "13:00",
    day: 3,
  },
  {
    id: "e5",
    title: "Sprint planning",
    time: "15:00",
    day: 4,
  },
  {
    id: "e6",
    title: "Client demo",
    time: "10:00",
    day: 5,
  },
  {
    id: "e7",
    title: "Grocery run",
    time: "11:00",
    day: 6,
  },
];


function App() {
  const dispatch = useDispatch();

  const loading = useSelector(
    (state) => state.calendar.loading
  );

  const error = useSelector(
    (state) => state.calendar.error
  );


  useEffect(() => {
    try {
      dispatch(setLoading(true));

      // Load calendar data locally
      dispatch(setEvents(initialPosts));

      dispatch(setError(null));
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);


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
          useCallback, and useMemo do to re-renders.
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