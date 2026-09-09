import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { EventCard } from "./EventCard";

import {
  setDragOverDay,
  moveEvent,
  resetDragState,
} from "../../store/calendarSlice";

import { incrementRender } from "../../store/renderSlice";

import { updatePostDay } from "../../api";

import "./Calendar.css";


export const DayCell = React.memo(
  ({ dayIndex, time, events, dragOver }) => {
    const dispatch = useDispatch();

    useEffect(() => {
      if (events.length > 0) {
        events.forEach((event) => {
          dispatch(incrementRender(event.id));
        });
      }
    }, [events, dispatch]);


    const handleDragOver = (e) => {
      e.preventDefault();

      dispatch(setDragOverDay(dayIndex));
    };


    const handleDragLeave = (e) => {
      e.preventDefault();

      dispatch(setDragOverDay(null));
    };


    const handleDrop = async (e) => {
      e.preventDefault();

      const eventId = e.dataTransfer.getData("text/plain");

      if (eventId) {
        try {
          await updatePostDay(eventId, dayIndex);

          dispatch(
            moveEvent({
              eventId,
              targetDay: dayIndex,
            })
          );
        } catch (error) {
          console.error("Failed to update post day:", error);
        }
      }

      dispatch(resetDragState());
    };


    return (
      <div
        className={`day-cell ${dragOver ? "drag-over" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}
      </div>
    );
  }
);