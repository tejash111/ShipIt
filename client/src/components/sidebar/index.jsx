import React, { useContext } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { useState } from 'react'
import { Button } from '../ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarFooter
} from "@/components/ui/sidebar"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { globalContext } from '../../context'
import ShipItLogo from '../ShipItLogo'
import { logoutApi } from '../../services'
import { toast } from 'sonner'



const SiderBar = () => {
    
    const {date1,setDate1,selected,setSelected,allTime,setAllTime}=useContext(globalContext)
   
    const navigate=useNavigate()
    


    const HandleClick=(path,btnId)=>{
        setSelected(btnId);
        navigate(path);
    }

    const handleLogOut=async()=>{
    try {
      logoutApi()
      navigate("/")
      toast.success("Logout Sucessfull")
    } catch (error) {
        console.log(error);
        toast.error("some error occured")
        
    }
    }

  useEffect(() => {
    setSelected("list")
    navigate("/tasks/list");
  }, []);
  return (
    <div className="bg-[url('/bg.jpg')]">
        <Sidebar>
      <SidebarContent className="bg-[url('/bg.jpg')]">
        <SidebarGroup>
          <SidebarGroupLabel><div className='flex p-4 mt-4'>
            <ShipItLogo/>
        </div></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex  items-center justify-center ">
              <Button onClick={()=>setAllTime(!allTime)} variant={!allTime?"outline" : ""} className="mt-4">All Tasks</Button>
            <Calendar
            mode="single"
            selected={!allTime?date1 : null}
            onSelect={(selectedDate) => {
              setAllTime(false)
            const fomatDate=selectedDate?.toDateString()
           setDate1(selectedDate);      
                 }}   
            className=" scale-90 rounded-2xl bg-gray-100"
            captionLayout="dropdown"
            />
            <div>
              WorkSpace
            </div>
            

                 
                 <div className='mt-4'>
                      <div > 
                <Button className={`hover:text-white border-1 w-60 ${selected === "list" ? "bg-black text-white" : "bg-white text-black"}`} onClick={()=>HandleClick("/tasks/list","list")}>List-View</Button>
            </div>
                
                     <div>
                <Button className={`hover:text-white border-1 w-60  ${selected === "kanban" ? "bg-black text-white" : "bg-white text-black"}`}   onClick={()=>HandleClick("/tasks/kanban","kanban")}>Kanban-View</Button>
            </div>

             <div>
                <Button className={`hover:text-white border-1 w-60  ${selected === "pomodoro" ? "bg-black text-white" : "bg-white text-black"}`}   onClick={()=>HandleClick("/tasks/pomodoro","pomodoro")}>Pomodoro</Button>
            </div>
                 </div>

                 
                
                
            
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Button onClick={handleLogOut} className="flex items-end ">Logout</Button>
    </Sidebar>
    </div>
  )
}

export default SiderBar