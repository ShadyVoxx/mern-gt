import React from "react";
import EventDisplay from "./EventDisplay";
import url from "../Constant";
import { useState, useEffect} from "react";
import Noevents from '../assets/noevent_illustrat.png';

// const EventDisp = [
//   {event: 'Event1', time:"9:30-10:30",noofusers: "4"},
//   {event: 'Event2', time:"10:30-11:30",noofusers: "3"},
//   {event: 'Event3', time:"11:30-12:30",noofusers: "4"},
//   {event: 'Event3', time:"11:30-12:30",noofusers: "4"}

// ]

const EventMenu = (props) => {
  const {selectDate} = props;
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchDetails = async () =>{
      try{
        const response = await fetch(`${url}/date/eventdetails`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({date: selectDate})
        });

        if (!response.status) {
          throw new Error('Failed to fetch user positions');
        }

        const data = await response.json();
        setEvents(data);

      }
      catch (error){
        console.error(error);
        console.log(error);
      }
      }
      fetchDetails();

  },[selectDate]);
  return (
    <div className="w-96 sm:px-5 p-5 sm:p-0 h-fit">
      <h1 className="font-semibold">
        Schedule for {selectDate?.toDate().toDateString()}
      </h1>
      <div className=" flex flex-col p-10 w-full">
      <img className="justify-center opacity-50" src={(events.length===0 && Noevents)}/>
      <p className="">{(events.length===0 && "No events for today.")}</p>
      </div>
      {
        events.map((event, index) => {
          return (
            <EventDisplay
              key={index}
              eventName={event.eventName}
              startTime={event.startTime}
              endTime={event.endTime}
              users={event.users}
            />
          );
        })
      }
    </div>
  );
};

export default EventMenu;
