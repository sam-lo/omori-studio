import {
  AdjustmentsHorizontalIcon,
  CakeIcon,
  CalendarIcon,
  CheckBadgeIcon,
  MusicalNoteIcon,
  VideoCameraIcon
} from "@heroicons/react/24/outline";
import * as React from "react";
import BookingButton from "@/components/services/BookingButton";

export default function EPPricing() {
  return (
    <div
      className="flex flex-col space-y-2 p-12 bg-white rounded-3xl shadow-2xl shadow-red-200 hover:scale-[1.02] transition ease-in-out duration-700">
      <div className="flex items-center space-x-2 font-serif text-2xl text-red-900 pb-4">
        <VideoCameraIcon className="h-9"/>
        <div>
          Event Package
        </div>
      </div>
      <div className="flex items-center space-x-2 font-serif text-lg text-red-900">
        <MusicalNoteIcon className="h-7"/>
        <div>
          Musical Concert
        </div>
      </div>
      <div className="flex items-center space-x-2 font-serif text-lg text-red-900">
        <CalendarIcon className="h-7"/>
        <div>
          Wedding Day
        </div>
      </div>
      <div className="flex items-center space-x-2 font-serif text-lg text-red-900">
        <CakeIcon className="h-7"/>
        <div>
          Party / Banquet
        </div>
      </div>
      <div className="text-3xl text-red-900 font-serif font-bold tracking-widest py-6">
        9 8 0 H K D / H R
      </div>
      <BookingButton text={"/services/booking"}/>
      <div className="flex-col space-y-8 pt-8">
        <div className="flex flex-col space-y-4 h-56">
          <div className="text-lg text-red-900 font-serif">
            <div className="flex items-center space-x-2 -translate-x-3">
              <CheckBadgeIcon className="h-8"/>
              <div>
                What is included?
              </div>
            </div>
          </div>
          <ul className="list-disc list-inside text-red-900 font-serif space-y-2">
            <li>
              60-min Photo-Videography shooting^
            </li>
            <li>
              30+ Essentially Retouched Photo^
            </li>
            <li>
              15 Photos Will be Finely Tuned^
            </li>
            <li>
              30-Day High-Speed Cloud Access
            </li>
            <li>
              30-sec ~ 8-min Video Post-Production
            </li>
            <li>
              All Photos will be returned within 7 Days
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="text-lg text-red-900 font-serif">
            <div className="flex items-center space-x-2 -translate-x-3">
              <AdjustmentsHorizontalIcon className="h-8"/>
              <div>
                Add-Ons Services (Optionals)
              </div>
            </div>
          </div>
          <ul className="list-disc list-inside text-red-900 font-serif space-y-2">
            <li>
              Make-Up & Hair-Style Artist (+240HKD)^
            </li>
            <li>
              Islands District Additional fee (+80HKD)
            </li>
            <li>
              Behind The Scene Video (+480HKD)
            </li>
            <li>
              Extra 20 Finely Tuned Photo (+120HKD)
            </li>
            <li>
              Extend Video Duration (+280HKD / min)
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="text-red-800 opacity-60">
            #Booking at minimum of 2 hours
          </div>
          <div className="text-red-800 opacity-60">
            ^For every session
          </div>
        </div>
      </div>
    </div>
  )
}