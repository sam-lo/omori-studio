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
    <div className="flex flex-col space-y-2">
      <Link href="services"
            className="flex items-center space-x-2 text-2xl text-red-900 font-medium mb-4 -translate-x-2">
        <CubeIcon className="h-8"/>
        <div>
          Services
        </div>
      </Link>
      <Link href="services" className="text-xl text-red-800">
        Still Photography
      </Link>
      <Link href="services" className="text-xl text-red-800">
        Event Package
      </Link>
      <Link href="services" className="text-xl text-red-800">
        Business Combination
      </Link>
      <Link href="services" className="text-xl text-red-800">
        Non-Profit Project
      </Link>
    </div>
  )
}

function AboutUsSession() {
  return (
    <div className="flex flex-col space-y-2">
      <Link href="/" className="flex items-center space-x-2 text-2xl text-red-900 font-medium mb-4 -translate-x-2">
        <InformationCircleIcon className="h-8"/>
        <div>
          About Us
        </div>
      </Link>
      <Link href="/" className="text-xl text-red-800">
        Our Story
      </Link>
      <Link href="/" className="text-xl text-red-800">
        Press Release
      </Link>
      <Link href="/" className="text-xl text-red-800">
        Contact Us
      </Link>
      <Link href="/" className="text-xl text-red-800">
        Join Omori
      </Link>
    </div>
  )
}

function GallerySession() {
  return (
    <div className="flex flex-col space-y-2">
      <Link href="/" className="flex items-center space-x-2 text-2xl text-red-900 font-medium mb-4 -translate-x-2">
        <BuildingLibraryIcon className="h-8"/>
        <div>
          Gallery
        </div>
      </Link>
      <Link href="/" className="text-xl text-red-800">
        Musical Concerts
      </Link>
      <Link href="/" className="text-xl text-red-800">
        Pre-Wedding & Big-Day
      </Link>
      <Link href="/" className="text-xl text-red-800">
        Fine-Art Portraits
      </Link>
      <Link href="/" className="text-xl text-red-800">
        Business Event
      </Link>
    </div>
  )
}

function CollaborationsSession() {
  return (
    <div className="flex flex-col space-y-2">
      <Link href="/" className="flex items-center space-x-2 text-2xl text-red-900 font-medium mb-4 -translate-x-2">
        <UserGroupIcon className="h-8"/>
        <div>
          Collaborations
        </div>
      </Link>
      <Link href="/" className="text-xl text-red-800">
        Our Partners
      </Link>
      <Link href="/" className="text-xl text-red-800">
        How it works
      </Link>
      <Link href="/" className="text-xl text-red-800">
        Partners Review
      </Link>
      <Link href="/" className="text-xl text-red-800">
        Join Partnership
      </Link>
    </div>
  )
}