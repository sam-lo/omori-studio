'use client'
import * as React from "react"
import { Tab } from '@headlessui/react'
import SPPricing from "@/components/services/SPPricing";
import EPPricing from "@/components/services/EPPricing";
import { HandThumbUpIcon, PencilSquareIcon} from "@heroicons/react/24/outline";

export default function Services() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 sm:py-24 py-10 px-4 selection:bg-red-200">
        <div className="text-red-900 text-center text-4xl font-serif">
          Choose the plan that fits you the most
        </div>
        <div className="hidden sm:block text-red-900 opacity-60 font-serif text-xl">
          Start by picking the type of service you want
        </div>
        <div className="flex gap-2 sm:gap-4 sm:flex-row flex-col items-center text-red-900 text-xl font-serif mt-4">
          <div className="opacity-80 text-center">
            Working on a non-profit project?
          </div>
          <a
            href="https://wa.me/+85255460314"
            className="flex items-center gap-2 hover:bg-red-400 text-red-900 hover:text-white hover:shadow-lg hover:shadow-red-300 px-4 py-2 rounded-3xl ease-in-out transition duration-300">
            <HandThumbUpIcon className="h-8 stroke-2"/>
            <div>
              Let us help you for free!
            </div>
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-row flex-col gap-8 sm:py-12 pb-8">
          <SPPricing/>
          <EPPricing/>
        </div>
        <div className="block sm:hidden sm:py-12 pb-8">
          <Tab.Group>
            <Tab.List className="flex justify-evenly gap-1 rounded-xl p-3 font-serif text-lg text-red-900">
              <Tab className="bg-red-100/95 px-4 py-3 rounded-2xl">Photography</Tab>
              <Tab className="bg-red-100/95 px-4 py-3 rounded-2xl">Event Package</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <SPPricing/>
              </Tab.Panel>
              <Tab.Panel>
                <EPPricing/>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8">
          <div className="text-red-900 text-center opacity-60 text-2xl font-serif">
            Cannot find the plan that fits you?
          </div>
          <a
            href="https://wa.me/+85255460314"
            className="flex items-center font-serif space-x-2 hover:bg-red-400 outline outline-2 outline-red-400 text-xl font-medium text-red-600 hover:text-white hover:shadow-lg hover:shadow-red-200 px-4 py-2 rounded-2xl ease-in-out transition duration-300">
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