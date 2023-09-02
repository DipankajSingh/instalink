import Image from 'next/image'
import React from 'react'

function Nav() {
  return (
    <nav className=' sticky bg-indigo-50 top-0 z-10 flex justify-between py-2 px-6 border-gray-400 border-b-2'>
      <h1 className=' text-2xl text-black font-extrabold'>UNICHAT</h1>
      <div className='flex gap-3'>
        <button><Image src={"/icons/heart.svg"} height={27} width={27} alt='notifications'/></button>
        <button><Image src={"/icons/message.svg"} height={25} width={25} alt='messages'/></button>
      </div>
    </nav>
  )
}

export default Nav