'use client'
import HomePage from './HomePage'
import React from 'react'
import MainScreen from './MainScreen'

export default function Home() {
  const authenticated=true
  
  return (
    <>
      <div className='h-full w-full text-white max-w-[480px] relative m-auto '>
      {!authenticated ? <HomePage />:<MainScreen/>}
      </div>
    </>
  )
}
