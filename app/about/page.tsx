import {
  ChatBubbleOvalLeftEllipsisIcon,
  CloudArrowDownIcon,
  NewspaperIcon,
  UserPlusIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function AboutUs() {

  let ourAim:string = "Omori Studio is a media production company that was established in Hong Kong in 2024. Our main objective is to provide our valued customers with a hassle-free and seamless media production experience. Unlike other production studios, we do not have any hidden charges or fees, nor do we rely on complex quotation counting methods. Instead, we offer a range of plans to choose from that are tailored to your specific requirements, and we take care of everything else for you."

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 p-24 selection:bg-red-200">
        <div className="text-4xl font-serif text-red-900">
          All good memory should be preserved
        </div>
        <div className="text-2xl font-serif text-red-900 opacity-80">
          Let us freeze that precious moment for you
        </div>
        <div className="text-center text-xl font-serif text-red-700 w-3/4 py-4">
          {ourAim}
        </div>
        <div className="text-3xl font-serif text-red-900 pt-10 pb-6">
          Learn More
        </div>
        <div className="flex text-red-800">
          <div
            className="flex flex-col items-center justify-center px-12 py-6 rounded-full hover:bg-red-100 bg-opacity-80 transition duration-300">
            <CloudArrowDownIcon className="h-12"/>
            <div className="text-xl">
              Resources
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center px-12 py-6 rounded-full hover:bg-red-100 bg-opacity-80 transition duration-300">
            <NewspaperIcon className="h-12"/>
            <div className="text-xl">
              Press Release
            </div>
          </div>
          <a
            href="/about/contact"
            className="flex flex-col items-center justify-center px-12 py-6 rounded-full hover:bg-red-100 bg-opacity-80 transition duration-300">
            <ChatBubbleOvalLeftEllipsisIcon className="h-12"/>
            <div className="text-xl">
              Contact Us
            </div>
          </a>
          <a
            href="/about/career"
            className="flex flex-col items-center justify-center px-14 py-6 rounded-full hover:bg-red-100 bg-opacity-80 transition duration-300">
            <UserPlusIcon className="h-12"/>
            <div className="text-xl">
              Join Omori
            </div>
          </a>
        </div>
      </div>
    </>
  )
}