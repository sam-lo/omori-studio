import {
  MusicalNoteIcon,
  HeartIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  SparklesIcon,
  ArrowLeftEndOnRectangleIcon, CubeIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Hebie from "@/public/photo/HebieHair.jpg"
import * as React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-8 pt-32 selection:bg-red-200">
        <div className="text-7xl font-serif text-red-900">
          OMORI STUDIO
        </div>
        <div className="text-xl font-serif text-red-900">
          Stretch Your Every Precious Moment
        </div>
        <div className="bg-white rounded-full shadow-xl shadow-red-100">
          <div className="flex items-center space-x-2 m-1 text-lg">
            <div
              className="flex hover:bg-red-50 items-center space-x-2 text-red-950 hover:text-red-800 font-serif px-6 py-4 rounded-full transition duration-300">
              <MusicalNoteIcon className="h-5"/>
              <div>
                Concert
              </div>
            </div>
            <div
              className="flex hover:bg-red-50 items-center space-x-2 text-red-950 hover:text-red-800 font-serif px-6 py-4 rounded-full transition duration-300">
              <HeartIcon className="h-5"/>
              <div>
                Pre-Wedding
              </div>
            </div>
            <div
              className="flex hover:bg-red-50 items-center space-x-2 text-red-950 hover:text-red-800 font-serif px-6 py-4 rounded-full transition duration-300">
              <CalendarDaysIcon className="h-5"/>
              <div>
                Big-Day
              </div>
            </div>
            <div
              className="flex hover:bg-red-50 items-center space-x-2 text-red-950 hover:text-red-800 font-serif px-6 py-4 rounded-full transition duration-300">
              <UserCircleIcon className="h-5"/>
              <div>
                Portrait
              </div>
            </div>
            <div
              className="flex hover:bg-red-50 items-center space-x-2 text-red-950 hover:text-red-800 font-serif px-6 py-4 rounded-full transition duration-300">
              <SparklesIcon className="h-5"/>
              <div>
                Event
              </div>
            </div>
          </div>
        </div>
        <div className="px-24 pt-28 flex items-center space-x-16">
          <Image src={Hebie} alt={"Hebie"} className="w-5/12 rounded-3xl shadow-xl shadow-red-100 hover:scale-105 transition ease-in-out duration-700"/>
          <div className="flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <div className="text-2xl font-serif text-red-900">
                From Photography, Videography to Graphical Design,
              </div>
              <div className="text-2xl font-serif text-red-950">
                a streamlined service that you can count on.
              </div>
            </div>
            <Link
              href="services"
              className="flex w-fit items-center space-x-2 hover:bg-red-400 outline outline-2 outline-red-400 text-xl font-medium text-red-600 hover:text-white hover:shadow-lg hover:shadow-red-200 px-4 py-2 rounded-full ease-in-out transition duration-300">
              <CubeIcon className="h-10"/>
              <div>
                Find your plan
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
