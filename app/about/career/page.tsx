import {ArrowsPointingOutIcon, GlobeAsiaAustraliaIcon} from "@heroicons/react/24/outline";

export default function Career() {
  return (
    <>
      <div className="flex flex-col justify-center space-y-4 p-24 selection:bg-red-200">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-4xl font-serif text-red-900">
            Working in OMORI STUDIO
          </div>
          <div className="text-3xl font-serif text-red-800">
            explore the world of wonder
          </div>
        </div>
        <Equal />
        <Diversity />
      </div>
    </>
  )
}

function Equal() {
  return (
    <div className="flex flex-col p-8">
      <div className="flex flex-col text-red-800 font-serif gap-4">
        <div className="flex justify-center gap-2">
          <GlobeAsiaAustraliaIcon className="h-8"/>
          <div className="text-2xl">
            Equal Opportunity
          </div>
        </div>
        <div className="text-xl text-center opacity-80">
          Omori Studio is committed to providing equal opportunities to all qualified applicants, regardless of their
          race, color, religion, sex, national origin, age, sexual orientation, or disability status.
        </div>
      </div>
    </div>
  )
}

function Diversity() {
  return (
    <div className="flex flex-col p-8">
      <div className="flex flex-col text-red-800 font-serif gap-4">
        <div className="flex justify-center gap-2">
          <ArrowsPointingOutIcon className="h-8"/>
          <div className="text-2xl">
            Our Commitment to Diversity
          </div>
        </div>
        <div className="flex text-xl text-center opacity-80">
          We believe that a diverse workforce is essential for innovation and success. We strive to create an inclusive environment where everyone feels valued and respected.
        </div>
      </div>
    </div>
  )
}