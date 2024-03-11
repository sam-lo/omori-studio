import {EnvelopeIcon, PaperAirplaneIcon} from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-6 p-24 selection:bg-red-200">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-4xl font-serif text-red-900">
            Encountered trouble or confused of our services?
          </div>
          <div className="text-3xl font-serif text-red-800">
            Feel free to contact us for supports
          </div>
        </div>
        <div className="flex flex-wrap gap-4 py-12">
          <MailButton/>
          <InstagramButton/>
          <WhatsAppButton />
        </div>
      </div>
    </>
  )
}

function MailButton() {
  return (
    <a
      href="mailto:info@omori.studio"
      className="group flex flex-col items-center justify-center space-y-4 outline outline-4 outline-red-400 hover:bg-red-400 rounded-3xl pl-9 py-4">
      <div className="flex items-center justify-center space-x-2 text-red-400 group-hover:text-white">
        <EnvelopeIcon className="h-10 group-hover:opacity-0 transition duration-300 ease-in-out"/>
        <div className="text-2xl font-serif group-hover:-translate-x-10 duration-300 ease-in-out">
          info@omori.studio
        </div>
        <PaperAirplaneIcon
          className="h-9 opacity-0 group-hover:-translate-x-9 group-hover:opacity-100 transition duration-500 ease-in-out"/>
      </div>
    </a>
  )
}

function InstagramButton() {
  return (
    <a
      href="https://instagram.com/omori.studio"
      className="group flex flex-col items-center justify-center space-y-5 outline outline-4 outline-red-400 hover:bg-red-400 rounded-3xl pl-11 py-4">
      <div className="flex items-center justify-center space-x-2 text-red-400 group-hover:text-white">
        <div className="group-hover:opacity-0 transition duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
        <div className="text-2xl font-serif group-hover:-translate-x-10 duration-300 ease-in-out">
          @omori.studio
        </div>
        <PaperAirplaneIcon
          className="h-10 opacity-0 group-hover:-translate-x-9 group-hover:opacity-100 transition duration-500 ease-in-out"/>
      </div>
    </a>
  )
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+85255460314"
      className="group flex flex-col items-center justify-center space-y-5 outline outline-4 outline-red-400 hover:bg-red-400 rounded-3xl pl-11 py-4">
      <div className="flex items-center justify-center space-x-2 text-red-400 group-hover:text-white">
        <div className="group-hover:opacity-0 transition duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </div>
        <div className="text-2xl font-serif group-hover:-translate-x-10 duration-300 ease-in-out">
          Omori Studio
        </div>
        <PaperAirplaneIcon
          className="h-10 opacity-0 group-hover:-translate-x-9 group-hover:opacity-100 transition duration-500 ease-in-out"/>
      </div>
    </a>
  )
}