import Link from "next/link";
import Services from "@/app/services/page";

export default function Footer() {
  return (
    <>
      <div className="flex space-x-16 m-24">
        <ServiceSession />
        <AboutUsSession />
        <GallerySession />
        <CollaborationsSession />
      </div>
    </>
  )
}

function ServiceSession() {
  return (
    <div className="flex flex-col space-y-2">
      <Link href="services" className="text-xl text-red-900 font-medium mb-8">
        Services
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
      <Link href="/" className="text-xl text-red-900 font-medium mb-8">
        About Us
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
      <div className="text-xl text-red-900 font-medium mb-8">
        Gallery
      </div>
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
      <div className="text-xl text-red-900 font-medium mb-8">
        Collaborations
      </div>
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