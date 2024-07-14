import {CameraIcon, CursorArrowRaysIcon, FilmIcon, PresentationChartLineIcon} from "@heroicons/react/24/outline";
import * as React from "react";
import {PlayIcon} from "@heroicons/react/24/solid";

export default function Extraordinary() {

  let redirectDestination = "https://new.express.adobe.com/id/urn:aaid:sc:AP:7b343fa0-b07d-5449-9cbb-da38916849e4?invite=true&promoid=Z2G1FQKR&mv=other";

  return (
    <>
      <div className="flex flex-col items-center justify-center sm:gap-8 gap-4 sm:p-24 p-10 selection:bg-red-200">
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
          <PresentationChartLineIcon className="text-red-900 h-24 my-4"/>
          <div className="sm:text-4xl text-3xl text-center text-red-900 font-serif">
            You are about to be redirected to : PARADIKOS
          </div>
          <div className="sm:text-3xl text-xl text-center text-red-800 font-serif">
            Finalised 14 July
          </div>
        </div>
        <a
          href={redirectDestination}
          className="group flex flex-col items-center justify-center space-y-5 outline outline-2 outline-red-400 hover:bg-red-400 rounded-3xl pl-8 py-2">
          <div className="flex items-center justify-center space-x-2 text-red-400 group-hover:text-white">
            <div className="group-hover:opacity-0 transition duration-300 ease-in-out">
              <CursorArrowRaysIcon className="h-10"/>
            </div>
            <div className="text-2xl font-serif group-hover:-translate-x-10 duration-300 ease-in-out">
              Click Me
            </div>
            <PlayIcon
              className="h-8 opacity-0 group-hover:-translate-x-8 group-hover:opacity-100 transition duration-500 ease-in-out"/>
          </div>
        </a>
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div className="sm:text-xl text-md text-center text-red-800 font-serif opacity-40 mt-10">
            This documentary is created by Omori Studio, Click the button below to know more about us.
          </div>
          <a
            href="/"
            className="flex opacity-40 hover:opacity-100 items-center outline outline-2 font-serif outline-red-800 hover:outline-red-400 space-x-2 hover:bg-red-400 text-red-800 hover:text-white hover:shadow-lg hover:shadow-red-300 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
            <CameraIcon className="h-6 stroke-2"/>
            <div>
              Omori Studio
            </div>
          </a>
        </div>
      </div>
    </>
  )
}