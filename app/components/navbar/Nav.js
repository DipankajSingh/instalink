import Image from 'next/image'
import React from 'react'

function Nav() {
  return (
    <nav className=' sticky top-0 flex justify-between px-7 bg-gradient-to-b from-black to-transparent pt-3 pb-4'>
      <h1 className=' text-2xl font-extrabold'>UNICHAT</h1>
      <div className='flex gap-3'>
        <button><Image src={"/icons/heart.svg"} height={27} width={27} alt='notifications'/></button>
        <button><Image src={"/icons/message.svg"} height={25} width={25} alt='messages'/></button>
      </div>
    </nav>
  )
}

export default Nav