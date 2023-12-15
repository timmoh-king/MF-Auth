import React from 'react'

const Logo = () => {
  return (
    <div className='flex flex-row space-x-1 items-center'>
        <div className='flex w-[55px] h-[55px] rounded-full bg-mfauth_purple justify-center items-center'>
            <p className='text-2xl text-mfauth_white font-bold'>MF</p>
        </div>
        <div>
            <p className='text-2xl text-mfauth_purple font-bold'>Auth.</p>
        </div>
    </div>
  )
}

export default Logo
