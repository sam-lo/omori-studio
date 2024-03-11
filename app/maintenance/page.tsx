import {WrenchScrewdriverIcon} from "@heroicons/react/24/outline";

export default function Maintenance() {
  return (
    <>
    <div className="flex items-center justify-center space-y-4 p-24 selection:bg-red-200">
      <div className="flex flex-col justify-center items-center space-y-4">
        <WrenchScrewdriverIcon className="text-red-900 h-24 my-4"/>
        <div className="text-4xl text-red-900 font-serif">
          Reparo! normally it should be fixed soon.
        </div>
        <div className="text-3xl text-red-800 font-serif">
          Please check back soon.
        </div>
      </div>
    </div>
    </>
  )
}