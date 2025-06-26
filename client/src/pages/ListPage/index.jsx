import React from 'react'
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
import { CiCalendarDate } from "react-icons/ci";
import { BsCalendar2DateFill, BsFlag } from "react-icons/bs";


const ListPage = () => {

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const [date,setDate]=useState(new Date())

  
  
  const d = new Date
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectPriority,setSelectPriority]=useState(null);
   const [taskData,setTaskData]=useState({
       title: "",
      description : "",
       priority : "",
       date:null
    })
    const [fetchedData,setFetchedData]=useState()

   const handleAddBtn = ()=>{
    setIsModalOpen(!isModalOpen)
   }

  

   const handleChange=(event)=>{
   const {name,value} = event.target
    setTaskData(prev=>({
      ...prev,
      [name]:value
    })
  )
   }
   console.log(taskData);
   

   const handleSubmit= async(e)=>{
    e.preventDefault()
   try {
     const res = await addNewTaskApi(taskData);
    toast.success("task added")
    setIsModalOpen(false)
    fetchTasks();
    
   } catch (error) {
    console.log(error);
    toast.error("some errro occured")
    
   }
   }
   const handleDelete=async(getCurrentTaskId)=>{
    try {
      const res =await deleteTaskApi(getCurrentTaskId);
    toast("Task deleted")
    setFetchedData(prev => prev.filter(task => task._id !== getCurrentTaskId));
    } catch (error) {
      console.log(error);
      toast.error("some error occured")
    }
   }


  const fetchTasks = async () => {
    try {
      const data = await fetchTackApi();
      setFetchedData(data?.tasks) 
    } catch (error) {
      console.log("Failed to fetch tasks");
    }
  };
  useEffect(()=>{
    fetchTasks();
  },[])
  




  return (
    
      
    <div className='min-h-screen w-full flex mt-25  bg-gray-50 justify-center' >
      <div className=' '>
        <div >
          <h1 className='text-3xl'>Today</h1>

          <div className='flex gap-1 text-xl ml-1'>
            <div>{d.getDate() }</div> . <div>{ month[d.getMonth()]}</div>
          </div>
          
          <div className='mt-4'>
            {
              fetchedData?.map((item)=>(
                
                <div className='flex gap-3 mt-2 '  key={item._id}>
                  <div className='mt-2'><Checkbox  className="rounded-full w-5 h-5"/></div>

                  <div className='flex justify-between gap-8 w-210 '>
                    <div className=''><div className='text-xl '> {item.title}</div>
                  <div className='font-extralight'>{item.description}</div>
                  </div>
                  <div>
                     {
                 item.priority === "High" ? (
                <div className='flex gap-1'><IoIosFlag className='text-red-600 flex mt-1.5' /> {item.priority}</div>
                 ) : item.priority === "Medium" ? (
                 <div className='flex gap-1'><IoIosFlag className='text-yellow-500 flex mt-1.5'/> {item.priority}</div>
                ) : (<div className='flex gap-1'><IoIosFlag className='text-blue-600 flex mt-1.5 '/> {item.priority}</div>)
              }
                  </div>
                  <div className='flex gap-2' ><BsCalendar2DateFill className='flex mt-1'/>{item.date}</div>
                  <div className='flex justify-end items-end mb-8'>
                    <Button onClick={()=>handleDelete(item._id)} variant="ghost" className="flex "><MdDelete className='mb-3 '/></Button>
                  </div>
                  </div>
                  
                   </div>
                
              ))
            }
          </div>
          <div>
          {
            isModalOpen? 
            <div className='border mt-5 p-4 rounded-2xl w-210'>
              <form action="" onSubmit={handleSubmit}>
                <div>
                 <Input name="title" onChange={handleChange}  className="h-12 border-none w-200"placeholder="complete the project"/>
                 <Input onChange={handleChange} className="h-8 w-200 border-none" name="description" placeholder="description"/>
                 <div className='m-4 flex gap-2'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button className="" variant="outline">{taskData.priority !==""? <div className='flex gap-1 font-light'><IoIosFlag className='mt-1'/>{taskData.priority}</div> : <div className='flex gap-2 font-light'><IoIosFlag className='mt-1'/> Priority</div> }</Button>
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
                    <Button className="" variant="outline">{taskData.date !== null ? <div className='flex gap-1 font-light'><CiCalendarDate className='mt-1'/> {taskData.date}</div>: <div className='flex gap-1 font-light'><CiCalendarDate className='mt-1'/> Date</div>}</Button>
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
                       }}
                      className=" "
                     captionLayout="dropdown"
                      />
                    </DropdownMenuCheckboxItem>
                    
                    </DropdownMenuContent>
                  </DropdownMenu>
                 </div >
                 <div className='flex justify-end gap-2'>
                 <Button onClick={()=>setIsModalOpen(false)}>Cancel</Button>
                 <Button type="submit">Add Task</Button>
                 </div>
                 
                </div>
              </form>
          </div>
            : <Button className="mt-5" onClick={handleAddBtn}>+ Add Task</Button>
          }
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default ListPage