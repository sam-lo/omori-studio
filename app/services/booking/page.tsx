"use client";
import {
  ClipboardDocumentListIcon, MinusCircleIcon,
  PaperAirplaneIcon, PlusCircleIcon
} from "@heroicons/react/24/outline";
import {useState} from "react";
import moment from "moment";

export default function BookingForm() {

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [extend, setExtend] = useState(false);
  const [makeup, setMakeup] = useState(false);
  const [bts, setBTS] = useState(false);
  const [extra, setExtra] = useState(false);
  const [island, setIsland] = useState(false);
  const [hour, setHour] = useState("");

  const [serviceType, setServiceType] = useState("")

  let isValidated = (serviceType == "" || fullName == "" || phoneNumber.length !== 8 || email == "" || !email.includes("@") || !email.includes(".") || email.length < 5)

  let estimatedCost = (serviceType == "Still Photography" ? 1680 : (Number(hour) * 980)) + (extend ? 880 : 0) + (makeup ? (serviceType == "Event Package" ? (Number(hour) * 440) : 880) : 0) + (bts ? 880 : 0) + (extra ? 120 : 0) + (island ? 180 : 0)

  let WhatsAppLink = "https://wa.me/85255460314?text=I+would+like+to+have+a+official+quotation" + (serviceType == "" ? "" : ("+of+"+ (serviceType) + (serviceType == "Event Package" ? "+for+" + hour + "+hours" : "") + ((extend || makeup || bts || island || extra) ? ("+with+" + (extend ? "Extend 60 minutes," : "") + (makeup ? "+Make-up Artist," : "") + (bts ? "+Behind the scene," : "") + (extra ? "+Extra Photos, " : "") + (island ? "+Island District, " : "") + "+add-ons") : "")))
  const [error, setError] = useState([]);

  const date = moment().format("MMMM DD YYYY");
  const time = moment().format("HH mm ss");

  function handleAddHour() {
    if (Number(hour) < 12) {
      setHour(String(Number(hour) + 1))
    }
  }

  function handleSubtractHour() {
    if (Number(hour) > 2) {
      setHour(String(Number(hour) - 1))
    }
  }

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    console.log("Date:", date)
    console.log("Time:", time)
    console.log("Service Type", serviceType)
    console.log("Hour:", hour)
    console.log("Full name:", fullName)
    console.log("Phone Number:", phoneNumber)
    console.log("Email:", email)
    console.log("Extend", extend)
    console.log("Makeup", makeup)
    console.log("BTS", bts)
    console.log("Extra", extra)
    console.log("island", extra)

    const res = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        date,
        time,
        serviceType,
        hour,
        fullName,
        phoneNumber,
        email,
        extend,
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
      <form>
        <div className="flex flex-col items-center gap-6 sm:p-24 p-5 selection:bg-red-200">
          <div className="text-red-900 text-4xl font-serif">
            Service Booking
          </div>
          <div>

          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl text-red-800 opacity-80">
              An Email will be sent for further action.
            </div>
            <div className="text-lg sm:text-xl text-red-800 opacity-80">
              Invoice will be delivered by email.
            </div>
          </div>
          <div>
            <div className="text-center text-lg sm:text-2xl text-red-800 opacity-80 font-serif">
              Access all our services with one account
            </div>
            <div className="flex flex-col text-center items-center text-lg opacity-60 text-red-900">
              We uses server located in European Union member country.
            </div>
            <div className="flex flex-col text-center items-center text-lg opacity-60 text-red-900">
              Your privacy is our priority concern.
            </div>
          </div>
          {(serviceType !== "") ? <div className="text-xl text-red-800 font-semibold">
            You are booking for {serviceType}.
          </div> : null}
          <div className="grid grid-cols-1 gap-4 justify-items-start pb-8">
            <div className="text-red-800 text-opacity-80 sm:px-6 translate-y-2">
              Choose your desired plan
            </div>
            <div className="relative justify-self-center hover:scale-[1.02] transition-all duration-500">
              <input type="radio" id="still" name="package" value="Still Photography"
                     onChange={e => {
                       setServiceType(e.target.value);
                       setHour("0")
                       setExtend(false)
                     }}
                     className="hidden peer"/>
              <label
                className="w-80 sm:w-96 cursor-pointer flex bg-red-100 bg-opacity-70 peer-checked:bg-opacity-100 flex-row justify-between items-center rounded-2xl p-4 peer-focus:outline-none peer-checked:ring peer-checked:ring-red-800 peer-checked:ring-opacity-40 peer-checked:border-transparent peer-checked:bg-red-100"
                htmlFor="still">
                <div className="flex flex-row justify-between items-center w-[380px]">
                  <div>
                    <div className="text-red-800 font-bold">Still Photography</div>
                    <div className="text-red-800 text-opacity-40 text-sm">All-in-one Photography</div>
                  </div>
                  <div className="font-bold text-red-800">1680 HKD</div>
                </div>
              </label>
            </div>
            <div className="relative justify-self-center hover:scale-[1.02] transition-all duration-500">
              <input type="radio" id="event" name="package" value="Event Package"
                     onChange={e => {
                       setServiceType(e.target.value);
                       setHour("2")
                       setExtend(false)
                     }}
                     className="hidden peer"/>
              <label
                className="w-80 sm:w-96 cursor-pointer flex bg-red-100 bg-opacity-70 peer-checked:bg-opacity-100 flex-row justify-between items-center rounded-2xl p-4 peer-focus:outline-none peer-checked:ring peer-checked:ring-red-800 peer-checked:ring-opacity-40 peer-checked:border-transparent peer-checked:bg-red-100"
                htmlFor="event">
                <div className="flex flex-row justify-between items-center w-[380px]">
                  <div>
                    <div className="text-red-800 font-bold">Event Package</div>
                    <div className="text-red-800 text-opacity-40 text-sm">Photo-Videography Package</div>
                  </div>
                  <div className="font-bold text-red-800">980 HKD/Hr</div>
                </div>
              </label>
            </div>
            {
              (serviceType == "Event Package") ?
                <div
                  className="flex bg-red-100 text-3xl bg-opacity-80 p-4 rounded-2xl w-80 sm:w-96 text-red-800 font-semibold justify-self-center gap-24 justify-center items-center">
                  <MinusCircleIcon className={"" + "h-12 cursor-pointer hover:scale-[1.02] transition-all duration-500"}
                                   onClick={handleSubtractHour}/>
                  <div className="flex select-none">
                    {hour}
                  </div>
                  <PlusCircleIcon className="h-12 cursor-pointer hover:scale-[1.02] transition-all duration-500"
                                  onClick={handleAddHour}/>
                </div> : null
            }

            {/*<div className="place-self-center">
              <div className="">
                <div className="text-red-800 opacity-80 m-2">
                  Full name
                </div>
                <input type="text"
                       id="name"
                       onChange={(e) => setFullName(e.target.value)}
                       value={fullName}
                       className="placeholder-red-800 placeholder:opacity-40 placeholder:italic text-red-800 text-xl py-2 px-4 mt-1 block w-80 sm:w-96 rounded-xl bg-red-100 border-0 border-transparent focus:border-red-400 focus:ring-0 peer"
                       placeholder="e.g. Leonardo da Vinci"/>
              </div>
              <div className="">
                <div className="text-red-800 opacity-80 m-2">
                  Phone Number
                </div>
                <input type="tel"
                       id="phone"
                       onChange={(e) => setPhoneNumber(e.target.value)}
                       value={phoneNumber}
                       className="placeholder-red-800 placeholder:opacity-40 placeholder:italic text-red-800 text-xl py-2 px-4 mt-1 block w-80 sm:w-96 rounded-xl bg-red-100 border-0 border-transparent focus:border-red-400 focus:ring-0 peer"
                       placeholder="e.g. 9 8 7 6 - 5 4 3 2"
                       maxLength={8}
                       inputMode="numeric"/>
              </div>
              <div className="">
                <div className="text-red-800 opacity-80 m-2">
                  Personal Email
                </div>
                <input type="email"
                       id="name"
                       onChange={(e) => setEmail(e.target.value)}
                       value={email}
                       className="placeholder-red-800 placeholder:opacity-40 placeholder:italic text-red-800 text-xl py-2 px-4 mt-1 block w-80 sm:w-96 rounded-xl bg-red-100 border-0 border-transparent focus:border-red-400 focus:ring-0 peer"
                       placeholder="e.g. leonardo@example.com"/>
              </div>
            </div>*/}
            <div className="flex flex-col py-8 gap-4 place-self-center">
              <div className="text-red-800 opacity-80 mx-2">
                Add-Ons (Optionals)
              </div>
              {serviceType == "Event Package" ? null :
                <div className="relative hover:scale-[1.02] transition-all duration-500">
                  <input
                    className="text-red-800 text-opacity-80 focus:ring-transparent peer border-transparent rounded-lg w-6 h-6 absolute top-7 left-4 transition-all duration-700"
                    id="extend"
                    type="checkbox"
                    onChange={(e) => setExtend(e.target.checked)}
                  />
                  <label
                    className="w-80 sm:w-96 cursor-pointer flex bg-red-100 bg-opacity-70 peer-checked:bg-opacity-100 flex-row justify-between items-center rounded-2xl p-4 peer-focus:outline-none peer-checked:ring peer-checked:ring-red-800 peer-checked:ring-opacity-40 peer-checked:border-transparent peer-checked:bg-red-100"
                    htmlFor="extend"
                  >
                    <div className="flex flex-row justify-between items-center w-[380px] ml-10 mr-4">
                      <div>
                        <div className="text-red-800 font-bold">Extend 60 minute</div>
                        <div className="text-red-800 text-opacity-40 text-sm">Total of 180-min</div>
                      </div>
                      <div className="font-bold text-red-800">+880 HKD</div>
                    </div>
                  </label>
                </div>
              }
              <div className="relative hover:scale-[1.02] transition-all duration-500">
                <input
                  className="text-red-800 text-opacity-80 focus:ring-transparent peer border-transparent rounded-lg w-6 h-6 absolute top-7 left-4 transition-all duration-700"
                  id="makeup"
                  type="checkbox"
                  onChange={(e) => setMakeup(e.target.checked)}
                />
                <label
                  className="w-80 sm:w-96 cursor-pointer flex bg-red-100 bg-opacity-70 peer-checked:bg-opacity-100 flex-row justify-between items-center rounded-2xl p-4 peer-focus:outline-none peer-checked:ring peer-checked:ring-red-800 peer-checked:ring-opacity-40 peer-checked:border-transparent peer-checked:bg-red-100"
                  htmlFor="makeup"
                >
                  <div className="flex flex-row justify-between items-center w-[380px] ml-10 mr-4">
                    <div>
                      <div className="text-red-800 font-bold">{serviceType == "Event Package" ? "Make-up Artist^" : "Make-up Artist"}</div>
                      <div className="text-red-800 text-opacity-40 text-sm">Styling Artist Service</div>
                    </div>
                    <div
                      className="font-bold text-red-800">{serviceType == "Event Package" ? "+440 HKD" : "+880 HKD"}</div>
                  </div>
                </label>
              </div>
              <div className="relative hover:scale-[1.02] transition-all duration-500">
                <input
                  className="text-red-800 text-opacity-80 focus:ring-transparent peer border-transparent rounded-lg w-6 h-6 absolute top-7 left-4 transition-all duration-700"
                  id="bts"
                  type="checkbox"
                  onChange={(e) => setBTS(e.target.checked)}
                />
                <label
                  className="w-80 sm:w-96 cursor-pointer flex bg-red-100 bg-opacity-70 peer-checked:bg-opacity-100 flex-row justify-between items-center rounded-2xl p-4 peer-focus:outline-none peer-checked:ring peer-checked:ring-red-800 peer-checked:ring-opacity-40 peer-checked:border-transparent peer-checked:bg-red-100"
                  htmlFor="bts"
                >
                  <div className="flex flex-row justify-between items-center w-[380px] ml-10 mr-4">
                    <div>
                      <div className="text-red-800 font-bold">Behind the scene</div>
                      <div className="text-red-800 text-opacity-40 text-sm">Include an extra video</div>
                    </div>
                    <div className="font-bold text-red-800">+880 HKD</div>
                  </div>
                </label>
              </div>
              <div className="relative hover:scale-[1.02] transition-all duration-500">
                <input
                  className="text-red-800 text-opacity-80 focus:ring-transparent peer border-transparent rounded-lg w-6 h-6 absolute top-7 left-4 transition-all duration-700"
                  id="island"
                  type="checkbox"
                  onChange={(e) => setIsland(e.target.checked)}
                />
                <label
                  className="w-80 sm:w-96 cursor-pointer flex bg-red-100 bg-opacity-70 peer-checked:bg-opacity-100 flex-row justify-between items-center rounded-2xl p-4 peer-focus:outline-none peer-checked:ring peer-checked:ring-red-800 peer-checked:ring-opacity-40 peer-checked:border-transparent peer-checked:bg-red-100"
                  htmlFor="island"
                >
                  <div className="flex flex-row justify-between items-center w-[380px] ml-10 mr-4">
                    <div>
                      <div className="text-red-800 font-bold">Island District</div>
                      <div className="text-red-800 text-opacity-40 text-sm">Island District Fee</div>
                    </div>
                    <div className="font-bold text-red-800">+180 HKD</div>
                  </div>
                </label>
              </div>
              <div className="relative hover:scale-[1.02] transition-all duration-500">
                <input
                  className="text-red-800 text-opacity-80 focus:ring-transparent peer border-transparent rounded-lg w-6 h-6 absolute top-7 left-4 transition-all duration-700"
                  id="extra"
                  type="checkbox"
                  onChange={(e) => setExtra(e.target.checked)}
                />
                <label
                  className="w-80 sm:w-96 cursor-pointer flex bg-red-100 bg-opacity-70 peer-checked:bg-opacity-100 flex-row justify-between items-center rounded-2xl p-4 peer-focus:outline-none peer-checked:ring peer-checked:ring-red-800 peer-checked:ring-opacity-40 peer-checked:border-transparent peer-checked:bg-red-100"
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
              {serviceType == "Event Package" ? <div className="text-red-800 opacity-40 mx-2">
                ^ Calculated Per Hour
              </div> : null}
            </div>
            <div
              className="justify-self-center text-center text-3xl text-red-800 transition-all duration-300 font-serif">
              Estimated Total Cost: {estimatedCost} HKD
            </div>
          </div>
            <a href={WhatsAppLink}
              //onClick={handleSubmit}
              //disabled={isValidated}
              className="disabled:cursor-not-allowed disabled:grayscale group flex flex-col justify-self-center items-center justify-center gap-5 outline outline-2 outline-red-400 hover:bg-red-400 rounded-2xl pl-8 py-2">
              <div className="flex items-center justify-center space-x-2 text-red-400 group-hover:text-white">
                <div className="group-hover:opacity-0 transition duration-300 ease-in-out">
                  <ClipboardDocumentListIcon className="h-8"/>
                </div>
                <div className="text-2xl font-serif group-hover:-translate-x-10 duration-300 ease-in-out">
                  {serviceType == "" ? 'Invalid' : 'Submit'}
                </div>
                <PaperAirplaneIcon
                  className="h-8 opacity-0 group-hover:-translate-x-9 group-hover:opacity-100 transition duration-500 ease-in-out"/>
              </div>
            </a>
        </div>
      </form>
    </>
  )
}

// function NameValidation(props: any) {
//   if (props.fullName == "") {
//     return (
//       <div
//         className="mt-2 mx-2 text-sm text-red-500">
//         Please enter your name
//       </div>
//     )
//   }
// }
//
// function PhoneNumberValidation(props: any) {
//   if (props.phoneNumber.length !== 8) {
//     return (
//       <div
//         className="mt-2 mx-2 text-sm text-red-500">
//         Please enter a valid 8-digit phone number
//       </div>
//     );
//   }
// }
//
// function EmailValidation(props: any) {
//   if (props.email == "" || props.email.includes("@") == false || props.email.includes(".") == false || props.email.length < 5) {
//     return (
//       <div
//         className="mt-2 mx-2 text-sm text-red-500">
//         Please enter a valid email address
//       </div>
//     )
//   }
// }
//
// function ServiceTypeValidation(props: any) {
//   if (props.serviceType == "") {
//     return (
//       <div
//         className="mx-8 text-sm text-red-500">
//         Please Choose the one plan
//       </div>
//     )
//   }
// }
//
// function HourOver12(props: any) {
//   if (props.hour == "12") {
//     return (
//       <div
//         className="mx-8 text-sm text-red-500">
//         It is free after 12 hours until the 14th
//       </div>
//     )
//   }
// }