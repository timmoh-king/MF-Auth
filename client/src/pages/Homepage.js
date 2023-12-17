import React from 'react'
import Button from '../components/Button';

const Homepage = () => {
  return (
    <div>
      <h1 className='text-center text-xl text-mfauth_black font-bold'>Welcome to MF-Auth HomePage</h1>
      <Button buttonName='Logout' buttonStyle='w-[168px]' />
    </div>
  )
}

export default Homepage
