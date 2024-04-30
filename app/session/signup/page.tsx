"use client";
import {useState} from "react";
import {ClipboardDocumentListIcon, PaperAirplaneIcon, UserPlusIcon} from "@heroicons/react/24/outline";

export default function SignUp() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agreeToPolicy, setAgreeToPolicy] = useState(false);
  const [error, setError] = useState(false);

  let isValidated = (fullName == "" || phoneNumber.length !== 8 || email == "" || !email.includes("@") || !email.includes(".") || email.length < 5 || password.length < 8 || username.length < 5 || agreeToPolicy)

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    console.log("User:", username);
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("Full Name:", fullName);
    console.log("Phone Number:", phoneNumber);
    console.log("agreeToPolicy:", agreeToPolicy);

    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username,
        password,
        email,
        fullName,
        phoneNumber,
        agreeToPolicy,
      })
    });

    const {msg} = await res.json();
    setError(msg);

    console.log(error);
  }
  return (
    <>
      <form>
        <div className="flex flex-col items-center sm:gap-6 gap-2 sm:p-24 p-5 selection:bg-red-200">
          <div className="flex items-center text-red-900 gap-2">
            <div className="text-4xl font-serif">
              Sign Up
            </div>
            <UserPlusIcon className="h-8 stroke-2"/>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-center text-lg sm:text-2xl text-red-800 opacity-80 font-serif">
              Access all our services with one account
            </div>
            <div className="flex flex-col text-center items-center text-md opacity-60 text-red-900">
              <div>
                We uses server in European Union country.
              </div>
              <div>
                Your privacy is our priority concern.
              </div>
            </div>
          </div>
          <div className="place-self-center">
            <div className="text-red-800 opacity-80 mx-2">
              Full name
            </div>
            <input type="text"
                   id="name"
                   onChange={(e) => setFullName(e.target.value)}
                   value={fullName}
                   className="placeholder-red-800 placeholder:opacity-40 placeholder:italic text-red-800 text-xl py-2 px-4 mt-1 block w-80 sm:w-96 rounded-xl bg-red-100 border-0 border-transparent focus:border-red-400 focus:ring-0 peer"
                   placeholder="Leonardo da Vinci"/>
          </div>
          <div className="place-self-center">
            <div className="text-red-800 opacity-80 mx-2">
              Phone Number
            </div>
            <input type="tel"
                   id="phone"
                   onChange={(e) => setPhoneNumber(e.target.value)}
                   value={phoneNumber}
                   className="placeholder-red-800 placeholder:opacity-40 placeholder:italic text-red-800 text-xl py-2 px-4 mt-1 block w-80 sm:w-96 rounded-xl bg-red-100 border-0 border-transparent focus:border-red-400 focus:ring-0 peer"
                   placeholder="9 8 7 6 - 5 4 3 2"
                   maxLength={8}
                   inputMode="numeric"/>
          </div>
          <div className="place-self-center">
            <div className="text-red-800 opacity-80 mx-2">
              Personal Email
            </div>
            <input type="email"
                   id="name"
                   onChange={(e) => setEmail(e.target.value)}
                   value={email}
                   className="placeholder-red-800 placeholder:opacity-40 placeholder:italic text-red-800 text-xl py-2 px-4 mt-1 block w-80 sm:w-96 rounded-xl bg-red-100 border-0 border-transparent focus:border-red-400 focus:ring-0 peer"
                   placeholder="leonardo@example.com"/>
          </div>
          <div className="place-self-center">
            <div className="text-red-800 opacity-80 mx-2">
              Username {"(> 5 digits)"}
            </div>
            <input type="text"
                   id="name"
                   onChange={(e) => setUsername(e.target.value)}
                   value={username}
                   className="placeholder-red-800 placeholder:opacity-40 placeholder:italic text-red-800 text-xl py-2 px-4 mt-1 block w-80 sm:w-96 rounded-xl bg-red-100 border-0 border-transparent focus:border-red-400 focus:ring-0 peer"
                   placeholder="leonardo14520415"/>
          </div>
          <div className="place-self-center">
            <div className="text-red-800 opacity-80 mx-2">
              Password {"(> 8 digits)"}
            </div>
            <input type="text"
                   id="name"
                   onChange={(e) => setPassword(e.target.value)}
                   value={password}
                   className="placeholder-red-800 placeholder:opacity-40 placeholder:italic text-red-800 text-xl py-2 px-4 mt-1 block w-80 sm:w-96 rounded-xl bg-red-100 border-0 border-transparent focus:border-red-400 focus:ring-0 peer"
                   placeholder="iLoveItaly4Ever!"/>
          </div>
          <div className="relative hover:scale-[1.02] transition-all duration-500 my-6">
            <input
              className="text-red-800 text-opacity-80 focus:ring-transparent peer border-transparent rounded-lg w-6 h-6 absolute top-7 left-4 transition-all duration-700"
              id="island"
              type="checkbox"
              onChange={(e) => setAgreeToPolicy(e.target.checked)}
            />
            <label
              className="w-80 sm:w-96 cursor-pointer flex bg-red-100 bg-opacity-70 peer-checked:bg-opacity-100 flex-row justify-between items-center rounded-2xl p-4 peer-focus:outline-none peer-checked:ring peer-checked:ring-red-800 peer-checked:ring-opacity-40 peer-checked:border-transparent peer-checked:bg-red-100"
              htmlFor="island"
            >
              <div className="flex flex-row justify-between items-center w-[380px] ml-10 mr-4">
                <div>
                  <div className="text-red-800 font-bold">Agreement</div>
                  <div className="text-red-800 text-opacity-40 text-sm">to Omori Studio policy</div>
                </div>
                <div className="font-bold text-red-800">Required</div>
              </div>
            </label>
          </div>
          <button
            onClick={handleSubmit}
            disabled={isValidated}
            className="disabled:cursor-not-allowed disabled:grayscale group flex flex-col justify-self-center items-center justify-center gap-5 outline outline-2 my-6 outline-red-400 hover:bg-red-400 rounded-2xl pl-8 py-2">
            <div className="flex items-center justify-center space-x-2 text-red-400 group-hover:text-white">
              <div className="group-hover:opacity-0 transition duration-300 ease-in-out">
                <ClipboardDocumentListIcon className="h-8"/>
              </div>
              <div className="text-2xl font-serif group-hover:-translate-x-10 duration-300 ease-in-out">
                {isValidated ? 'Invalid' : 'Submit'}
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