import {WrenchScrewdriverIcon} from "@heroicons/react/24/outline";

export default function Maintenance() {
  return (
    <>
    <div className="flex items-center justify-center gap-4 sm:p-24 p-10 selection:bg-red-200">
      <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
        <WrenchScrewdriverIcon className="text-red-900 h-24 my-4"/>
        <div className="sm:text-4xl text-3xl text-center text-red-900 font-serif">
          Reparo! normally it should be fixed soon.
        </div>
        <div className="sm:text-3xl text-xl text-center text-red-800 font-serif">
          Please check back soon.
        </div>
      </div>
    </div>
    </>
  )
}