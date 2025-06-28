import { createContext, useEffect, useState } from "react";
import { deleteTaskApi, fetchTackApi } from "../services";
import { toast } from "sonner";


export const globalContext = createContext(null)

const GlobalState = ({children})=>{

     const [taskData,setTaskData]=useState({
           title: "",
          description : "",
           priority : "",
           status:"",
           date:null
        })

         const [fetchedData,setFetchedData]=useState()

        const fetchTasks = async () => {
    try {
      const data = await fetchTackApi();
      setFetchedData(data?.tasks) 
    } catch (error) {
      console.log("Failed to fetch tasks");
    }
  };
  
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
  useEffect(()=>{
    fetchTasks();
  },[])
  


    return <globalContext.Provider value={{taskData,setTaskData,fetchTasks,fetchedData,setFetchedData,handleDelete}}>
        {children}
    </globalContext.Provider>
}

export default GlobalState