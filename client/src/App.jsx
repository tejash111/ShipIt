import React from 'react'
import { Button } from "@/components/ui/button"
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/authPage'
import Home from './pages/home'
import { Toaster,toast } from 'sonner'
import Kanban from './pages/kanban'
import TasksPage from './pages'
import ListPage from './pages/ListPage'

const App = () => {
  return (
    <>
    <Toaster position="top-right"/>
    <Routes>
      
      <Route path='/home' element={<Home/>}/>
      <Route path='/tasks' element={<TasksPage/>}>
      <Route path='list' element={<ListPage/>} />
      <Route path='kanban' element={<Kanban/>} />
      </Route>
      
    </Routes>
    </>
  )
}

export default App