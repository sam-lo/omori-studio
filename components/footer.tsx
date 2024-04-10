import {BuildingLibraryIcon, CubeIcon, InformationCircleIcon, UserGroupIcon} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <>
      <div className="hidden lg:flex flex-col gap-8 mb-2 mt-16 mx-16 selection:bg-red-200">
        <div className="flex flex-wrap justify-center gap-16">
          <ServiceSession/>
          <GallerySession/>
          <AboutUsSession/>
          <CollaborationsSession/>
        </div>
        <div className="text-red-900 text-sm">
          © 2024 OMORI STUDIO. All rights reserved.
        </div>
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
      <a href="/maintenance"
         className="flex items-center space-x-2 text-xl text-red-900 font-medium mb-2 -translate-x-2">
        <BuildingLibraryIcon className="h-6"/>
        <div>
          Gallery
        </div>
      </a>
      <a href="/gallery">
        Musical Concerts
      </a>
      <a href="/gallery">
        Pre-Wedding & Big-Day
      </a>
      <a href="/gallery">
        Fine-Art Portraits
      </a>
      <a href="/gallery">
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
      <a href="/maintenance">
        Download Resource
      </a>
      <a href="/maintenance">
        Press Release
      </a>
      <a href="/about/contact">
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
      <a href="/maintenance"
         className="flex items-center space-x-2 text-xl text-red-900 font-medium mb-2 -translate-x-2">
        <UserGroupIcon className="h-6"/>
        <div>
          Collaborations
        </div>
      </a>
      <a href="/maintenance">
        Our Partners
      </a>
      <a href="/maintenance">
        How it works
      </a>
      <a href="/maintenance">
        Partners Review
      </a>
      <a href="/maintenance">
        Join Partnership
      </a>
    </div>
  )
}