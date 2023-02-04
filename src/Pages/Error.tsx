import "../App.css";
import React from "react";
import { ArrowSmRightIcon, EyeOffIcon } from "@heroicons/react/outline";

export default function NotFound(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        " min-h-screen bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 dark:from-red-900 dark:via-red-700 dark:to-red-500"
      }
    >
      <header className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center md:text-left md:pt-24">
        <div className="grid md:grid-cols-2 md:gap-8">
          <div className="my-auto ">
            <div className="text-3xl lg:text-4xl font-bold text-white pb-6 ">
              <EyeOffIcon className="h-12 w-12 drop-shadow-lg mx-auto md:mx-0 my-auto mb-4  bg-gradient-to-tr from-pink-300 via-red-300 to-orange-300 dark:from-red-500 dark:to-red-600 rounded-2xl p-2 text-white"></EyeOffIcon>
              This page doesn't exist!
            </div>
            <div className="text-lg lg:text-2xl md:max-w-xl font-semibold text-gray-100  pb-4 lg:pb-8">
              Sorry about that! Please visit our homepage to get to where you
              want to go.
            </div>
            <a href="/" className=" md:mr-4 ">
              <button className="flex md:mx-0 mx-auto drop-shadow-lg hover:scale-105 transform duration-150 ease-in-out pl-6 pr-5 py-3  md:text-lg border border-transparent text-base font-semibold rounded-xl bg-orange-100 dark:bg-red-600 dark:lg:bg-red-600 hover:bg-orange-200 dark:hover:bg-red-700 text-gray-900 dark:text-gray-100 hover:text-orange-800 dark:hover:text-red-400 select-none">
                Back to home{" "}
                <ArrowSmRightIcon className="h-5 w-5 my-auto ml-2"></ArrowSmRightIcon>
              </button>
            </a>
          </div>
          <div className="relative md:mt-0 mt-12">
            <img
              src="https://cdn.discordapp.com/attachments/1051864478918131732/1070074375694450808/nVLtbk0czrH8.png"
              className="select-none w-72 md:w-96 mx-auto object-contain relative z-10"
              alt="404"
            />
            <div className="absolute left-0 right-0 top-0 bottom-0 inset-0 opacity-[15%] transform-gpu animate-blob1 rounded-full blur-2xl bg-red-400 dark:bg-red-800 "></div>
          </div>
        </div>
      </header>
    </div>
  );
}
