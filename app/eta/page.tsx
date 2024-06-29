"use client"
import {HeartIcon} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";

export default function ETA() {

  const [timeDifference, setTimeDifference] = useState('');

  useEffect(() => {
    const targetDate = new Date('2024-07-21');

    const updateTimer = setInterval(() => {
      const currentDate = new Date();
      const timeRemaining = targetDate.getTime() - currentDate.getTime();

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setTimeDifference(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    }, 1000);

    // Set initial time difference
    const currentDate = new Date();
    const timeRemaining = targetDate.getTime() - currentDate.getTime();

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    setTimeDifference(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

    return () => {
      clearInterval(updateTimer);
    };
  }, []);


  return (
    <>
      <div className="flex items-center justify-center gap-4 sm:p-24 p-10 selection:bg-red-200">
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
          <HeartIcon className="text-red-900 h-24 my-4"/>
          <div className="sm:text-4xl text-3xl text-center text-red-900 font-serif">
            Time until my dearest Hebie comes back
          </div>
          <div className="sm:text-3xl text-xl text-center text-red-800 font-serif">
            {timeDifference}
          </div>
        </div>
      </div>
    </>
  )
}