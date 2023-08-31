import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='flex justify-evenly mt-auto sticky bottom-0 bg-gradient-to-t from-black to-transparent pb-4 pt-6'>
      <button><Image src={"/icons/home.svg"} height={28} width={28} alt='home'/></button>
      <button><Image src={"/icons/search.svg"} height={25} width={25} alt='search'/></button>
      <button><Image src={"/icons/add.svg"} height={25} width={25} alt='Add post'/></button>
      <button><Image src={"/icons/account.svg"} height={24} width={24} alt='profile'/></button>
    </div>
  )
}

export default Footer