import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setDraggedId } from "../../store/calendarSlice";
import { incrementRender } from "../../store/renderSlice";

import "./Calendar.css";


export const EventCard = React.memo(({ event }) => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(incrementRender(event.id));
  }, [dispatch, event.id]);


  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", event.id);

    dispatch(setDraggedId(event.id));
  };


  const handleDragEnd = () => {
    dispatch(setDraggedId(null));
  };


  return (
    <div
      className="event-card"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <span className="event-title">
        {event.title}
      </span>

      <span className="event-time">
        {event.time}
      </span>
    </div>
  );
});