import {
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  CameraIcon,
  CheckBadgeIcon,
  HeartIcon,
  UserCircleIcon
} from "@heroicons/react/24/outline";
import * as React from "react";
import BookingButton from "@/components/services/BookingButton";

export default function SPPricing() {
  return (
    <div
      className="flex flex-col space-y-2 p-10 sm:p-12 bg-white rounded-3xl shadow-2xl shadow-red-200 sm:hover:scale-[1.02] transition ease-in-out duration-700">
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
      <div className="text-2xl sm:text-3xl text-red-900 font-serif font-bold tracking-widest py-6">
        1 6 8 0 H K D
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
              Photos returned within 3 days
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
              Extra 60-min shooting time (+880HKD)
            </li>
            <li>
              Behind The Scene video (+880HKD)
            </li>
            <li>
              Make-Up & Hair-Style Artist (+480HKD)
            </li>
            <li>
              Islands District Additional fee (+180HKD)
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