import React from 'react'
import ProtectedRoute from '../auth/ProtectedRoute'

function page() {
  return (
    <ProtectedRoute showFooter={true}>
        <div className='h-full w-full bg-white text-black max-w-[480px] relative m-auto'>
            chat
        </div>
    </ProtectedRoute>
  )
}

export default page