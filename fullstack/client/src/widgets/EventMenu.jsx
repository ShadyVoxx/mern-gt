import React from "react";
import EventDisplay from "./EventDisplay";

const EventDisp = [
  {event: 'Event1', time:"9:30-10:30",noofusers: "4"},
  {event: 'Event2', time:"10:30-11:30",noofusers: "3"},
  {event: 'Event3', time:"11:30-12:30",noofusers: "4"},
  {event: 'Event3', time:"11:30-12:30",noofusers: "4"}

]

const EventMenu = ({ selectDate }) => {
  return (
    <div className="w-96 sm:px-5 p-5 sm:p-0 h-fit">
      <h1 className="font-semibold">
        Schedule for {selectDate?.toDate().toDateString()}
      </h1>
      <p className="text-gray-400">No meetings for today.</p>
      {
        EventDisp.map((event, index) => {
          return (
            <EventDisplay
              key={index}
              event={event.event}
              time={event.time}
              noofusers={event.noofusers}
            />
          );
        })
      }
    </div>
  );
};

export default EventMenu;
