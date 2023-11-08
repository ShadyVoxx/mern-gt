import React from "react";

const EventMenu = ({ selectDate }) => {
  return (
    <div className="h-96 w-96 sm:px-5">
      <h1 className="font-semibold">
        Schedule for {selectDate?.toDate().toDateString()}
      </h1>
      <p className="text-gray-400">No meetings for today.</p>
    </div>
  );
};

export default EventMenu;
