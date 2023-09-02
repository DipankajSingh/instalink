import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='flex justify-evenly mt-auto sticky bottom-0 p-2 pb-6 border-t bg-indigo-50 border-gray-400 '>
      <button><Image src={"/icons/home.svg"} height={26} width={26} alt='home'/></button>
      <button><Image src={"/icons/search.svg"} height={25} width={25} alt='search'/></button>
      <button><Image src={"/icons/add.svg"} height={27} width={27} alt='Add post'/></button>
      <button><Image src={"/icons/account.svg"} height={22} width={22} alt='profile'/></button>
    </div>
  )
}

export default Footer