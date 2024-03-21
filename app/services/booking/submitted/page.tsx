"use client"
import * as React from "react";
import {DocumentCheckIcon} from "@heroicons/react/24/outline";

export default function Submitted() {

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-8 py-24 selection:bg-red-200">
        <div className="flex items-center text-5xl font-serif text-red-900 gap-4">
          <DocumentCheckIcon className="h-12"/>
          <div>
            Form Submitted
          </div>
        </div>
        <div className="text-xl font-serif text-red-900 text-center">
          <div>
            You should be receiving a confirmation email shortly within one business day
          </div>
          This is your order reference code: {}
        </div>
      </div>
    </>
  )
}