import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
    Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from 'react-router-dom'
import SignUp from './signUp'
import SignIn from './signIn'

const AuthPage = () => {
    const [isLoginView,setIsLoginView]=useState(true)

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        
      navigate("/auth")
      
    }
  return (
    <div>
        
    <Dialog >
      
        <DialogTrigger asChild>
          <Button className="" variant="">Login/SignUp</Button>
        </DialogTrigger>
         <DialogContent className="sm:max-w-[425px]">
          <VisuallyHidden>
              <DialogTitle></DialogTitle>
              <DialogHeader></DialogHeader>
              <DialogDescription></DialogDescription>
               <DialogFooter></DialogFooter>
                <DialogClose></DialogClose>
          </VisuallyHidden>
        {
          isLoginView?<SignIn/> : <SignUp/>
        }
      <div className='text-sm flex items-center justify-center'>
        New to ShipIt? 
        <Link to><span onClick={()=>setIsLoginView(!isLoginView)}  className='flex px-2 text-blue-800 font-normal'>{isLoginView? "SignUp" : "SignIn"}</span></Link>
        
    </div>
      </DialogContent>
    </Dialog>
    
        </div>
  )
}

export default AuthPage