import React, { useState } from 'react'
import {Input} from "../../../components/ui/input"


import {Button} from "../../../components/ui/button"

const SignUp = () => {
  const [signUpData,setSignUpData]=useState({
    name : "",
    email : "",
    password : ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    
  }

  return (
    <div>
      <h1 className='flex items-center justify-center mb-7'>Sign-up</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="">Name</label>
        <Input className="mt-2" type="text" name='name' placeholder='John Doe' />
      </div>
      <div className='mt-3'>
        <label htmlFor="">Email</label>
        <Input className="mt-2" type="email" name='email' placeholder='johndoe@gmail.com' />
      </div>
      <div className='mt-3'>
        <label htmlFor="">Password</label>
        <Input className="mt-2" type="password" name='password' placeholder='******** ' />
      </div>
      <div className="mt-4 flex items-center justify-center sm:justify-center sm:item">
      <Button className="w-30 sm:w-95" type="submit" >Login</Button>
      </div>
      
      </form>
    </div>
  )
}

export default SignUp