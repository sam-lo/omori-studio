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
  const [makeup, setMakeup] = useState(false);
  const [bts, setBTS] = useState(false);
  const [extra, setExtra] = useState(false);
  const [island, setIsland] = useState(false);

  const [error, setError] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("Full name:", fullName)
    console.log("Phone Number:", phoneNumber)
    console.log("Email:", email)
    console.log("Makeup", makeup)
    console.log("BTS", bts)
    console.log("Extra", extra)

    const res = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        fullName,
        phoneNumber,
        email,
        makeup,
        bts,
        extra,
        island,
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
          <div className="flex flex-col text-center items-center text-red-900 opacity-60">
            <div className="text-xl font-semibold">
              You are booking for still photography service.
            </div>
            <div className="text-xl">
              All your data is safely stored in European Union member country.
            </div>
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
                     placeholder="e.g. Leonardo da Vinci"/>
              <NameValidation fullName={fullName}/>
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
                     maxLength={8}
                     inputMode="numeric"/>
              <PhoneNumber phoneNumber={phoneNumber}/>
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
                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
              <EmailValidation email={email} />
            </div>
            <div className="flex flex-col py-8 gap-4">
              <div className="text-red-800 opacity-80 mx-2">
                Add-Ons (Optionals)
              </div>
              <div className="relative">
                <input
                  className="text-red-800 text-opacity-80 focus:ring-transparent peer border-transparent rounded-lg w-6 h-6 absolute top-7 left-4 transition-all duration-700"
                  id="makeup"
                  type="checkbox"
                  onChange={(e) => setMakeup(e.target.checked)}
                />
                <label
                  className="w-96 cursor-pointer flex bg-red-100 bg-opacity-70 peer-checked:bg-opacity-100 flex-row justify-between items-center rounded-2xl p-4 peer-focus:outline-none peer-checked:ring peer-checked:ring-red-800 peer-checked:ring-opacity-40 peer-checked:border-transparent peer-checked:bg-red-100"
                  htmlFor="makeup"
                >
                  <div className="flex flex-row justify-between items-center w-[380px] ml-10 mr-4">
                    <div>
                      <div className="text-red-800 font-bold">Make-up Artist</div>
                      <div className="text-red-800 text-opacity-40 text-sm">Make-up and Hair-Styling</div>
                    </div>
                    <div className="font-bold text-red-800">+480 HKD</div>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  className="text-red-800 text-opacity-80 focus:ring-transparent peer border-transparent rounded-lg w-6 h-6 absolute top-7 left-4 transition-all duration-700"
                  id="bts"
                  type="checkbox"
                  onChange={(e) => setBTS(e.target.checked)}
                />
                <label
                  className="w-96 cursor-pointer flex bg-red-100 bg-opacity-70 peer-checked:bg-opacity-100 flex-row justify-between items-center rounded-2xl p-4 peer-focus:outline-none peer-checked:ring peer-checked:ring-red-800 peer-checked:ring-opacity-40 peer-checked:border-transparent peer-checked:bg-red-100"
                  htmlFor="bts"
                >
                  <div className="flex flex-row justify-between items-center w-[380px] ml-10 mr-4">
                    <div>
                      <div className="text-red-800 font-bold">Behind the scene</div>
                      <div className="text-red-800 text-opacity-40 text-sm">Include a video during shooting</div>
                    </div>
                    <div className="font-bold text-red-800">+480 HKD</div>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  className="text-red-800 text-opacity-80 focus:ring-transparent peer border-transparent rounded-lg w-6 h-6 absolute top-7 left-4 transition-all duration-700"
                  id="extra"
                  type="checkbox"
                  onChange={(e) => setExtra(e.target.checked)}
                />
                <label
                  className="w-96 cursor-pointer flex bg-red-100 bg-opacity-70 peer-checked:bg-opacity-100 flex-row justify-between items-center rounded-2xl p-4 peer-focus:outline-none peer-checked:ring peer-checked:ring-red-800 peer-checked:ring-opacity-40 peer-checked:border-transparent peer-checked:bg-red-100"
                  htmlFor="extra"
                >
                  <div className="flex flex-row justify-between items-center w-[380px] ml-10 mr-4">
                    <div>
                      <div className="text-red-800 font-bold">Extra Photos</div>
                      <div className="text-red-800 text-opacity-40 text-sm">20 Extra refined photos</div>
                    </div>
                    <div className="font-bold text-red-800">+120 HKD</div>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  className="text-red-800 text-opacity-80 focus:ring-transparent peer border-transparent rounded-lg w-6 h-6 absolute top-7 left-4 transition-all duration-700"
                  id="island"
                  type="checkbox"
                  onChange={(e) => setIsland(e.target.checked)}
                />
                <label
                  className="w-96 cursor-pointer flex bg-red-100 bg-opacity-70 peer-checked:bg-opacity-100 flex-row justify-between items-center rounded-2xl p-4 peer-focus:outline-none peer-checked:ring peer-checked:ring-red-800 peer-checked:ring-opacity-40 peer-checked:border-transparent peer-checked:bg-red-100"
                  htmlFor="island"
                >
                  <div className="flex flex-row justify-between items-center w-[380px] ml-10 mr-4">
                    <div>
                      <div className="text-red-800 font-bold">Island District</div>
                      <div className="text-red-800 text-opacity-40 text-sm">Service charge for Island District</div>
                    </div>
                    <div className="font-bold text-red-800">+120 HKD</div>
                  </div>
                </label>
              </div>
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
      </form>
    </>
  )
}

function NameValidation(props: any) {

  if (props.fullName == "") {
    return (
      <div
        className="mt-2 mx-2 text-sm text-red-500">
        Please enter your name
      </div>
    )
  }
}

function PhoneNumber(props: any) {

  if (props.phoneNumber.length !== 8) {
    return (
      <div
        className="mt-2 mx-2 text-sm text-red-500">
        Please enter a valid 8-digit phone number
      </div>
    )
  }
}

function EmailValidation(props: any) {

  if (props.email == "" || props.email.includes("@") == false || props.email.includes(".") == false || props.email.length < 5) {
    return (
      <div
        className="mt-2 mx-2 text-sm text-red-500">
        Please enter a valid email address
      </div>
    )
  }
}