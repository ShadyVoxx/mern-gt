import React from 'react'
import EventDisplay from '../widgets/EventDisplay'
import AboutWidget from '../widgets/AboutWidget'
import Header from '../components/Header'
import ProfilePicWidget from '../widgets/ProfilePicWidget'
import RegisteredEvents from '../widgets/RegisteredEvents'
const EventDisp = [
  {event: 'Event1', time:"9:30-10:30",noofusers: "4"},
  {event: 'Event2', time:"10:30-11:30",noofusers: "3"},
  {event: 'Event3', time:"11:30-12:30",noofusers: "4"},
  {event: 'Event3', time:"11:30-12:30",noofusers: "4"}

]

const ProfilePage = () => {
  return (
    <>
    <Header />
    <div className="container mx-auto my-5 p-5">
    <div className="md:flex no-wrap md:-mx-2">
       <ProfilePicWidget />
        <div className="w-full md:w-9/12 mx-2 h-fit ">
        <AboutWidget/>
        <RegisteredEvents />
        
           

        </div>
    </div>
</div>
</>
  )
}

export default ProfilePage