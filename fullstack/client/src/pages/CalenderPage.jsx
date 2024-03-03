import React from 'react'
import Header from '../components/Header'
import CalenderWidget from '../widgets/CalenderWidget'
import EventMenu from '../widgets/EventMenu'
import { UserContext } from '../UserContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const CalenderPage = () => {
 
  return (
    <>
    <Header />
    <CalenderWidget />

    </>
  )
}

export default CalenderPage