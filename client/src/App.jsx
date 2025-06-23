import React from 'react'
import { Button } from "@/components/ui/button"
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/authPage'
import TaskPage from './pages/TaskPage'
import ScrumBoardPage from './pages/scrum-board'
import Home from './pages/home'
import { Toaster,toast } from 'sonner'

const App = () => {
  return (
    <>
    <Toaster position="top-right"/>
    <Routes>
      
      <Route path='/home' element={<Home/>}/>
      <Route path='/tasks/list' element={<TaskPage/>} />
      <Route path='/tasks/scrumboard' element={<ScrumBoardPage/>} />
    </Routes>
    </>
  )
}

export default App