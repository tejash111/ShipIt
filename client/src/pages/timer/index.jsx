import { Settings } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { Slider } from "@/components/ui/slider"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const Pomodoro = () => {

  const [showSetting, setShowSetting] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [workValue, setWorkValue] = useState([1])
  const [breakValue, setBreakValue] = useState([15])
  const [mode, setMode] = useState('work');

  const secondsLeftRef = useRef(secondsLeft)
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode)

  useEffect(() => { secondsLeftRef.current = secondsLeft }, [secondsLeft])
  useEffect(() => { isPausedRef.current = isPaused }, [isPaused])
  useEffect(() => { modeRef.current = mode }, [mode])

  useEffect(() => {
    if (mode === 'work') {
      setSecondsLeft(workValue[0] * 60)
      secondsLeftRef.current = workValue[0] * 60
    } else {
      setSecondsLeft(breakValue[0] * 60)
      secondsLeftRef.current = breakValue[0] * 60
    }
  }, [workValue, breakValue, mode])

  const initTimer = () => {
    setSecondsLeft(workValue[0] * 60)

  }
  const switchMode = () => {
    const nextMode = modeRef.current === 'work' ? 'break' : 'work'
    const nextSeconds = nextMode === 'work' ? workValue[0] * 60 : breakValue[0] * 60
    setMode(nextMode)
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds)
    secondsLeftRef.current = nextSeconds
  }

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current)
  }


  useEffect(() => {
    initTimer()

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        switchMode()
      }

      tick()
    }, 1000);

    return () => clearInterval(interval)

  }, [])

  const totalSeconds = mode === 'work' ? workValue[0] * 60 : breakValue[0] * 60
  const percentage = Math.round((secondsLeft / totalSeconds) * 100)

  const minutes = Math.floor(secondsLeft / 60)
  let seconds = secondsLeft % 60
  if (seconds < 10) seconds = '0' + seconds

  return (
    <div className="flex flex-col justify-center items-center p-4 sm:p-7 w-full min-h-screen backdrop-blur-[10px]">
      <div>
        <div className="w-full max-w-xs sm:w-100 mx-auto">
          <CircularProgressbar styles={buildStyles({ trailColor: "#", pathColor: mode === "work" ? "#000" : "#06c258", textColor: "#000" })} className='' value={percentage} text={minutes + ':' + seconds} />
        </div>
        <div className="flex justify-center mt-6 sm:mt-10 scale-125 sm:scale-150 mb-5 sm:mb-7">
          {
            isPaused ? <FaPlay onClick={() => setIsPaused(!isPaused)} className='cursor-pointer ' /> : <FaPause onClick={() => setIsPaused(!isPaused)} className='cursor-pointer' />
          }
        </div>
        <div className='flex justify-center mt-4'>
          <Dialog>
            <DialogTrigger asChild>
              <IoSettingsSharp className='cursor-pointer scale-150' />
            </DialogTrigger>
            <DialogContent className="w-full max-w-xs sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Setting</DialogTitle>
                <DialogDescription>
                </DialogDescription>
              </DialogHeader>
              <div className='w-full flex justify-center p-3 items-center'>
                <div className='flex flex-col w-full'>
                  <label className='mb-4 text-xl'>work minutes: {workValue[0]}:00</label>
                  <Slider
                    value={workValue}
                    onValueChange={setWorkValue}
                    max={180} step={1} className="w-full sm:w-60"
                  />
                  <label className='m-4 text-xl flex '>break minutes: {breakValue[0]}:00</label>
                  <Slider
                    value={breakValue}
                    onValueChange={setBreakValue}
                    max={60} step={1} className="w-full sm:w-60"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )

}

export default Pomodoro