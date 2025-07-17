import React from 'react'
import {Input} from "../../../components/ui/input"

import {Button} from "../../../components/ui/button"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { callLoginApi } from '../../../services'
import { toast } from 'sonner'


const SignIn = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const data = {email,password}

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const response =await callLoginApi(data)
      toast.success("login successfull")
      navigate("/tasks/list")
    } catch (error) {
      console.log(error);
      toast.error("some error occured")
      
    }
    
  }

  const navigate = useNavigate()
  return (
    <div>
      <h1 className='flex items-center justify-center mb-7'>Sign-In</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Email</label>
        <Input className="mt-2 w-85 md:w-95" type="email" name='email' placeholder='johndoe@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className='mt-3'>
        <label htmlFor="">Password</label>
        <Input className="mt-2 w-85 md:w-95" type="password" name='password' placeholder='********' value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <div className="mt-4 flex items-center justify-center sm:justify-center sm:item">
      <Button className="w-full" type="submit" >Login</Button>
      </div>
      
      </form>
    </div>
  )
}

export default SignIn