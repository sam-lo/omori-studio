"use client";
import {
  ClipboardDocumentListIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/outline";
import {useState} from "react";

export default function BookingForm() {

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState([])

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("Full name:", fullName)
    console.log("Phone Number:", phoneNumber)
    console.log("Email:", email)

    const res = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        fullName,
        phoneNumber,
        email,
      }),
    });

    const {msg} = await res.json();
    setError(msg);

    console.log(error);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-6 py-24 selection:bg-red-200">
          <div className="text-red-900 text-4xl font-serif">
            Service Booking
          </div>
          <div className="text-red-900 opacity-60 font-serif text-xl">
            All your data is stored safely in server located in europe.
          </div>
          <div className="grid grid-cols-1 gap-4 justify-items-start py-8">
            <div className="">
              <div className="text-red-800 opacity-80 m-2">
                Full name
              </div>
              <input type="text"
                     onChange={(e) => setFullName(e.target.value)}
                     value={fullName}
                     className="placeholder-red-800 placeholder:opacity-40 placeholder:italic text-red-800 text-xl py-2 px-4 mt-1 block w-96 rounded-2xl bg-red-100 border-0 border-transparent focus:border-red-400 focus:ring-0 peer"
                     placeholder="e.g. Leonardo da Vinci" required/>
              <div
                className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Please enter your name
              </div>
            </div>
            <div className="">
              <div className="text-red-800 opacity-80 m-2">
                Phone Number
              </div>
              <input type="tel"
                     onChange={(e) => setPhoneNumber(e.target.value)}
                     value={phoneNumber}
                     className="placeholder-red-800 placeholder:opacity-40 placeholder:italic text-red-800 text-xl py-2 px-4 mt-1 block w-96 rounded-2xl bg-red-100 border-0 border-transparent focus:border-red-400 focus:ring-0 peer"
                     placeholder="9 8 7 6 - 5 4 3 2"
                     pattern="[0-9]{4}[0-9]{4}"
                     required/>
              <div
                className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Please enter a valid 8-digit Hong Kong S.A.R. Phone Number
              </div>
            </div>
            <div className="">
              <div className="text-red-800 opacity-80 m-2">
                Personal Email
              </div>
              <input type="email"
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}
                     className="placeholder-red-800 placeholder:opacity-40 placeholder:italic text-red-800 text-xl py-2 px-4 mt-1 block w-96 rounded-2xl bg-red-100 border-0 border-transparent focus:border-red-400 focus:ring-0 peer"
                     placeholder="e.g. leonardo@example.com"
                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                     required/>
              <div
                className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Please enter a valid email address
              </div>
            </div>
              <button
                className="group flex flex-col justify-self-center items-center justify-center gap-5 outline outline-2 outline-red-400 hover:bg-red-400 rounded-2xl pl-8 py-2 my-8">
                <div className="flex items-center justify-center space-x-2 text-red-400 group-hover:text-white">
                  <div className="group-hover:opacity-0 transition duration-300 ease-in-out">
                    <ClipboardDocumentListIcon className="h-8"/>
                  </div>
                  <div className="text-2xl font-serif group-hover:-translate-x-10 duration-300 ease-in-out">
                    Submit!
                  </div>
                  <PaperAirplaneIcon
                    className="h-8 opacity-0 group-hover:-translate-x-9 group-hover:opacity-100 transition duration-500 ease-in-out"/>
                </div>
              </button>
          </div>
        </div>
      </form>
    </>
  )
}