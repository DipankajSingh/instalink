import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer({showFooter=false, profilePic="/icons/account.svg"}) {
  return (
    <div className={`${showFooter?"flex":"hidden"} justify-evenly mt-auto sticky bottom-0 p-2 pb-2 border-t bg-white border-gray-400`}>
      <Link href={'/feed'}><Image src={"/icons/home.svg"} height={26} width={26} alt='feed'/></Link>
      <Link href={'/search'}><Image src={"/icons/search.svg"} height={25} width={25} alt='search'/></Link>
      <Link href={'/new_post'}><Image src={"/icons/add.svg"} height={27} width={27} alt='Add post'/></Link>
      <Link href={'/profile'} className='h-8 w-8 border-2 border-gray-300 grid place-content-center rounded-full overflow-hidden'><Image src={profilePic} height={22} width={22} alt='profile'/></Link>
    </div>
  )
}

export default Footer