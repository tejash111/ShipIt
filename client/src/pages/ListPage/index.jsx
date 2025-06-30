import React, { useContext } from 'react'
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
import { globalContext } from '../../context';
import { LuListTodo } from "react-icons/lu";
import AddModal from '../../components/AddModal';


const ListPage = () => {

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const [date,setDate]=useState(new Date())
const {taskData,setTaskData,fetchTasks,fetchedData,setFetchedData,handleDelete,date1,handleSubmit,handleUpdate,isModalOpen1, setIsModalOpen1,isModalOpen,setIsModalOpen}=useContext(globalContext)
  console.log(fetchedData);
  
  
  
  const d = new Date


  useEffect(()=>{
    fetchTasks()
  },[])




  return (
    
      
    <div className=' w-full flex mt-25 justify-center' >
      <div className=' '>
        <h1 className='text-3xl'>Today</h1>
        <div >
          

          <div className='flex gap-1 text-xl ml-1'>
          <div>{d.getDate() }</div> . <div>{ month[d.getMonth()]}</div>
          </div>
          
          <div className='mt-4 '>
            {
              
              fetchedData?.filter((item)=>item.date === date1.toDateString())
              .map((item)=>(
                <div className='mt-5'>
                <div className='flex gap-3  '  key={item._id}>
                  <div className=''><Checkbox  className="rounded-full w-5 h-5"/></div>

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
                  <div className='flex justify-end items-end '>
                    
                    
                  
                    
                  </div>
                  <div className='flex justify-end items-end mb-8'>
                    <Button onClick={()=>handleDelete(item._id)} variant="ghost" className="flex "><MdDelete className=' '/></Button>
                  </div>
                  
                  </div>
                  
                  
                   </div>
                   <div className=''>
                   <AddModal
                  className=""
                  mode="edit"
                  item={item}
                  handleSubmit={handleUpdate}
                  
                  modalOpen={isModalOpen1 === item._id}
                  setModalOpen={(open) => setIsModalOpen1(open ? item._id : null)}
                    />
                   </div>
                  
                </div>
              ))
              
            }
          </div>
          <div>
         
          </div>
           <AddModal
          mode="add"
          handleSubmit={handleSubmit}
          modalOpen={isModalOpen}
          setModalOpen={setIsModalOpen}
          />
        </div>
      </div>
    </div>
  
  )
}

export default ListPage