import * as React from "react";
import SPPricing from "@/app/services/SPPricing";
import EPPricing from "@/app/services/EPPricing";

export default function Services() {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-6 py-24 selection:bg-red-200">
        <div className="text-red-950 text-5xl font-serif">
          Choose the plan that fits you the most
        </div>
        <div className="text-red-950 opacity-60 font-serif text-2xl">
          Start by picking the type of service you want
        </div>
        <div className="flex space-x-8 py-12">
          <SPPricing />
          <EPPricing />
        </div>
      </div>
    </>
  )
}