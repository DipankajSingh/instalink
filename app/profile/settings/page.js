import ProtectedRoute from '@/app/auth/ProtectedRoute'
import React from 'react'

function page() {
  return (
    <ProtectedRoute showFooter={true}>
        <div className='h-full w-full bg-white text-white max-w-[480px] relative m-auto '>
            
        </div>
    </ProtectedRoute>
  )
}

export default page