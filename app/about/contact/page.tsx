import {EnvelopeIcon, PaperAirplaneIcon} from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-12 p-24 selection:bg-red-200">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-4xl font-serif text-red-900">
            Encountered trouble or confused of our services?
          </div>
          <div className="text-3xl font-serif text-red-800">
            Feel free to contact us for supports
          </div>
        </div>
        <div className="flex space-x-4">
          <MailButton />
          <InstagramButton />
        </div>
      </div>
    </>
  )
}

function MailButton() {
  return (
    <a
      href="mailto:info@omori.studio"
      className="group flex flex-col items-center justify-center space-y-4 outline outline-4 outline-red-400 hover:bg-red-400 rounded-3xl pl-10 py-4">
      <div className="flex items-center justify-center space-x-2 text-red-400 group-hover:text-white">
        <EnvelopeIcon className="h-10 group-hover:opacity-0 transition duration-300 ease-in-out"/>
        <div className="text-2xl font-serif group-hover:-translate-x-10 duration-300 ease-in-out">
          info@omori.studio
        </div>
        <PaperAirplaneIcon
          className="h-10 opacity-0 group-hover:-translate-x-9 group-hover:opacity-100 transition duration-500 ease-in-out"/>
      </div>
    </a>
  )
}

function InstagramButton() {
  return (
    <a
      href="https://instagram.com/omori.studio"
      className="group flex flex-col items-center justify-center space-y-4 outline outline-4 outline-red-400 hover:bg-red-400 rounded-3xl pl-10 py-4">
      <div className="flex items-center justify-center space-x-2 text-red-400 group-hover:text-white">
        <EnvelopeIcon className="h-10 group-hover:opacity-0 transition duration-300 ease-in-out"/>
        <div className="text-2xl font-serif group-hover:-translate-x-10 duration-300 ease-in-out">
          @omori.studio
        </div>
        <PaperAirplaneIcon
          className="h-10 opacity-0 group-hover:-translate-x-9 group-hover:opacity-100 transition duration-500 ease-in-out"/>
      </div>
    </a>
  )
}