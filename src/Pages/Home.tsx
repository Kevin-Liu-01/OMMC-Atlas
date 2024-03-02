import "../App.css";
import {
  DatabaseIcon,
  CheckCircleIcon,
  ArrowsExpandIcon,
  ClockIcon,
  UserIcon,
  VariableIcon,
  ArrowCircleRightIcon,
  ArrowRightIcon,
  PuzzleIcon,
} from "@heroicons/react/outline";
import React from "react";

let Latex = require("react-latex");

const Home = () => {
  const equation =
    "There are a family of 5 siblings. They have a pile of candies, and are trying to split them up among themselves. If the 2 oldest siblings share the candy, they will have 1 candy left over. If the 3 oldest siblings share the candy, they will also have 1 left over. If all 5 siblings share the candy, they will also have 1 left over. What is the minimum amount of candy required for this to be true?";
  const equation2 =
    "Positive integers $a,b,c$ exist such that $a+b+c+1$, $a^2+b^2+c^2 +1$, $a^3+b^3+c^3+1,$ and $a^4+b^4+c^4+7459$ are all multiples of $p$ for some prime $p$. Find the sum of all possible values of $p$ less than $1000$.";
  const equation3 =
    "Let $P(x) = x^3 + 8x^2 - x + 3$ and let the roots of $P$ be $a, b,$ and $c.$ The roots of a monic polynomial $Q(x)$ are $ab - c^2, ac - b^2, bc - a^2.$ Find $Q(-1).$";
  return (
    <div className=" min-h-screen overflow-hidden ">
      <div className="relative -mt-20 min-h-min 2xl:h-[50rem] bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 dark:from-red-900 dark:via-red-700 dark:to-red-500 duration-150 ease-in-out drop-shadow-md">
        <div className="flex pt-28 sm:pt-12 lg:pt-[4.5rem] 2xl:pt-24 max-w-7xl mx-8 lg:mx-auto flex-1  flex-col justify-center">
          <div className="sm:h-16 w-16"></div>

          <div className="grid lg:grid-cols-2 relative z-10 mx-4 2xl:mx-0">
            <div className="hidden 2xl:flex items-center justify-center my-auto ">
              <img
                className="w-[70%] 2xl:w-[100%] hover:scale-105 duration-150 ease-in-out transform select-none"
                src={"/images/atlas-circles.png"}
                alt="OMMC Circles Spaced"
              ></img>
            </div>
            <div className="2xl:hidden flex items-center justify-center my-auto ">
              <img
                className="mx-auto lg:w-[85%] xl:w-[60%] w-auto max-h-80 lg:max-h-min hover:scale-105 duration-150 ease-in-out transform select-none"
                src={"/images/atlas-centered.png"}
                alt="OMMC Circles"
              ></img>
            </div>
            <div className="my-auto text-center text-white xl:pr-12 2xl:pr-0">
              <div className="text-4xl md:text-7xl  font-extrabold lg:mt-0 mt-12 mb-10">
                OMMC Atlas
              </div>
              <div className="text-xl text-gray-100 md:text-3xl font-[500] my-4 sm:my-10">
                An online database of{" "}
                <span className="decoration-clone bg-gradient-to-r dark:bg-gradient-to-t from-pink-200 via-orange-200 to-yellow-100 dark:from-orange-300 dark:via-yellow-300 dark:to-yellow-100 text-transparent bg-clip-text font-bold">
                  free, high-quality
                </span>{" "}
                resources to help you succeed in OMMC.
              </div>
              <a href="/atlas">
                <button className="mt-2 bg-orange-100 dark:bg-red-600 dark:lg:bg-red-800 hover:bg-orange-200 dark:hover:bg-red-800 text-gray-900 dark:text-gray-100 hover:text-orange-800 dark:hover:text-red-400 hover:scale-105 duration-150 ease-in-out md:shadow-red-600/80 shadow-md font-semibold text-xl rounded-xl p-2 px-4">
                  View the Atlas{" "}
                  <ArrowCircleRightIcon className="inline mb-1 h-5 w-5 " />
                </button>
              </a>
            </div>
          </div>
          <div className="h-16 sm:h-24 w-16"></div>
          <div className="text-center pb-4 text-sm lg:text-xl justify-end text-gray-100  font-semibold">
            Created by Kevin Liu for OMMC
          </div>
        </div>
      </div>
      <div className=" bg-slate-100 dark:bg-gray-900  ">
        <div className=" px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto ">
          <div className="h-12 sm:h-20 md:h-24 border-r-4 border-red-600 dark:border-red-700 "></div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="border-r-4 border-red-600 dark:border-red-700 ">
            <h2 className="border-l-[0.75rem] pl-4 border-red-700 text-4xl md:text-5xl 2xl:text-6xl font-black text-gray-900 dark:text-gray-100 ">
              <div className="inline">More about </div>
              <a href="https://www.ommcofficial.org/">
                <button className="mt-2 md:mt-0 hover:scale-[1.02] duration-150 rounded-2xl px-1.5 py-1.5 bg-gradient-to-r from-red-600 to-red-700 text-white select-none">
                  OMMC.
                </button>
              </a>
            </h2>
            <div className="h-6 2xl:h-12"></div>
            <div className="   text-lg md:text-xl 2xl:text-2xl font-medium max-w-4xl leading-relaxed text-gray-700 dark:text-gray-400 mr-4">
              <div className="bg-[#fafdff] dark:bg-gray-800 rounded-2xl pl-4 pt-3 p-2 ">
                <div className=" w-6 absolute overflow-hidden inline-block">
                  <div className="h-16 bg-red-700 dark:bg-red-700 rotate-45 transform origin-top-left" />
                </div>
                <p className="ml-8 ">
                  OMMC is a community of students who are passionate about math.
                  This database seeks to collect and organize resources that
                  will help you
                  <span className="text-gray-900 font-bold dark:text-gray-200">
                    {" "}
                    solve problems
                  </span>{" "}
                  and{" "}
                  <span className="text-gray-900 font-bold dark:text-gray-200">
                    learn more
                  </span>{" "}
                  about math, as well as practice for OMMC competitions.
                </p>
              </div>
            </div>
            <div className="h-14 sm:h-20 2xl:h-28"></div>
          </div>
          <div className=" relative  md:flex flex-col md:flex-row md:items-center border-b-4 border-r-4 border-red-600 dark:border-red-700 pb-14 rounded-br-2xl">
            <div className="absolute top-[-14px] right-[-14px] h-6 w-6 border-4 border-red-600 dark:border-red-700 rounded-full bg-gray-100 dark:bg-gray-900 z-30" />
            <div className=" block md:flex-1 md:w-0 relative md:pr-12 lg:pr-24">
              <div className="relative z-10">
                <div className="max-w-full overflow-hidden -mx-4">
                  <div className="min-w-[auto] px-4">
                    <div className="flex flex-col mb-4">
                      <div className="overflow-x-auto -mx-4 pl-4 md:pr-4 -my-2 py-2">
                        <div className="align-middle inline-block shadow rounded-2xl overflow-hidden ">
                          <div className="select-none bg-white dark:bg-gray-800  p-4 sm:p-6 rounded-2xl">
                            <div className="text-blue-700 dark:text-blue-400 font-medium text-md mb-3">
                              {" "}
                              Year 1
                            </div>
                            <div className="shadow-inner bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded-lg overflow-hidden mb-3">
                              <p className="relative p-2 min-h-[10rem] max-h-[10rem] overflow-auto scrollbar text-sm md:text-base leading-6">
                                <Latex>{equation}</Latex>
                              </p>
                            </div>
                            <a href="/view/613784946ca3eb0016f2e91d">
                              <div className="flex mb-3">
                                <button className=" px-2 py-1 font-semibold text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 focus:ring-opacity-75 duration-150 ease-in-out">
                                  View Solution{" "}
                                  <CheckCircleIcon className="inline mb-1 h-5 w-5 " />
                                </button>
                              </div>
                              <div className="flex mb-[0.625rem]">
                                <button className="px-2 py-1 font-semibold text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 focus:ring-opacity-75 duration-150 ease-in-out">
                                  View Problem{" "}
                                  <ArrowsExpandIcon className="inline mb-1 h-5 w-5 " />
                                </button>
                              </div>
                            </a>
                            <button className="px-2 py-1 font-semibold rounded-lg shadow-md bg-yellow-300 text-yellow-800">
                              Number Theory
                            </button>{" "}
                            <button className="ml-[0.4rem] px-2 py-1 font-semibold rounded-lg shadow-md bg-green-300 text-green-800">
                              Elementary
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 bottom-0 w-36 bg-gradient-to-l from-slate-100 dark:from-gray-900 z-20 right-0 md:right-12 lg:right-24"></div>
              <div className="absolute left-0 right-1/2 top-0 bottom-0 inset-0 opacity-[35%] transform-gpu animate-blob1 rounded-full blur-2xl bg-red-200 dark:bg-red-700 hidden xl:block"></div>
            </div>
            <div className=" md:flex-1 mt-4 md:mt-0 mr-8">
              <h3 className="font-bold sm:my-0 my-6 text-3xl sm:text-xl md:text-3xl text-gray-900 dark:text-gray-200">
                What is{" "}
                <div className="sm:inline inline-block rounded-lg px-1.5 bg-gradient-to-r from-red-600 to-red-700 text-white select-none">
                  OMMC Atlas?
                </div>
              </h3>
              <div className="flex md:text-lg mt-2 md:mt-4 text-gray-500 dark:text-gray-300 mb-8">
                <div>
                  <div className="w-12 h-12 rounded-xl mb-4 bg-gradient-to-br flex items-center justify-center text-white from-red-600 to-red-800">
                    <DatabaseIcon className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4 flex text-xl font-[500]">
                  OMMC Atlas is a database of curated resources for students. It
                  contains a variety of problems used on OMMC contests, and is
                  organized based on difficulty and topic.
                </div>
              </div>
              <a
                href="/atlas"
                className="text-blue-400 hover:text-blue-500 duration-150 select-none text-xl font-semibold md:ml-0 ml-16"
              >
                Check it out{" "}
                <ArrowRightIcon className="h-6 w-6 inline mb-1"></ArrowRightIcon>
              </a>
            </div>
          </div>
          <div className="h-14 sm:h-20 2xl:h-18 border-l-4 border-red-600 dark:border-red-700 relative">
            <div className="absolute top-[-14px] left-[-13px] h-6 w-6 border-4 border-red-600 dark:border-red-700 rounded-full bg-gray-100 dark:bg-gray-900" />
          </div>
          <div className="   flex flex-col md:flex-row md:items-center border-red-600 dark:border-red-700 border-l-4 border-b-4 rounded-bl-2xl pb-14">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className=" block md:flex-1 md:w-0 relative">
                <div className="relative z-10">
                  <div className="max-w-full overflow-hidden -mx-4">
                    <div className="min-w-[auto] px-4">
                      <div className="flex flex-col mb-4">
                        <div className="overflow-x-auto -mx-4 pl-4 pr-0 md:pr-4 -my-2 py-2">
                          <div className="ml-4 md:ml-0 align-middle inline-block shadow rounded-2xl overflow-hidden ">
                            <div className=" select-none bg-white dark:bg-gray-800  p-4 sm:p-6 rounded-2xl">
                              <div className="text-blue-700 dark:text-blue-400 font-medium text-md mb-3">
                                Year 1
                              </div>
                              <div className="shadow-inner bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded-lg overflow-hidden mb-3">
                                <p className="relative p-2 min-h-[10rem] max-h-[10rem] overflow-auto scrollbar text-sm md:text-base leading-6">
                                  <Latex>{equation3}</Latex>
                                </p>
                              </div>
                              <a href="/view/6137c21f65118c0016c87809">
                                <div className="flex mb-3">
                                  <div className=" px-2 py-1 font-semibold text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 focus:ring-opacity-75 duration-150 ease-in-out">
                                    View Solution{" "}
                                    <CheckCircleIcon className="inline mb-1 h-5 w-5 " />
                                  </div>
                                </div>
                                <div className="flex mb-[0.625rem]">
                                  <div className="px-2 py-1 font-semibold text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 focus:ring-opacity-75 duration-150 ease-in-out">
                                    View Problem{" "}
                                    <ArrowsExpandIcon className="inline mb-1 h-5 w-5 " />
                                  </div>
                                </div>
                              </a>
                              <button className="px-2 py-1 font-semibold rounded-lg shadow-md bg-purple-300 text-purple-800">
                                Algebra
                              </button>{" "}
                              <button className="ml-[0.4rem] px-2 py-1 font-semibold rounded-lg shadow-md bg-orange-300 text-orange-800">
                                Intermediate
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="absolute top-0 bottom-0 w-36 bg-gradient-to-l from-slate-100 dark:from-gray-900 z-20 right-0"></div>
                <div className="absolute left-0 right-1/2 top-0 bottom-0 inset-0 opacity-[35%] transform-gpu animate-blob1 rounded-full blur-2xl bg-red-300 dark:bg-red-700"></div>
              </div>
              <div className="ml-4 md:ml-8 md:flex-1 md:order-first md:pr-12 lg:pr-24 ">
                <h3 className="sm:my-0 my-6 font-bold text-2xl sm:text-xl md:text-3xl text-gray-900 dark:text-gray-100">
                  Comprehensive{" "}
                  <span className="lg:inline inline-block rounded-lg px-1.5 bg-gradient-to-r from-red-600 to-red-700 text-white select-none">
                    Problemsets
                  </span>
                </h3>
                <div className="flex md:text-lg mt-2 md:mt-4 text-gray-500 dark:text-gray-300">
                  <div>
                    <div className="w-12 h-12 rounded-xl mb-4 bg-gradient-to-br flex items-center justify-center text-white from-red-600 to-red-800">
                      <VariableIcon className="w-6 h-6" />
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex text-xl font-[500]">
                    OMMC problems test students on a variety of topics,
                    including number theory, combinatorics, geometry, and
                    algebra at various difficulties. Practice each topic with
                    extensive sets of problems and detailed solutions.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-14 sm:h-20 2xl:h-14 border-r-4  border-red-600 dark:border-red-700">
            <div className="absolute top-[-14px] right-[-14px] h-6 w-6 border-4  border-red-600 dark:border-red-700 rounded-full bg-gray-100 dark:bg-gray-900" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center border-r-4 border-red-600 dark:border-red-700 border-b-4 rounded-br-2xl pb-14">
            <div className="flex flex-col md:flex-row md:items-center mr-4 md:mr-8">
              <div className=" md:flex-1 mt-4 md:mt-0">
                <h3 className="sm:my-0 mb-6  font-bold text-2xl sm:text-xl md:text-3xl text-gray-900 dark:text-gray-100">
                  What are the{" "}
                  <span className="lg:inline inline-block rounded-lg pb-0.5 px-1.5 bg-gradient-to-r from-red-600 to-red-700 text-white select-none">
                    Questions
                  </span>{" "}
                  Like?
                </h3>
                <div className="flex md:text-lg mt-2 md:mt-4 text-gray-500 dark:text-gray-300 mb-8">
                  <div>
                    <div className="w-12 h-12 rounded-xl mb-4 bg-gradient-to-br flex items-center justify-center text-white from-red-600 to-red-800">
                      <PuzzleIcon className="w-6 h-6" />
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex text-xl font-[500]">
                    OMMC questions are designed to be challenging. Depending on
                    the difficulty, they may be more involved than the typical
                    AMC 10/12 problem. However, they are still accessible to
                    students who are familiar with the AMC 10/12 format.
                  </div>
                </div>
              </div>
              <div className="order-first block md:flex-1 md:w-0 relative md:pr-12 lg:pr-24">
                <div className="relative z-10">
                  <div className="max-w-full overflow-hidden -mx-4">
                    <div className="min-w-[auto]  px-4">
                      <div className="flex flex-col mb-4">
                        <div className="overflow-x-auto -mx-4 pl-4 md:pr-4 -my-2 py-2">
                          <div className="align-middle inline-block shadow rounded-2xl overflow-hidden ">
                            <div className=" select-none bg-white dark:bg-gray-800 shadow p-4 sm:p-6 rounded-2xl">
                              <div className="text-blue-700 dark:text-blue-400 font-medium text-md mb-3">
                                {" "}
                                Year 1
                              </div>
                              <div className="shadow-inner bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded-lg overflow-hidden mb-3">
                                <p className="relative p-2 min-h-[10rem] max-h-[10rem] overflow-auto scrollbar text-sm md:text-base leading-6">
                                  <Latex>{equation2}</Latex>
                                </p>
                              </div>
                              <a href="/view/617587bfc7140100164e22c2">
                                <div className="flex mb-3">
                                  <div className=" px-2 py-1 font-semibold text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 focus:ring-opacity-75 duration-150 ease-in-out">
                                    View Solution{" "}
                                    <CheckCircleIcon className="inline mb-1 h-5 w-5 " />
                                  </div>
                                </div>
                                <div className="flex mb-[0.625rem]">
                                  <div className="px-2 py-1 font-semibold text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 focus:ring-opacity-75 duration-150 ease-in-out">
                                    View Problem{" "}
                                    <ArrowsExpandIcon className="inline mb-1 h-5 w-5 " />
                                  </div>
                                </div>
                              </a>
                              <button className="px-2 py-1 font-semibold rounded-lg shadow-md bg-yellow-300 text-yellow-800">
                                Number Theory
                              </button>{" "}
                              <button className="ml-[0.4rem] px-2 py-1 font-semibold rounded-lg shadow-md bg-red-300 text-red-800">
                                Advanced
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 bottom-0 dark:w-56 w-36 bg-gradient-to-l from-slate-100 dark:from-gray-900 z-20 right-0 md:right-12 lg:right-24"></div>
                <div className="absolute left-0 right-1/2 top-0 bottom-0 inset-0 opacity-[35%] transform-gpu animate-blob1 rounded-full blur-2xl bg-red-200 dark:bg-red-700 hidden xl:block"></div>
              </div>
            </div>
          </div>
          <div className="relative h-12 md:h-20 2xl:h-10 border-l-4 border-red-600 dark:border-red-700">
            <div className="absolute top-[-14px] left-[-14px] h-6 w-6 border-4  border-red-600 dark:border-red-700 rounded-full bg-gray-100 dark:bg-gray-900" />
          </div>
          <div className="relative flex flex-col md:flex-row md:items-center border-l-4 border-red-600 dark:border-red-700">
            <div className="absolute bottom-[-14px] left-[-14px] h-6 w-6 border-4  border-red-600 dark:border-red-700 rounded-full bg-gray-100 dark:bg-gray-900" />

            <div className="   block md:flex-1 md:w-0 relative md:pr-12 lg:pr-24 ml-4 md:ml-8 ">
              <div className="relative z-10">
                <div className=" md:ml-0  md:mt-10 sm:my-10">
                  <iframe
                    title="DiscordLink"
                    src="https://discord.com/widget?id=796756256022200350&theme=dark"
                    className="drop-shadow-lg w-full h-[22rem] md:h-[30rem] rounded-xl select-none"
                    allowTransparency={true}
                    frameBorder="0"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  ></iframe>
                </div>
              </div>{" "}
              <div className="absolute left-0 right-1/2 top-0 bottom-0 inset-0 opacity-[35%] transform-gpu animate-blob1 rounded-full blur-2xl bg-[#3f4fc8] dark:bg-[#3f4fc8] hidden xl:block"></div>
            </div>
            <div className="ml-4 md:ml-0 md:flex-1 md:mt-0 my-10 text-xl font-[500]">
              <h3 className="border-l-[10px] pb-2 sm:pb-0 border-[#5865F2] pl-3 text-gray-900 text-[2rem] md:text-3xl leading-8 font-bold tracking-tight dark:text-white">
                Join us on{" "}
                <span className="mt-1 sm:mt-0 sm:inline inline-block rounded-lg py-0.5 px-1.5 bg-[#5865F2] text-white select-none">
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
                <p className="ml-16 max-w-2xl text-lg font-[400] text-gray-500 dark:text-gray-400 mt-7">
                  We will be posting updates and announcements on the Discord,
                  so make sure to join! We also host special events in addition
                  to the standard competitions.
                </p>
              </div>
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12  text-white rounded-xl mb-4 bg-gradient-to-br  from-[#5865F2] to-[#3f4fc8]">
                  <UserIcon className=" h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 max-w-2xl text-lg font-[400] text-gray-500 dark:text-gray-400 mt-7">
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
