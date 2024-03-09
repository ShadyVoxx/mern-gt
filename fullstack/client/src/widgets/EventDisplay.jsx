import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import url from '../Constant';

const EventDisplay = (props) => {
  const { eventName, startTime, endTime, users } = props;

  const data = {
    users: users,
  };
  console.log(users);
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="p-3 border rounded-xl mt-2 hover:bg-gray-50 hover:border-gray-300">
      <h1 className="font-semibold pb-1">{eventName}</h1>
      <p className="px-2 ml-1 border w-fit rounded-full">{startTime}-{endTime}</p>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
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
  );
};

export default EventDisplay;
