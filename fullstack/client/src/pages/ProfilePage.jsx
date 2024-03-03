import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import url from '../Constant';
import Header from '../components/Header';
import ProfilePicWidget from '../widgets/ProfilePicWidget';
import AboutWidget from '../widgets/AboutWidget';
import RegisteredEvents from '../widgets/RegisteredEvents';

// ...

const ProfilePage = () => {
  const { username } = useParams();
  const [profileInfo, setProfileInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/profile/${username}`, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile information');
        }

        const data = await response.json();
        setProfileInfo(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return (
    <>
      <Header />
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2">
          <ProfilePicWidget username = {profileInfo.username}/>
          <div className="w-full md:w-9/12 mx-2 h-fit">
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {!isLoading && !error && <AboutWidget profileInfo={profileInfo} />}
            <RegisteredEvents />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
