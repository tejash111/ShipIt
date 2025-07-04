import { createContext, useEffect, useState } from "react";
import { addNewTaskApi, deleteTaskApi, fetchTackApi, updateTaskApi } from "../services";
import { toast } from "sonner";


export const globalContext = createContext(null)

const GlobalState = ({ children }) => {

  const [taskData, setTaskData] = useState({
    _id: "",
    title: "",
    description: "",
    priority: "",
    status: "",
    date: null
  })

    const [selected,setSelected]=useState("abc")

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(null);

  const [date1, setDate1] = useState(new Date())
  const [fetchedData, setFetchedData] = useState()

  const fetchTasks = async () => {
    try {
      const data = await fetchTackApi();
      setFetchedData(data?.tasks)
    } catch (error) {
      console.log("Failed to fetch tasks");
    }
  };

  const handleDelete = async (getCurrentTaskId) => {
    try {
      const res = await deleteTaskApi(getCurrentTaskId);
      toast("Task deleted")
      setFetchedData(prev => prev.filter(task => task._id !== getCurrentTaskId));
    } catch (error) {
      console.log(error);
      toast.error("some error occured")
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const res = await updateTaskApi(taskData);
      toast.success("task updated")
      setIsModalOpen1(false)
      fetchTasks();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")

    }
  }

  const handleSubmit = async (e) => {
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
  useEffect(() => {
    fetchTasks();
  }, [])



  return <globalContext.Provider value={{ taskData, setTaskData, fetchTasks, fetchedData, setFetchedData, handleDelete, setDate1, date1, handleSubmit, isModalOpen, setIsModalOpen, handleUpdate, isModalOpen1, setIsModalOpen1 ,selected,setSelected}}>
    {children}
  </globalContext.Provider>
}

export default GlobalState