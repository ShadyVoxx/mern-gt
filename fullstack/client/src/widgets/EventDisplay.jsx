import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import url from '../Constant';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const EventDisplay = (props) => {
  const { eventName, startTime, endTime, users } = props;

  const data = {
    users: users,
  };
  console.log(users);
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`${url}/userpositions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user positions');
        }

        const userData = await response.json();
        setUserDetails(userData.userPositions);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch user positions');
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [users]);

  return (
    <div className="p-3 border-2 border-gray-300 rounded-xl mt-2 hover:bg-gray-50 hover:border-gray-400" onClick={handleOpen}>
      <h1 className="font-semibold pb-1">{eventName}</h1>
      <p className="px-2 ml-1 border-2 border-gray-300 w-fit rounded-lg">{startTime}-{endTime}</p>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className='p-3'>
      {!loading && !error && userDetails.map((userPosition, index) => (
        <FaUser 
          key={index}
          className={
            userPosition === 'Experienced Photographer'
              ? 'text-orange-300'
              : 'text-red-300' 
          }
        />
      ))}
    </div>
    <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Confirm register to event?</DialogHeader>
        <DialogBody>
          By clicking confirm you accept to the terms and conditions of the GT event coverage policy and affirm to abide by the rules
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default EventDisplay;
