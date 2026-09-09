import React from "react";
import { useSelector } from "react-redux";
import { DayCell } from "./DayCell";
import "./Calendar.css";

const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export const CalendarGrid = React.memo(() => {
  const events = useSelector((state) => state.calendar.events);

  const dragOverDay = useSelector(
    (state) => state.calendar.dragState.dragOverDay
  );

  const filteredEvents = React.useMemo(() => {
    return events;
  }, [events]);

  const getEventsForDay = (dayIndex) => {
    return filteredEvents.filter((event) => event.day === dayIndex);
  };

  const getEventsForTime = (dayEvents, time) => {
    return dayEvents.filter((event) => event.time === time);
  };

  return (
    <div className="calendar-grid">
      <div className="time-label"></div>

      {dayNames.map((day) => (
        <div key={day} className="day-header">
          {day}
        </div>
      ))}

      {timeSlots.map((time) => (
        <React.Fragment key={time}>
          <div className="time-label">
            {time}
          </div>

          {dayNames.map((_, dayIndex) => {
            const dayEvents = getEventsForDay(dayIndex);
            const hourEvents = getEventsForTime(dayEvents, time);

            return (
              <DayCell
                key={`${time}-${dayIndex}`}
                dayIndex={dayIndex}
                time={time}
                events={hourEvents}
                dragOver={dragOverDay === dayIndex}
              />
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
});