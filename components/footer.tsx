import Link from "next/link";
import Services from "@/app/services/page";
import {BuildingLibraryIcon, CubeIcon, InformationCircleIcon, UserGroupIcon} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center space-x-16 m-24">
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
      <Link href="service" className="flex items-center space-x-2 text-xl text-red-900 font-medium mb-2 -translate-x-2">
        <CubeIcon className="h-6"/>
        <div>
          Services
        </div>
      </Link>
      <Link href="services">
        Still Photography
      </Link>
      <Link href="services">
        Event Package
      </Link>
      <Link href="services">
        Business Combination
      </Link>
      <Link href="services">
        Non-Profit Project
      </Link>
    </div>
  )
}

function GallerySession() {
  return (
    <div className="flex flex-col space-y-2 text-red-800">
      <Link href="/" className="flex items-center space-x-2 text-xl text-red-900 font-medium mb-2 -translate-x-2">
        <BuildingLibraryIcon className="h-6"/>
        <div>
          Gallery
        </div>
      </Link>
      <Link href="/">
        Musical Concerts
      </Link>
      <Link href="/">
        Pre-Wedding & Big-Day
      </Link>
      <Link href="/">
        Fine-Art Portraits
      </Link>
      <Link href="/">
        Business Event
      </Link>
    </div>
  )
}

function AboutUsSession() {
  return (
    <div className="flex flex-col space-y-2 text-red-800">
      <Link href="/" className="flex items-center space-x-2 text-xl text-red-900 font-medium mb-2 -translate-x-2">
        <InformationCircleIcon className="h-6"/>
        <div>
          About Us
        </div>
      </Link>
      <Link href="/">
        Download Resource
      </Link>
      <Link href="/">
        Press Release
      </Link>
      <Link href="/">
        Contact Us
      </Link>
      <Link href="/">
        Join Omori Studio
      </Link>
    </div>
  )
}


function CollaborationsSession() {
  return (
    <div className="flex flex-col space-y-2 text-red-800">
      <Link href="/" className="flex items-center space-x-2 text-xl text-red-900 font-medium mb-2 -translate-x-2">
        <UserGroupIcon className="h-6"/>
        <div>
          Collaborations
        </div>
      </Link>
      <Link href="/">
        Our Partners
      </Link>
      <Link href="/">
        How it works
      </Link>
      <Link href="/">
        Partners Review
      </Link>
      <Link href="/">
        Join Partnership
      </Link>
    </div>
  )
}