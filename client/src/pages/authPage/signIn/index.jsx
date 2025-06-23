import React from 'react'
import {Input} from "../../../components/ui/input"

import {Button} from "../../../components/ui/button"

const SignIn = () => {
  return (
    <div>
      <h1 className='flex items-center justify-center mb-7'>Sign-In</h1>
      <form>
      <div>
        <label htmlFor="">Email</label>
        <Input className="mt-2" type="email" name='email' placeholder='johndoe@gmail.com' />
      </div>
      <div className='mt-3'>
        <label htmlFor="">Password</label>
        <Input className="mt-2" type="password" name='password' placeholder='******** ' />
      </div>
      <div className="mt-4 flex items-center justify-center sm:justify-center sm:item">
      <Button className="w-95" type="submit" >Login</Button>
      </div>
      
      </form>
    </div>
  )
}

export default SignIn