import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setMemoEnabled,
  setUseCallbackEnabled,
  setUseMemoEnabled,
  setEvents,
} from "../../store/calendarSlice";

import { resetRenders } from "../../store/renderSlice";

import "./controls.css";


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


export const ToggleControls = () => {
  const dispatch = useDispatch();

  const optimizations = useSelector(
    (state) => state.calendar.optimizations
  );


  const handleReset = () => {
    // Reset calendar to initial frontend data
    dispatch(setEvents(initialPosts));

    // Reset render statistics
    dispatch(resetRenders());
  };


  return (
    <div className="controls-container">

      <div className="experiment-labels">

        <span className="label-highlight">
          React.memo on cards
        </span>

        <span className="label-highlight">
          useCallback for handlers
        </span>

        <span className="label-highlight">
          useMemo for agenda filter
        </span>

      </div>


      <div className="control-group">

        <label className="toggle-item">

          <input
            type="checkbox"
            checked={optimizations.memoEnabled}
            onChange={() =>
              dispatch(
                setMemoEnabled(
                  !optimizations.memoEnabled
                )
              )
            }
          />

          <span>
            <span className="toggle-icon">🧠</span>
            React.memo
          </span>

        </label>


        <label className="toggle-item">

          <input
            type="checkbox"
            checked={optimizations.useCallbackEnabled}
            onChange={() =>
              dispatch(
                setUseCallbackEnabled(
                  !optimizations.useCallbackEnabled
                )
              )
            }
          />

          <span>
            <span className="toggle-icon">🔗</span>
            useCallback
          </span>

        </label>


        <label className="toggle-item">

          <input
            type="checkbox"
            checked={optimizations.useMemoEnabled}
            onChange={() =>
              dispatch(
                setUseMemoEnabled(
                  !optimizations.useMemoEnabled
                )
              )
            }
          />

          <span>
            <span className="toggle-icon">⚡</span>
            useMemo
          </span>

        </label>


        <button
          className="reset-btn"
          onClick={handleReset}
        >
          <span>🔄</span>
          Reset all
        </button>

      </div>

    </div>
  );
};