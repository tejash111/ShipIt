import React, { useState } from 'react'
import {Input} from "../../../components/ui/input"
import {callRegisterApi} from "../../../services/index"

import {toast} from "sonner"
import {Button} from "../../../components/ui/button"
import { useNavigate } from "react-router";

const SignUp = () => {
  const [signUpData,setSignUpData]=useState({
    name : "",
    email : "",
    password : ""
  })

  const navigate = useNavigate()

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setSignUpData(prev =>({
      ...prev,
      [name]:value
    }))
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const res = await callRegisterApi(signUpData)
      toast.success("Registered Successfully")
      navigate("/tasks/list")
    } catch (error) {
      console.log(error);
      toast.error("some error occured pls try again")
      
    } 
  }

  return (
    <div>
      <h1 className='flex items-center justify-center mb-7'>Sign-up</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="">Name</label>
        <Input  className="mt-2" type="text" name='name' placeholder='John Doe' value={signUpData.name} onChange={handleChange}/>
      </div>
      <div className='mt-3'>
        <label htmlFor="">Email</label>
        <Input className="mt-2" type="email" name='email' placeholder='johndoe@gmail.com' value={signUpData.email} onChange={handleChange}/>
      </div>
      <div className='mt-3'>
        <label htmlFor="">Password</label>
        <Input className="mt-2" type="password" name='password' placeholder='********' value={signUpData.password} onChange={handleChange}/>
      </div>
      <div className="mt-4 flex items-center justify-center sm:justify-center sm:item">
      <Button className="w-30 sm:w-95" type="submit" >SignUp</Button>
      </div>
      
      </form>
    </div>
  )
}

export default SignUp