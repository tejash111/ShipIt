import React from 'react'
import { Outlet } from "react-router-dom";
import SiderBar from '../components/sidebar';
import { SidebarProvider ,SidebarTrigger} from '@/components/ui/sidebar';
import { Button } from '../components/ui/button';

const TasksPage = () => {
  return (
    <div className="bg-[url('/bg.jpg')]">
       
        <SidebarProvider>
          <SiderBar />
          <SidebarTrigger className="">
           
          
  <Button className="block md:hidden" variant="ghost">☰</Button>
</SidebarTrigger >
<Outlet/>

          
          
        </SidebarProvider>
        
       
    </div>
  )
}

export default TasksPage