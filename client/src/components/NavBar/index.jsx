import React from 'react'
import AuthPage from '../../pages/authPage'
import ShipItLogo from '../ShipItLogo'

const NavBar = () => {
  return (
    <div className='flex justify-between p-1 px-2'>
      <div>
       <ShipItLogo/>
      </div>
      <div className=''>
        <AuthPage />
      </div>
    </div>
  )
}

export default NavBar