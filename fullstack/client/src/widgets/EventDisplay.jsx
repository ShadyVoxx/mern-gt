import React from 'react'
import { FaUser } from "react-icons/fa";

const EventDisplay = (props) => {
  return (
    <div className=" p-3">
        <h1>{props.event}</h1>
        <p>{props.time}</p>
        {
            
            <FaUser className="text-gray-400"/>
            
        }
      </div>
  )
}

export default EventDisplay