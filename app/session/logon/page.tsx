"use client";
import {
  ArrowLeftEndOnRectangleIcon,
  CheckIcon,
  UserPlusIcon
} from "@heroicons/react/24/outline";
import * as React from "react";
import {useState} from "react";

export default function LogOn() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let isValid = ((username && password) !== "")

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="flex flex-col items-center sm:gap-6 gap-2 sm:p-24 p-5 selection:bg-red-200">
        <div className="flex items-center gap-2 text-red-900">
          <div className="font-serif text-4xl">
            Log On
          </div>
          <ArrowLeftEndOnRectangleIcon className="h-8"/>
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
            Username
          </div>
          <input type="text"
                 id="name"
                 onChange={(e) => setUsername(e.target.value)}
                 value={username}
                 className="placeholder-red-800 placeholder:opacity-40 placeholder:italic text-red-800 text-xl py-2 px-4 mt-1 block w-96 rounded-xl bg-red-100 border-0 border-transparent focus:border-red-400 focus:ring-0 peer"
                 placeholder="Enter Username"/>
        </div>
        <div className="place-self-center">
          <div className="text-red-800 opacity-80 mx-2">
            Password
          </div>
          <input type="text"
                 id="name"
                 onChange={(e) => setPassword(e.target.value)}
                 value={password}
                 className="placeholder-red-800 placeholder:opacity-40 placeholder:italic text-red-800 text-xl py-2 px-4 mt-1 block w-96 rounded-xl bg-red-100 border-0 border-transparent focus:border-red-400 focus:ring-0 peer"
                 placeholder="Enter Password"/>
        </div>
        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className="disabled:cursor-not-allowed disabled:grayscale group flex flex-col justify-self-center items-center justify-center gap-5 outline outline-2 outline-red-400 hover:bg-red-400 rounded-2xl pl-8 py-2 my-6">
          <div className="flex items-center justify-center space-x-2 text-red-400 group-hover:text-white">
            <div className="group-hover:opacity-0 transition duration-300 ease-in-out">
              <ArrowLeftEndOnRectangleIcon className="h-8"/>
            </div>
            <div className="text-2xl font-serif group-hover:-translate-x-10 duration-300 ease-in-out">
              {isValid ? 'Submit' : 'Invalid'}
            </div>
            <CheckIcon
              className="h-8 opacity-0 group-hover:-translate-x-9 group-hover:opacity-100 transition duration-500 ease-in-out"/>
          </div>
        </button>
        <div className="flex items-center justify-center sm:flex-row flex-col gap-4">
          <div className="text-red-900 text-center opacity-60 text-xl sm:text-2xl font-serif">
            Have not created an account yet?
          </div>
          <a
            href="/session/signup"
            className="opacity-70 hover:opacity-100 flex justify-center w-fit items-center font-serif space-x-2 hover:bg-red-400 outline outline-2 outline-red-400 text-xl font-medium text-red-600 hover:text-white hover:shadow-lg hover:shadow-red-200 px-4 py-2 rounded-2xl ease-in-out transition duration-300">
            <UserPlusIcon className="h-8"/>
            <div>
              Sign Up Now
            </div>
          </a>
        </div>
      </div>
    </>
  )
}