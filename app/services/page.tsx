import * as React from "react";
import SPPricing from "@/components/services/SPPricing";
import EPPricing from "@/components/services/EPPricing";
import { HandThumbUpIcon, PencilSquareIcon} from "@heroicons/react/24/outline";

export default function Services() {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-6 py-24 selection:bg-red-200">
        <div className="text-red-900 text-4xl font-serif">
          Choose the plan that fits you the most
        </div>
        <div className="text-red-900 opacity-60 font-serif text-xl">
          Start by picking the type of service you want
        </div>
        <div className="flex space-x-4 items-center text-red-900 text-xl font-serif">
          <div className="opacity-80">
            Are you working on a non-profit project?
          </div>
          <a
            href="/service"
            className="flex items-center space-x-2 hover:bg-red-400 text-red-900 hover:text-white hover:shadow-lg hover:shadow-red-300 px-4 py-2 rounded-3xl ease-in-out transition duration-300">
            <HandThumbUpIcon className="h-8 stroke-2"/>
            <div>
              Let us help you for free!
            </div>
          </a>
        </div>
        <div className="flex space-x-8 py-12">
          <SPPricing/>
          <EPPricing/>
        </div>
        <div className="flex items-center space-x-8">
          <div className="text-red-900 opacity-60 text-2xl font-serif">
            Cannot find the plan that fits you?
          </div>
          <a
            href="https://wa.me/+85255460314"
            className="flex w-fit items-center space-x-2 hover:bg-red-400 outline outline-2 outline-red-400 text-xl font-medium text-red-600 hover:text-white hover:shadow-lg hover:shadow-red-200 px-4 py-2 rounded-full ease-in-out transition duration-300">
            <PencilSquareIcon className="h-8"/>
            <div>
              Get Your Personalize Quote
            </div>
          </a>
        </div>
      </div>
    </>
  )
}