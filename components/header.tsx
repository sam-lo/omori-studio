"use client"
import * as React from "react";
import {
  UserGroupIcon,
  BuildingLibraryIcon,
  InformationCircleIcon,
  CubeIcon,
  ArrowLeftEndOnRectangleIcon,
  HomeIcon, LanguageIcon, Bars3Icon
} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";

export default function Header() {

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 1024;

  return (
    <>
      <div className="flex text-sm items-center justify-between my-6 px-12 selection:bg-red-200">
        <a
          href="/"
          className="flex items-center space-x-2 hover:bg-red-400 text-red-800 hover:text-white font-bold hover:shadow-lg hover:shadow-red-300 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
          <HomeIcon className="h-6 stroke-2"/>
          <div>
            Home
          </div>
        </a>
        {isMobile ? null :
          <div className="flex items-center justify-center space-x-12">
            <a
              href="/services"
              className="flex items-center space-x-2 hover:bg-red-400 text-red-800 hover:text-white hover:shadow-lg hover:shadow-red-300 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
              <CubeIcon className="h-6"/>
              <div>
                Services
              </div>
            </a>
            <a
              href="/maintenance"
              className="flex items-center space-x-2 hover:bg-red-400 text-red-800 hover:text-white hover:shadow-lg hover:shadow-red-300 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
              <BuildingLibraryIcon className="h-6"/>
              <div>
                Gallery
              </div>
            </a>
            <a
              href="/about"
              className="flex items-center space-x-2 hover:bg-red-400 text-red-800 hover:text-white hover:shadow-lg hover:shadow-red-300 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
              <InformationCircleIcon className="h-6"/>
              <div>
                About Us
              </div>
            </a>
            <a
              href="/maintenance"
              className="flex items-center space-x-2 hover:bg-red-400 text-red-800 hover:text-white hover:shadow-lg hover:shadow-red-300 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
              <UserGroupIcon className="h-6"/>
              <div>
                Collaborations
              </div>
            </a>
          </div>
        }
        <div className="flex items-center space-x-2">
          {isMobile ? null :
            <div
              className="hover:bg-red-400 text-red-800 hover:text-white hover:shadow-lg hover:shadow-red-300 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
              <LanguageIcon className="h-6"/>
            </div>
          }
          <a
            href="/maintenance"
            className="flex items-center space-x-2 hover:bg-red-400 text-red-800 hover:text-white font-bold hover:shadow-lg hover:shadow-red-300 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
            <div>
              Sign in
            </div>
            <ArrowLeftEndOnRectangleIcon className="h-6 stroke-2"/>
          </a>
          <div
            className="hover:bg-red-400 text-red-800 hover:text-white hover:shadow-lg hover:shadow-red-300 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
            <Bars3Icon className="h-6"/>
          </div>
        </div>
      </div>
    </>
  );
}
