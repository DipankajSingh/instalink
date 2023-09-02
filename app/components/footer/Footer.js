import Image from 'next/image'
import React from 'react'

function Footer({profilePic="/icons/account.svg"}) {
  return (
    <div className='flex justify-evenly mt-auto sticky bottom-0 p-2 pb-2 border-t bg-white border-gray-400 '>
      <button><Image src={"/icons/home.svg"} height={26} width={26} alt='home'/></button>
      <button><Image src={"/icons/search.svg"} height={25} width={25} alt='search'/></button>
      <button><Image src={"/icons/add.svg"} height={27} width={27} alt='Add post'/></button>
      <button className='h-8 w-8 border-2 border-gray-300 grid place-content-center rounded-full overflow-hidden'><Image src={profilePic} height={22} width={22} alt='profile'/></button>
    </div>
  )
}

export default Footer