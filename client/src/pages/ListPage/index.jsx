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

  const [showHeading, setShowHeading] = useState(true)
  const [date, setDate] = useState(new Date())
  const { taskData, setTaskData, fetchTasks, fetchedData, setFetchedData, handleDelete, date1, handleSubmit, handleUpdate, isModalOpen1, setIsModalOpen1, isModalOpen, setIsModalOpen, selected, allTime, setAllTime, updateTaskStatus } = useContext(globalContext)


  //   const parts = date.split(" ");
  // const result = `${parts[0]} ${parts[1]} ${parts[2]}`;
  // console.log(result);
  const options = { weekday: 'short', month: 'short', day: '2-digit' };
  const formatted = date1?.toLocaleDateString('en-US', options).replace(',', '');


  const d = new Date
  useEffect(() => {
    fetchTasks()
    if (date1?.toDateString() === new Date().toDateString()) {
      setShowHeading(true);
    } else {
      setShowHeading(false);
    }

  }, [date1])

  return (
    <div className="w-full  flex flex-col sm:flex-row mt-6 sm:mt-25 justify-center backdrop-blur-[10px] px-2 sm:px-0">
      <div className='w-full max-w-xl  sm:max-w-210'>
        <h1 className='text-3xl sm:text-4xl font-normal'>{showHeading ? "Today" : ""}</h1>
        <div>
          <div className='flex gap-1 text-lg sm:text-xl ml-0 sm:ml-1 mt-2 font-light'>
            <div>{formatted}</div>
          </div>
          <div className='mt-4 w-full sm:w-210 max-w-full overflow-x-auto'>
            {(allTime ? fetchedData :
              fetchedData?.filter((item) => item.date === date1?.toDateString()))
              ?.map((item) => (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 border-b" key={item._id}>
                  <div className="flex-shrink-0">
                    <Checkbox
                      checked={item.status === "Done"}
                      onCheckedChange={() => updateTaskStatus(item._id, "Done")}
                      className="rounded-full w-5 h-5 border-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-lg sm:text-xl${item.status === "Done" ? " line-through" : ""}`}>{item.title}</div>
                    <div className="font-extralight text-sm sm:text-base">{item.description}</div>
                  </div>
                  <div className="flex-shrink-0 w-full sm:w-24 text-left sm:text-right">
                    {
                      item.priority === "High" ? (
                        <div className='flex gap-1'><IoIosFlag className='text-red-600 flex mt-1.5' /> {item.priority}</div>
                      ) : item.priority === "Medium" ? (
                        <div className='flex gap-1'><IoIosFlag className='text-yellow-500 flex mt-1.5' /> {item.priority}</div>
                      ) : item.priority === "Low" ? (<div className='flex gap-1'><IoIosFlag className='text-blue-600 flex mt-1.5 ' /> {item.priority}</div>) : null
                    }
                  </div>
                  <div className="flex-shrink-0 w-full sm:w-40 text-left sm:text-right">
                    <div className='flex gap-2 font-light'><BsCalendar2DateFill className='flex mt-1' />{item.date}</div>
                  </div>
                  <div className="flex-shrink-0 flex gap-2 w-full sm:w-16 justify-end mt-2 sm:mt-0">
                    <Button onClick={() => handleDelete(item._id)} variant="ghost" className="flex"><MdDelete /></Button>
                  </div>
                </div>
              ))}
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
