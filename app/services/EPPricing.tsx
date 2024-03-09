import {
  AcademicCapIcon, CakeIcon,
  CalendarDaysIcon,
  CalendarIcon,
  CameraIcon, CheckBadgeIcon, ChevronUpDownIcon,
  HeartIcon,
  MusicalNoteIcon,
  UserCircleIcon, VideoCameraIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import * as React from "react";

export default function SPPricing() {
  return (
    <div
      className="flex flex-col space-y-2 p-14 bg-white rounded-3xl shadow-2xl shadow-red-200 hover:scale-[1.02] transition ease-in-out duration-700">
      <div className="flex space-x-2 font-serif text-4xl text-red-900 pb-4">
        <VideoCameraIcon className="h-10"/>
        <div>
          Event Package
        </div>
      </div>
      <div className="flex items-center space-x-2 font-serif text-xl text-red-900">
        <CalendarIcon className="h-7"/>
        <div>
          Wedding Day
        </div>
      </div>
      <div className="flex items-center space-x-2 font-serif text-xl text-red-900">
        <MusicalNoteIcon className="h-7"/>
        <div>
          Musical Concert
        </div>
      </div>
      <div className="flex items-center space-x-2 font-serif text-xl text-red-900">
        <CakeIcon className="h-7"/>
        <div>
          Party / Banquet
        </div>
      </div>
      <div className="text-4xl text-red-900 font-serif font-bold tracking-widest py-6">
        9 8 0 H K D / HR
      </div>
      <Link
        href="/"
        className="flex w-fit items-center space-x-2 hover:bg-red-400 outline outline-2 outline-red-400 text-2xl font-medium text-red-600 hover:text-white hover:shadow-lg hover:shadow-red-200 px-6 py-3 rounded-full ease-in-out transition duration-300">
        <CalendarDaysIcon className="h-10"/>
        <div>
          Make Your Booking Now
        </div>
      </Link>
      <div className="flex-col space-y-8 pt-8">
        <div className="flex flex-col space-y-4">
          <div className="text-xl text-red-900 font-serif">
            <div className="flex items-center space-x-2 -translate-x-5">
              <CheckBadgeIcon className="h-10"/>
              <div>
                What is included?
              </div>
            </div>
          </div>
          <ul className="list-disc list-inside text-red-900 font-serif text-lg">
            <li>
              60-Min Photo-Videography shooting^
            </li>
            <li>
              30+ Essentially Retouched Photo^
            </li>
            <li>
              15 Photo will be Finely Tuned^
            </li>
            <li>
              30-Day High-Speed Cloud Access
            </li>
            <li>
              30-sec ~ 8-min Video Post-Production
            </li>
            <li>
              All Photos will be returned within 7 days
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="text-xl text-red-900 font-serif">
            <div className="flex items-center space-x-2 -translate-x-5">
              <ChevronUpDownIcon className="h-10"/>
              <div>
                Add-Ons Services (Optionals)
              </div>
            </div>
          </div>
          <ul className="list-disc list-inside text-red-900 font-serif text-lg">
            <li>
              Make-Up & Hair-Style Artist (+240HKD)^
            </li>
            <li>
              Islands District Additional fee (+80HKD)
            </li>
            <li>
              Behind The Scene video (+480HKD)
            </li>
            <li>
              Extra 20 Finely Tuned Photo (+120HKD)
            </li>
            <li>
              Extend Video Duration (+280HKD / Min)
            </li>
          </ul>
        </div>
      </div>
      <div className="font-serif text-lg text-red-900 opacity-60">
        <div>
          #Booking at minimum of 2 hours
        </div>
        <div>
          ^For every session
        </div>
      </div>
    </div>
  )
}