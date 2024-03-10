import * as React from "react";
import {
  UserGroupIcon,
  BuildingLibraryIcon,
  InformationCircleIcon,
  CubeIcon,
  ArrowLeftEndOnRectangleIcon,
  HomeIcon, LanguageIcon
} from "@heroicons/react/24/outline";

export default function Header() {

  return (
    <>
      <div className="flex text-sm items-center justify-between my-6 px-12 selection:bg-red-200">
        <a
          href="/"
          className="flex items-center space-x-2 hover:bg-red-400 text-red-950 hover:text-white font-bold hover:shadow-lg hover:shadow-red-300 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
          <HomeIcon className="h-6 stroke-2"/>
          <div>
            Home
          </div>
        </a>
        <div className="flex items-center justify-center space-x-12">
          <a
            href="/services"
            className="flex items-center space-x-2 hover:bg-red-400 text-red-950 hover:text-white hover:shadow-lg hover:shadow-red-300 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
            <CubeIcon className="h-6"/>
            <div>
              Services
            </div>
          </a>
          <div
            className="flex items-center space-x-2 hover:bg-red-400 text-red-950 hover:text-white hover:shadow-lg hover:shadow-red-300 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
            <BuildingLibraryIcon className="h-6"/>
            <div>
              Gallery
            </div>
          </div>
          <a
            href="/about"
            className="flex items-center space-x-2 hover:bg-red-400 text-red-950 hover:text-white hover:shadow-lg hover:shadow-red-300 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
            <InformationCircleIcon className="h-6"/>
            <div>
              About Us
            </div>
          </a>
          <div
            className="flex items-center space-x-2 hover:bg-red-400 text-red-950 hover:text-white hover:shadow-lg hover:shadow-red-300 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
            <UserGroupIcon className="h-6"/>
            <div>
              Collaborations
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="hover:bg-red-400 text-red-950 hover:text-white hover:shadow-lg hover:shadow-red-300 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
            <LanguageIcon className="h-6" />
          </div>
          <div
            className="flex items-center space-x-2 hover:bg-red-400 text-red-950 hover:text-white font-bold hover:shadow-lg hover:shadow-red-300 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
            <div>
              Sign in
            </div>
            <ArrowLeftEndOnRectangleIcon className="h-6 stroke-2"/>
          </div>
        </div>
      </div>
    </>
  );
}
