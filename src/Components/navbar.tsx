import React, { useContext } from "react";
// We import NavLink to utilize the react router.
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { SignUpContext } from "../context/signUpContext";

function Navbar(props) {
  const { signInStatus, username } = useContext(SignUpContext);

  return (
    <nav className="relative bg-gray-900 border-0  border-b-red-700 border-b-8 z-20 transition-height duration-300 ease-in-out">
      <div className="max-w-7xl py-3 mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 ">
          <div className="flex-1 flex items-center  lg:items-stretch justify-start ">
            <a
              href="/"
              className="flex-shrink-0  flex items-center select-none transform duration-150 ease-in-out hover:scale-105 "
            >
              <img
                className="w-14 "
                src="https://cdn.discordapp.com/attachments/1044744976942243880/1045383726756003880/OMMC-Logo_1.png"
                alt="OMMCLogo"
              />
              <div className="ml-2 my-2">
                <span className="text-2xl font-extrabold text-white dark:text-transparent bg-clip-text bg-gradient-to-r dark:from-rose-300 dark:to-rose-500 ">
                  <span className="hidden sm:inline">OMMC </span>Atlas
                </span>
                <div className="text-[0.5rem]  text-white border text-center border-white rounded-full ">
                  Version 2.0
                </div>
              </div>
            </a>
          </div>

          <div className="text-white">
            {signInStatus ? (
              <div className="nav-item ">
                <a className="nav-link md:text-lg" href="/profile">
                  Welcome,{" "}
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-rose-500">
                    {username}
                  </span>
                </a>
              </div>
            ) : (
              <div className="nav-item">
                <a className="nav-link" href="/signup">
                  Sign Up
                </a>
              </div>
            )}
          </div>
          <div className="pl-4 md:mr-2 flex-shrink-0 ml-auto flex justify-self-end items-center select-none ">
            <button
              className="flex bg-gray-800 rounded-xl px-1 py-1 hover:bg-gray-700 duration-150 ease-in-out text-gray-400 hover:text-gray-300"
              onClick={() => props.setDark(!props.dark)}
            >
              <div className="h-9 w-9 flex items-center justify-center">
                {props.dark ? (
                  <MoonIcon className="h-6 w-6  text-red-600"></MoonIcon>
                ) : (
                  <SunIcon className="h-6 w-6 "></SunIcon>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
