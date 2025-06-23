import React from 'react'
import AuthPage from '../../pages/authPage'



const NavBar = () => {
  return (
    <div className='flex justify-between p-5'>
        <div>
            LOGO
        </div>
        <div>
            <AuthPage/>
        </div>
    </div>
  )
}

export default NavBar