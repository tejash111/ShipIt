import React, { useContext, useRef } from 'react'
import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { addNewTaskApi, deleteTaskApi, fetchTackApi } from '../../services';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import SiderBar from '../../components/sidebar';
import { Calendar } from "@/components/ui/calendar"
import { IoIosFlag } from "react-icons/io";
import { CiCalendarDate, CiEdit } from "react-icons/ci";
import { BsCalendar2DateFill, BsFlag } from "react-icons/bs";
import { globalContext } from '../../context';
import { LuListTodo } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";

const AddModal = ({handleSubmit,modalOpen,setModalOpen,item,mode}) => {
      const [date,setDate]=useState(null)
    const {taskData,setTaskData,fetchTasks,fetchedData,setFetchedData,setIsModalOpen,isModalOpen}=useContext(globalContext)
       const d = new Date
        
        const [selectPriority,setSelectPriority]=useState(null);
        const bottomRef = useRef(null);
       
       useEffect(() => {
  if (item) {
    setTaskData(item); // ✅ prefill modal with task details
  }
}, [item]);
 
     
        const handleAddBtn = ()=>{
          
         setModalOpen(!modalOpen)
           setTimeout(scrollToBottom, 100);
        }
     
        const scrollToBottom = () => {
  bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
};
       
     
        const handleChange=(event)=>{
        const {name,value} = event.target
         setTaskData(prev=>({
           ...prev,
           [name]:value
         })
       )
        }
       
     
       useEffect(()=>{
         fetchTasks()
       },[])
  return (
    <div>
         {
            modalOpen? 
            <div className='border mt-5 p-4 rounded-2xl w-210'>
              <form action="" onSubmit={handleSubmit}>
                <div>
                 <Input name="title" onChange={handleChange}  className="h-12 border-none w-200"placeholder="complete the project"/>
                 <Input onChange={handleChange} className="h-8 w-200 border-none" name="description" placeholder="description"/>
                 <div className='m-4 flex gap-2'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button className="" variant="outline">{taskData?.priority !==""? <div className='flex gap-1 font-light'><IoIosFlag className='mt-1'/>{taskData?.priority}</div> : <div className='flex gap-2 font-light'><IoIosFlag className='mt-1'/> Priority</div> }</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuCheckboxItem
                     onCheckedChange={() =>
                      setTaskData((prev) => ({ ...prev, priority:  "High" }))
                     }
                    >
                      <IoIosFlag className='text-red-600'/> High
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      onCheckedChange={() =>
                     setTaskData((prev) => ({ ...prev, priority: "Medium" }))
                     }
                    >
                     <IoIosFlag className='text-yellow-500'/> Medium
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                     onCheckedChange={() =>
                    setTaskData((prev) => ({ ...prev, priority: "Low" }))
                    }
                    >
                      <IoIosFlag className='text-blue-600'/> Low
                    </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu className="">
                    <DropdownMenuTrigger asChild>
                    <Button className="" variant="outline">{taskData?.date !== null ? <div className='flex gap-1 font-light'><CiCalendarDate className='mt-1'/> {taskData?.date}</div>: <div className='flex gap-1 font-light'><CiCalendarDate className='mt-1'/> Date</div>}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="scale-80">
                    <DropdownMenuCheckboxItem
                    className="">
                      <Calendar
                       mode="single"
                      selected={date}
                      onSelect={(selectedDate) => {
                      const fomatDate=selectedDate?.toDateString()
                      setDate(selectedDate);
                      setTaskData(prev => ({ ...prev, date: fomatDate }));
                      required
                       }}
                      className=" "
                     captionLayout="dropdown"
                      />
                    </DropdownMenuCheckboxItem>
                    
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button className="" variant="outline">{taskData?.status !==""? <div className='flex gap-1 font-light'><LuListTodo className='mt-1'/>{taskData?.status}</div> : <div className='flex gap-2 font-light'><LuListTodo className='mt-1'/> Status</div> }</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuCheckboxItem
                     onCheckedChange={() =>
                      setTaskData((prev) => ({ ...prev, status:  "Planned" }))
                     }
                    >
                      <LuListTodo className='text-gray-600'/> Planned
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      onCheckedChange={() =>
                     setTaskData((prev) => ({ ...prev, status: "In-Progress" }))
                     }
                    >
                     <LuListTodo className='text-yellow-500'/> In Progress
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                     onCheckedChange={() =>
                    setTaskData((prev) => ({ ...prev, status: "Done" }))
                    }
                    >
                      <LuListTodo className='text-green-500'/> Done
                    </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                 </div >
                 <div className='flex justify-end gap-2'>
                 <Button onClick={()=>setModalOpen(false)}>Cancel</Button>
                 <Button type="submit">Add Task</Button>
                 </div>
                 
                </div>
              </form>
              <div ref={bottomRef}></div>
          </div>
            : <Button className={mode === "add"?"mt-5" : ""} variant={mode === "add"?"":"ghost"} onClick={handleAddBtn}>{mode === "add"? "Add Task" : <CiEdit/> }</Button>
          }
    </div>
  )
}

export default AddModal