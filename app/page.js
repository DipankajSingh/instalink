'use client'
import HomePage from './HomePage'
import React from 'react'
import MainScreen from './MainScreen'

export default function Home() {
  const authenticated=false
  
  return (
    <>
      <div className='h-full w-full bg-white text-white max-w-[480px] relative m-auto '>
      {!authenticated ? <HomePage />:<MainScreen/>}
      </div>
    </>
  )
}
