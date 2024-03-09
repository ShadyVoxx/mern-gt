import React from 'react'
import EventDisplay from '../widgets/EventDisplay'

const EventDisp = [
  {event: 'Event1', time:"9:30-10:30",noofusers: "4"},
  {event: 'Event2', time:"10:30-11:30",noofusers: "3"},
  {event: 'Event3', time:"11:30-12:30",noofusers: "4"},
]

const RegisteredEvents = (props) => {
  const {events} = props;
  console.log(events);
  return (
    <div className="bg-white p-3 shadow-md rounded-lg mt-5 border-2 h-fit">

    <div className="grid grid-cols-2">
        <div>
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                <span className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
                </span>
                <span className="tracking-wide">Registered events</span>
            </div>
            <ul className="list-inside space-y-2">
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
            </ul>
        </div>

    </div>
  
</div>
  )
}

export default RegisteredEvents