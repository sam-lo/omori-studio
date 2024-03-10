import {BuildingLibraryIcon, CubeIcon, InformationCircleIcon, UserGroupIcon} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center space-x-16 m-24 selection:bg-red-200">
        <ServiceSession/>
        <GallerySession/>
        <AboutUsSession/>
        <CollaborationsSession/>
      </div>
    </>
  )
}

function ServiceSession() {
  return (
    <div className="flex flex-col space-y-2 text-red-800">
      <a href="/services" className="flex items-center space-x-2 text-xl text-red-900 font-medium mb-2 -translate-x-2">
        <CubeIcon className="h-6"/>
        <div>
          Services
        </div>
      </a>
      <a href="/services">
        Still Photography
      </a>
      <a href="/services">
        Event Package
      </a>
      <a href="/services">
        Business Quotation
      </a>
      <a href="/services">
        Non-Profit Project
      </a>
    </div>
  )
}

function GallerySession() {
  return (
    <div className="flex flex-col space-y-2 text-red-800">
      <a href="/" className="flex items-center space-x-2 text-xl text-red-900 font-medium mb-2 -translate-x-2">
        <BuildingLibraryIcon className="h-6"/>
        <div>
          Gallery
        </div>
      </a>
      <a href="/">
        Musical Concerts
      </a>
      <a href="/">
        Pre-Wedding & Big-Day
      </a>
      <a href="/">
        Fine-Art Portraits
      </a>
      <a href="/">
        Business Event
      </a>
    </div>
  )
}

function AboutUsSession() {
  return (
    <div className="flex flex-col space-y-2 text-red-800">
      <a href="/about" className="flex items-center space-x-2 text-xl text-red-900 font-medium mb-2 -translate-x-2">
        <InformationCircleIcon className="h-6"/>
        <div>
          About Us
        </div>
      </a>
      <a href="/">
        Download Resource
      </a>
      <a href="/">
        Press Release
      </a>
      <a href="/">
        Contact Us
      </a>
      <a href="/about/career">
        Join Omri Studio
      </a>
    </div>
  )
}


function CollaborationsSession() {
  return (
    <div className="flex flex-col space-y-2 text-red-800">
      <a href="/" className="flex items-center space-x-2 text-xl text-red-900 font-medium mb-2 -translate-x-2">
        <UserGroupIcon className="h-6"/>
        <div>
          Collaborations
        </div>
      </a>
      <a href="/">
        Our Partners
      </a>
      <a href="/">
        How it works
      </a>
      <a href="/">
        Partners Review
      </a>
      <a href="/">
        Join Partnership
      </a>
    </div>
  )
}