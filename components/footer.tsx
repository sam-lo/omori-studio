"use client"
import {
  BuildingLibraryIcon,
  CubeIcon,
  InformationCircleIcon,
  UserGroupIcon,
  ChevronUpIcon
} from "@heroicons/react/24/outline";
import {Disclosure} from "@headlessui/react";

export default function Footer() {
  return (
    <>
      <div className="hidden sm:flex flex-col gap-8 mb-2 mt-16 mx-16 selection:bg-red-200">
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
      <MobileAccordion/>
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

function MobileAccordion() {
  return (
    <div className="w-full px-4 pb-8 block sm:hidden">
      <Disclosure>
        {({open}) => (
          <>
            <Disclosure.Button
              className="flex w-full justify-between items-center rounded-xl pr-4 pl-4 py-3 text-left text-lg font-medium text-red-800 focus:outline-none focus-visible:ring focus-visible:ring-red-500/75">
              <span>Service</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-red-800`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 py-2 text-sm text-red-800">
              <div className="flex flex-col space-y-3">
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({open}) => (
          <>
            <Disclosure.Button
              className="flex w-full justify-between items-center rounded-xl pr-4 pl-4 py-3 text-left text-lg font-medium text-red-800 focus:outline-none focus-visible:ring focus-visible:ring-red-500/75">
              <span>Gallery</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-red-800`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 py-2 text-sm text-red-800">
              <div className="flex flex-col space-y-3">
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({open}) => (
          <>
            <Disclosure.Button
              className="flex w-full justify-between items-center rounded-xl pr-4 pl-4 py-3 text-left text-lg font-medium text-red-800 focus:outline-none focus-visible:ring focus-visible:ring-red-500/75">
              <span>About Us</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-red-800`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 py-2 text-sm text-red-800">
              <div className="flex flex-col space-y-3">
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({open}) => (
          <>
            <Disclosure.Button
              className="flex w-full justify-between items-center rounded-xl pr-4 pl-4 py-3 text-left text-lg font-medium text-red-800 focus:outline-none focus-visible:ring focus-visible:ring-red-500/75">
              <span>Collaborations</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-red-800`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 py-2 text-sm text-red-800">
              <div className="flex flex-col space-y-3">
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}