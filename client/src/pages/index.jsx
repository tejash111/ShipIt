import React from 'react'
import AppNavBar from '../components/AppNavBar'
import { Outlet } from "react-router-dom";

const TasksPage = () => {
  return (
    <div>
        <AppNavBar/>
        <Outlet/>
    </div>
  )
}

export default TasksPage