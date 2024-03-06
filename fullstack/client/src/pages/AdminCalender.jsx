import React from 'react'
import CalenderWidget from '../widgets/CalenderWidget'
import Header from '../components/Header'
import AddEvents from '../widgets/AddEvents'
import { useState } from 'react'
import dayjs from 'dayjs';

const AdminCalender = () => {
  const currentDate = dayjs()
  const [selectDate, setSelectDate] = useState(currentDate);
  return (
    <>
        <Header />
       <CalenderWidget selectDate={selectDate} setSelectDate={setSelectDate} />
       <div className='sticky bottom-0'>
       <div className='flex justify-end sm:mr-10 mr-5'>
        <AddEvents selectDate={selectDate} setSelectDate={setSelectDate}/>
        </div>
        </div>
       
    </>
  )
}

export default AdminCalender