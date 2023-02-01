import "../App.css";
import {
  DatabaseIcon,
  CheckCircleIcon,
  ArrowsExpandIcon,
  ClockIcon,
  UserIcon,
  VariableIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";
import React from "react";

let Latex = require("react-latex");

const Home = () => {
  const equation =
    "In equilateral triangle $XYZ$ with side length $10$, define points $A, B$ on $XY,$ points $C, D$ on $YZ,$ and points $E, F$ on $ZX$ such that $ABDE$ and $ACEF$ are rectangles. The area of hexagon $ABCDEF$ can be written as $sqrt{x}$ for some positive integer $x$. Find $x$.";
  return (
    <div className=" min-h-screen overflow-hidden ">
      <div className="relative -mt-20 min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 dark:from-red-500 dark:to-red-800 duration-150 ease-in-out drop-shadow-md">
        <div className="flex pt-28 sm:pt-12 lg:pt-[4.5rem] 2xl:pt-24 max-w-7xl mx-8 lg:mx-auto flex-1  flex-col justify-center">
          <div className="sm:h-16 w-16"></div>

          <div className="grid lg:grid-cols-2 relative z-10">
            <div className="hidden 2xl:flex items-center justify-center my-auto ">
              <img
                className="w-[70%] 2xl:w-[100%] hover:scale-105 duration-150 ease-in-out transform select-none"
                src={require("../images/atlas-circles.png")}
                alt="OMMC Circles Spaced"
              ></img>
            </div>
            <div className="2xl:hidden flex items-center justify-center my-auto ">
              <img
                className="mx-auto lg:w-[85%] xl:w-[60%] w-[100%] hover:scale-105 duration-150 ease-in-out transform select-none"
                src={require("../images/atlas-centered.png")}
                alt="OMMC Circles"
              ></img>
            </div>
            <div className="my-auto text-center text-white xl:pr-12 2xl:pr-0">
              <div className="text-5xl md:text-7xl  font-extrabold lg:mt-0 mt-12 mb-10">
                OMMC Atlas
              </div>
              <div className="text-xl text-gray-100 md:text-3xl font-[550] my-4 sm:my-10">
                An online database of{" "}
                <span className="decoration-clone bg-gradient-to-r from-indigo-200 dark:from-red-300 via-pink-200 dark:via-red-300 to-yellow-100 dark:to-red-400 text-transparent bg-clip-text font-bold">
                  free, high-quality
                </span>{" "}
                resources to help you succeed in OMMC.
              </div>
              <a href="/atlas">
                <button className="mt-2 bg-orange-100 dark:bg-red-500 hover:bg-orange-200 dark:hover:bg-red-400 text-gray-900 dark:text-gray-100 hover:text-orange-800 dark:hover:text-red-800 hover:scale-105 duration-150 ease-in-out shadow-orange-300/50 dark:shadow-red-600/50 shadow-md font-semibold text-xl rounded-xl p-2 px-4">
                  View the Atlas{" "}
                  <ArrowCircleRightIcon className="inline mb-1 h-5 w-5 " />
                </button>
              </a>
            </div>
          </div>
          <div className="h-16 sm:h-24 w-16"></div>
          <div className="text-center pb-4 text-sm md:text-xl justify-end text-gray-100  font-semibold">
            Created by Kevin Liu for OMMC
          </div>
        </div>
      </div>
      <div className=" bg-slate-100 dark:bg-gray-900  ">
        <div className="h-12 sm:h-20 md:h-24"></div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="pl-4 border-l-[15px] border-red-700 reveal text-4xl md:text-5xl 2xl:text-6xl font-black text-gray-900 dark:text-gray-100">
            <div className="dark:hidden">
              More about <span className="text-red-600">OMMC</span>
            </div>
            <div className="invisible h-0 dark:visible dark:h-auto">
              More about <span className="text-red-600">OMMC</span>
            </div>
          </h2>
          <div className="h-6 2xl:h-12"></div>
          <p className="reveal text-lg md:text-xl 2xl:text-2xl font-medium max-w-4xl leading-relaxed text-gray-700 dark:text-gray-400">
            OMMC is a community of students who are passionate about math. This
            database seeks to collect and organize resources that will help you
            <span className="text-gray-900 font-bold dark:text-gray-200">
              {" "}
              solve problems
            </span>{" "}
            and learn more about math.
          </p>
          <div className="h-20 2xl:h-28"></div>
          <div className="reveal md:flex flex-col md:flex-row md:items-center">
            <div className=" block md:flex-1 md:w-0 relative md:pr-12 lg:pr-24">
              <div className="relative z-10">
                <div className="max-w-full overflow-hidden -mx-4">
                  <div className="min-w-[52rem] px-4">
                    <div className="flex flex-col mb-4">
                      <div className="overflow-x-auto -mx-4 px-4 -my-2 py-2">
                        <div className="align-middle inline-block min-w-full shadow overflow-hidden rounded-lg">
                          <div className="min-w-full select-none bg-white dark:bg-gray-800 shadow p-4 sm:p-6 rounded-2xl">
                            <div className="text-blue-700 dark:text-blue-400 font-medium text-sm mb-3">
                              {" "}
                              Year 1
                            </div>
                            <div className="shadow-inner bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded-lg overflow-hidden mb-3">
                              <p className=" p-2 min-h-[10rem] max-h-[10rem] overflow-auto text-sm md:text-base leading-6">
                                <Latex>{equation}</Latex>
                              </p>
                            </div>
                            <div className="flex mb-3">
                              <div className=" px-2 py-1 font-semibold text-white bg-gray-500 rounded-lg shadow-md focus:ring-opacity-75 duration-150 ease-in-out">
                                View Solution{" "}
                                <CheckCircleIcon className="inline mb-1 h-5 w-5 " />
                              </div>
                            </div>
                            <div className="flex mb-[0.625rem]">
                              <div className="px-2 py-1 font-semibold text-white bg-gray-500 rounded-lg shadow-md focus:ring-opacity-75 duration-150 ease-in-out">
                                View Problem{" "}
                                <ArrowsExpandIcon className="inline mb-1 h-5 w-5 " />
                              </div>
                            </div>
                            <button className="px-2 py-1 font-semibold rounded-lg shadow-md bg-yellow-300">
                              Number Theory
                            </button>{" "}
                            <button className="ml-[0.4rem] px-2 py-1 font-semibold rounded-lg shadow-md bg-green-300">
                              Elementary
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="absolute top-0 bottom-0 dark:w-56 w-36 bg-gradient-to-l from-slate-100 dark:from-gray-900 z-20 right-0 md:right-12 lg:right-24"></div>
              <div className="absolute left-0 right-1/2 top-0 bottom-0 inset-0 opacity-[35%] transform-gpu animate-blob1 rounded-full blur-2xl bg-red-200 dark:bg-red-800 hidden xl:block"></div>
            </div>
            <div className=" md:flex-1 mt-4 md:mt-0">
              <h3 className="font-bold sm:my-0 my-6 text-3xl sm:text-xl md:text-3xl text-gray-900 dark:text-gray-100">
                What is{" "}
                <div className="sm:inline inline-block rounded-lg px-1.5 bg-gradient-to-r from-red-600 to-red-700 text-white select-none">
                  OMMC Atlas?
                </div>
              </h3>
              <div className="flex md:text-lg mt-2 md:mt-4 text-gray-600 dark:text-gray-300">
                <div>
                  <div className="w-12 h-12 rounded-xl mb-4 bg-gradient-to-br flex items-center justify-center text-white from-red-600 to-red-800">
                    <DatabaseIcon className="w-6 h-6" />
                  </div>
                </div>{" "}
                <div className="ml-4 flex">
                  OMMC Atlas is a database of curated resources for students. It
                  contains a variety of former problems used on OMMC contests,
                  and is organized based on difficulty and topic.
                </div>
              </div>
            </div>
          </div>
          <div className="h-20 2xl:h-28"></div>
          <div className="reveal flex flex-col md:flex-row md:items-center">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className=" block md:flex-1 md:w-0 relative">
                <div className="relative z-10">
                  <div className="max-w-full overflow-hidden -mx-4">
                    <div className="min-w-[36rem] px-4">
                      <div className="-mx-4 sm:-mx-6 md:mx-0">
                        <div className="flex flex-col mb-4">
                          <div className="ml-4 md:ml-0 overflow-x-auto md:-mx-4 md:px-4 -my-2 py-2">
                            <div className="align-middle inline-block min-w-full shadow overflow-hidden rounded-2xl  ">
                              <div className=" select-none min-w-full bg-cover dark:bg-[url('https://wallpaperaccess.com/full/2578756.jpg')] bg-[url('https://img.freepik.com/free-photo/ripped-piece-white-paper_1194-7546.jpg?w=2000')] bg-white dark:bg-gray-700 shadow p-4 sm:p-6">
                                <img
                                  className="hover:scale-105 duration-150 ease-in-out"
                                  src={require("../images/atlas-hexagons.png")}
                                  alt="OMMC Hexagons"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="absolute top-0 bottom-0 dark:w-56 w-36 bg-gradient-to-l from-slate-100 dark:from-gray-900 z-20 right-0"></div>
                <div className="absolute left-0 right-1/2 top-0 bottom-0 inset-0 opacity-[35%] transform-gpu animate-blob1 rounded-full blur-2xl bg-orange-300 dark:bg-orange-800"></div>
              </div>
              <div className=" md:flex-1 md:order-first md:pr-12 lg:pr-24">
                <h3 className="sm:my-0 my-6 font-bold text-2xl sm:text-xl md:text-3xl text-gray-900 dark:text-gray-100">
                  What are the{" "}
                  <span className="lg:inline inline-block rounded-lg px-1.5 bg-gradient-to-r from-red-600 to-red-700 text-white select-none">
                    Questions
                  </span>{" "}
                  like?
                </h3>
                <div className="flex md:text-lg mt-2 md:mt-4 text-gray-600 dark:text-gray-300">
                  <div>
                    <div className="w-12 h-12 rounded-xl mb-4 bg-gradient-to-br flex items-center justify-center text-white from-red-600 to-red-800">
                      <VariableIcon className="w-6 h-6" />
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex">
                    OMMC questions are designed to be challenging. Depending on
                    the difficulty, they may be more involved than the typical
                    AMC 10/12 problem. However, they are still accessible to
                    students who are familiar with the AMC 10/12 format.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-12 md:h-20 2xl:h-24"></div>
          <div className="reveal flex flex-col md:flex-row md:items-center ">
            <div className="block md:flex-1 md:w-0 relative md:pr-12 lg:pr-24">
              <div className="relative z-10">
                <div className=" md:ml-0  mt-10 sm:my-10">
                  <iframe
                    title="DiscordLink"
                    src="https://discord.com/widget?id=796756256022200350&theme=dark"
                    className="drop-shadow-lg w-full h-[22rem] md:h-[30rem] rounded-xl select-none"
                    allowtransparency={"true"}
                    frameBorder="0"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  ></iframe>
                </div>
              </div>{" "}
              <div className="absolute left-0 right-1/2 top-0 bottom-0 inset-0 opacity-[35%] transform-gpu animate-blob1 rounded-full blur-2xl bg-[#3f4fc8] dark:bg-[#3f4fc8] hidden xl:block"></div>
            </div>
            <div className=" md:flex-1 md:mt-0 my-10">
              <h3 className="border-l-[10px] pb-2 sm:pb-0 border-[#5865F2] pl-3 text-gray-900 text-[2rem] md:text-3xl leading-8 font-bold tracking-tight dark:text-white">
                Join us on{" "}
                <span className="sm:inline inline-block rounded-lg px-1.5 bg-[#5865F2] text-white select-none">
                  Discord!
                </span>
              </h3>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 ">
                We highly recommend competitors join our Community Discord for
                the latest updates on OMMC.
              </p>
              <div>
                <div className="absolute mt-1 flex items-center justify-center h-12 w-12  text-white rounded-xl mb-4 bg-gradient-to-br  from-[#5865F2] to-[#3f4fc8]">
                  <ClockIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 max-w-2xl text-lg  text-gray-500 dark:text-gray-400 mt-7">
                  We will be posting updates and announcements on the Discord,
                  so make sure to join! We also host special events in addition
                  to the standard competitions.
                </p>
              </div>
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12  text-white rounded-xl mb-4 bg-gradient-to-br  from-[#5865F2] to-[#3f4fc8]">
                  <UserIcon className=" h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 max-w-2xl text-lg text-gray-500 dark:text-gray-400 mt-7">
                  The community Discord is a great way to meet other OMMC
                  members and interact with the OMMC team. The Discord is a
                  great place to ask for help or solve a problem.
                </p>
              </dt>
            </div>
          </div>{" "}
          <div className="h-12 md:h-20 2xl:h-24"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
