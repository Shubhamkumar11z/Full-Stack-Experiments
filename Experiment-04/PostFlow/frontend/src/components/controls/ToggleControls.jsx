import React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  setMemoEnabled,
  setUseCallbackEnabled,
  setUseMemoEnabled,
} from "../../store/calendarSlice";

import { resetRenders } from "../../store/renderSlice";

import { resetPosts } from "../../api";

import "./Controls.css";


export const ToggleControls = () => {
  const dispatch = useDispatch();

  const optimizations = useSelector(
    (state) => state.calendar.optimizations
  );


  const handleReset = async () => {
    try {
      await resetPosts();

      dispatch(resetRenders());

      // Reload posts
      window.location.reload();

    } catch (error) {
      console.error("Failed to reset posts:", error);
    }
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
                setMemoEnabled(!optimizations.memoEnabled)
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