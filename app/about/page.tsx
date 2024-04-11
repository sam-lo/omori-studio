import {
  ChatBubbleOvalLeftEllipsisIcon,
  CloudArrowDownIcon,
  NewspaperIcon, QuestionMarkCircleIcon,
  UserPlusIcon
} from "@heroicons/react/24/outline";

export default function AboutUs() {

  let ourAim:string = "Omori Studio is a media production company that was established in Hong Kong in 2024. Our main objective is to provide our valued customers with a hassle-free and seamless media production experience. Unlike other production studios, we do not have any hidden charges or fees, nor do we rely on complex quotation counting methods. Instead, we offer a range of plans to choose from that are tailored to your specific requirements, and we take care of everything else for you."

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-center sm:p-24 p-8 selection:bg-red-200">
        <div className="text-4xl font-serif text-center text-red-900">
          All good memory should be preserved
        </div>
        <div className="text-lg sm:text-2xl font-serif text-red-900 opacity-80">
          Let us freeze your precious moment
        </div>
        <div className="text-center text-lg sm:text-xl font-serif text-red-700 sm:w-3/4 py-4">
          {ourAim}
        </div>
        <div className="flex gap-2 items-center text-3xl font-serif text-red-900 pt-10 pb-6">
          <div className="">
            Learn More
          </div>
          <QuestionMarkCircleIcon className="sm:h-12 h-8"/>
        </div>
        <div className="flex justify-center -translate-x-2 sm:-translate-x-0 font-serif items-start gap-2 sm:gap-4 sm:flex-row sm:flex-wrap flex-col text-red-800">
          <a
            href="/maintenance"
            className="flex sm:flex-col gap-3 items-center justify-center px-6 py-3 sm:px-12 sm:py-6 rounded-full hover:bg-red-100 bg-opacity-80 transition duration-300">
            <CloudArrowDownIcon className="sm:h-12 h-10"/>
            <div className="text-2xl">
              Resources
            </div>
          </a>
          <a
            href="/maintenance"
            className="flex sm:flex-col gap-3 items-center justify-center px-6 py-3 sm:px-12 sm:py-6 rounded-full hover:bg-red-100 bg-opacity-80 transition duration-300">
            <NewspaperIcon className="sm:h-12 h-10"/>
            <div className="text-2xl">
              Press Release
            </div>
          </a>
          <a
            href="/about/contact"
            className="flex sm:flex-col gap-3 items-center justify-center px-6 py-3 sm:px-12 sm:py-6 rounded-full hover:bg-red-100 bg-opacity-80 transition duration-300">
            <ChatBubbleOvalLeftEllipsisIcon className="sm:h-12 h-10"/>
            <div className="text-2xl">
              Contact Us
            </div>
          </a>
          <a
            href="/about/career"
            className="flex sm:flex-col gap-3 items-center justify-center px-6 py-3 sm:px-14 sm:py-6 rounded-full hover:bg-red-100 bg-opacity-80 transition duration-300">
            <UserPlusIcon className="sm:h-12 h-10"/>
            <div className="text-2xl">
              Join Omori
            </div>
          </a>
        </div>
      </div>
    </>
  )
}