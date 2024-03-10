import {
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  CalendarDaysIcon,
  CameraIcon,
  CheckBadgeIcon,
  HeartIcon,
  UserCircleIcon
} from "@heroicons/react/24/outline";
import * as React from "react";

export default function EPPricing() {
  return (
    <div
      className="flex flex-col space-y-2 p-12 bg-white rounded-3xl shadow-2xl shadow-red-200 hover:scale-[1.02] transition ease-in-out duration-700">
      <div className="flex items-center space-x-2 font-serif text-2xl text-red-900 pb-4">
        <CameraIcon className="h-9"/>
        <div>
          Still Photography
        </div>
      </div>
      <div className="flex items-center space-x-2 font-serif text-lg text-red-900">
        <UserCircleIcon className="h-7"/>
        <div>
          Fine-art Portrait
        </div>
      </div>
      <div className="flex items-center space-x-2 font-serif text-lg text-red-900">
        <AcademicCapIcon className="h-7"/>
        <div>
          Graduation Day
        </div>
      </div>
      <div className="flex items-center space-x-2 font-serif text-lg text-red-900">
        <HeartIcon className="h-7"/>
        <div>
          Pre-Wedding
        </div>
      </div>
      <div className="text-3xl text-red-900 font-serif font-bold tracking-widest py-6">
        1 6 8 0 H K D
      </div>
      <a
        href="/"
        className="flex w-fit items-center space-x-2 hover:bg-red-400 outline outline-2 outline-red-400 text-xl font-medium text-red-600 hover:text-white hover:shadow-lg hover:shadow-red-200 px-4 py-2 rounded-full ease-in-out transition duration-300">
        <CalendarDaysIcon className="h-10"/>
        <div>
          Make Your Booking Now
        </div>
      </a>
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
              120 Minutes of Photo Shooting
            </li>
            <li>
              50+ Essentially Retouched Photo
            </li>
            <li>
              30 Photo will be Finely Tuned
            </li>
            <li>
              30-Day High-Speed Cloud Access
            </li>
            <li>
              All Photo will be returned within 5 days
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
              Make-Up & Hair-Style Artist (+480HKD)
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
          </ul>
        </div>
      </div>
    </div>
  )
}