import React, { useContext } from "react";
// We import NavLink to utilize the react router.
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { SignUpContext } from "../../context/signUpContext.tsx";

function Navbar(props) {
  const { signInStatus, username } = useContext(SignUpContext);

  return (
    <nav className="relative bg-slate-50 dark:bg-gray-900 border-0 shadow-md z-20 transition-height ">
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
                <span className="text-2xl font-extrabold text-gray-800 dark:text-white dark:text-transparent bg-clip-text bg-gradient-to-r dark:from-red-500 dark:to-red-600 ">
                  <span className="hidden sm:inline">OMMC </span>Atlas
                </span>
                <div className="md:hidden text-[0.5rem] dark:text-white text-gray-800 border text-center border-gray-800 dark:border-white rounded-full ">
                  Version 2.0
                </div>
              </div>
            </a>
          </div>

          <div className="text-gray-500 dark:text-white">
            {signInStatus ? (
              <div className="nav-item ">
                <a className="nav-link md:text-lg" href="/profile">
                  Welcome,{" "}
                  <span className="font-bold dark:text-red-600 text-gray-900 ">
                    {username}
                  </span>
                </a>
              </div>
            ) : (
              <div className="nav-item">
                <a
                  className="nav-link text-lg font-bold dark:text-gray-200 dark:hover:text-gray-100 hover:text-gray-600"
                  href="/signup"
                >
                  Sign Up
                </a>
              </div>
            )}
          </div>
          <div className="pl-4 md:mr-2 flex-shrink-0 ml-auto flex justify-self-end items-center select-none ">
            <button
              className="flex bg-gray-300 dark:bg-gray-800 rounded-xl px-1 py-1 hover:bg-gray-400  text-white dark:hover:text-gray-800 hover:text-orange-300 dark:hover:bg-gray-700"
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
