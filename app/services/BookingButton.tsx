import {CalendarDaysIcon, CursorArrowRaysIcon} from "@heroicons/react/24/outline";
import * as React from "react";

export default function BookingButton(props:any) {
  return (
    <a
      href={props.text}
      className="group flex flex-col items-center justify-center space-y-5 outline outline-2 outline-red-400 hover:bg-red-400 rounded-3xl pl-11 py-2">
      <div className="flex items-center justify-center space-x-2 text-red-400 group-hover:text-white">
        <div className="group-hover:opacity-0 transition duration-300 ease-in-out">
          <CalendarDaysIcon className="h-9"/>
        </div>
        <div className="text-2xl font-serif group-hover:-translate-x-10 duration-300 ease-in-out">
          Book Now!
        </div>
        <CursorArrowRaysIcon
          className="h-10 opacity-0 group-hover:-translate-x-9 group-hover:opacity-100 transition duration-500 ease-in-out"/>
      </div>
    </a>
  )
}