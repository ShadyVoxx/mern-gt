import React from 'react'
import { FaUser } from "react-icons/fa";

const EventDisplay = (props) => {
  return (
    <div className=" p-3 border rounded-xl mt-2 hover:bg-gray-50  hover:border-gray-300 ">
        <h1 className='font-semibold pb-1'>{props.event}</h1>
        <p className='px-2 ml-1 border w-fit rounded-full'>{props.time}</p>
        {
            <div className='flex items-center gap-2 p-2'>
            <FaUser className="text-orange-300"/>
            <FaUser className="text-orange-300"/>
            <FaUser className="text-red-300"/>
            <FaUser className="text-red-300"/>
            </div>
        }
      </div>
  )
}

export default EventDisplay