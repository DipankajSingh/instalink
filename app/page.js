'use client'
import HomePage from './HomePage'
import React, { useEffect, useState } from 'react'
import MainScreen from './MainScreen'
import { useSelector } from 'react-redux'

export default function Home() {
  const [authenticated,setAuthenticated]=useState(true)
  const authentication=useSelector((state)=>state.authentication)
  useEffect(()=>{
    setAuthenticated(authentication.authenticated)
  })

  return (
      <div className='h-full w-full bg-white text-white max-w-[480px] relative m-auto '>
      {!authenticated ? <HomePage />:<MainScreen/>}
      </div>
  )
}
