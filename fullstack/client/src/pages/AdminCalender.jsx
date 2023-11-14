import React from 'react'
import CalenderWidget from '../widgets/CalenderWidget'
import Header from '../components/Header'
import AddEvents from '../widgets/AddEvents'

const AdminCalender = () => {
  return (
    <>
        <Header />
       <CalenderWidget />
       <div className='sticky bottom-0'>
       <div className='flex justify-end sm:mr-10 mr-5'>
        <AddEvents />
        </div>
        </div>
       
    </>
  )
}

export default AdminCalender