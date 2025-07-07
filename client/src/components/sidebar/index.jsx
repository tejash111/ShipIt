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



const SiderBar = () => {
    
    const {date1,setDate1,selected,setSelected}=useContext(globalContext)
   
    const navigate=useNavigate()


    const HandleClick=(path,btnId)=>{
        setSelected(btnId);
        navigate(path);
    }

  useEffect(() => {
    setSelected("list")
    navigate("/tasks/list");
  }, []);
  return (
    <div className=''>
        <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel><div className='flex p-4 mt-4'>
            <ShipItLogo/>
        </div></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex  items-center justify-center ">
            <Calendar
            mode="single"
            selected={date1}
            onSelect={(selectedDate) => {
            const fomatDate=selectedDate?.toDateString()
           setDate1(selectedDate);      
                 }}   
            className="mt-4 scale-90 "
            captionLayout="dropdown"
            />

            

                 
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
      <SidebarFooter ><Button>Logout</Button></SidebarFooter>
    </Sidebar>
    </div>
  )
}

export default SiderBar