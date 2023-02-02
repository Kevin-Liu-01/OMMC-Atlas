import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  StarIcon,
  MailOpenIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";
import { SignUpContext } from "../../context/signUpContext.tsx";

const updates = [
  {
    date: "11/27/2022",
    title: "OMMC Atlas Releases!",
    content: "OMMC Atlas is available for all OMMC members to use.",
  },
  {
    date: "11/23/2022",
    title: "OMMC Official UI",
    content: "OMMC Official receives a new Mobile and Web UI!",
  },
  {
    date: "11/01/2022",
    title: "OMMC November POTM",
    content: "The November POTM can now be found on Instagram.",
  },
];

// const favorited = [{}];

const Profile = (props) => {
  const { setSignInStatus, username, email, setCookie } =
    useContext(SignUpContext);
  const navigate = useNavigate();

  function onClick() {
    setSignInStatus(false);
    setCookie("username= ");
    setCookie("email= ");
    navigate("/");
  }
  if (username === "") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-100 dark:from-gray-800 dark:to-gray-900  overflow-hidden">
        <div className="p-8 max-w-7xl mx-auto ">
          <div className="flex bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl p-8 drop-shadow-lg">
            <div>
              <div className="font-semibold text-3xl text-white">
                Profile Not Found
              </div>
              <div className="font-semibold mt-4 text-2xl text-white">
                You are not signed in. Please sign up or log in.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-100 dark:from-gray-800 dark:to-gray-900  overflow-hidden">
        <div className="p-4 md:p-8 max-w-7xl mx-auto ">
          <div className="md:flex bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl p-8 shadow">
            <div>
              <div className="font-semibold text-3xl text-white">
                Welcome back, {username}
              </div>
              <div className="font-semibold mt-4 text-2xl text-white">
                Email: {email}
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:flex justify-self-end justify-center md:ml-auto">
              <button
                className="my-auto py-2 px-4 bg-orange-200 text-lg rounded-xl font-semibold hover:bg-orange-300 duration-150 ease-in-out"
                onClick={() => (onClick(), props.history.push("/"))}
              >
                Sign Out{" "}
                <ArrowCircleRightIcon className="inline ml-1 mb-1 h-6 w-6 " />
              </button>
            </div>
          </div>
          <div className="mt-8 ">
            <div className="font-semibold text-3xl dark:text-white">
              <StarIcon className="inline mb-1 h-6 w-6 " /> Favorited Questions
              - Under Construction
            </div>
            <div className="grid sm:grid-cols-2 gap-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 dark:from-gray-600 dark:to-gray-700 rounded-2xl p-4 mt-4 shadow">
              <div className="col-span-2 bg-white p-4 rounded-xl text-xl bg-gradient-to-r dark:from-pink-300 dark:via-purple-300 dark:to-indigo-400 from-white to-white text-gray-900 dark:text-white">
                Favorited Questions is still in development. Keep an eye out!
              </div>
              {/* {favorited.map((favorite) => (
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-base text-gray-500 mb-2">
                    {favorite.date}
                  </div>
                  <div className="text-xl text-gray-900 font-semibold mb-2">
                    {favorite.title}
                  </div>
                  <div className="text-gray-900">{favorite.content}</div>
                </div>
              ))} */}
            </div>
          </div>
          <div className="mt-8 ">
            <div className="font-semibold text-3xl dark:text-white">
              <MailOpenIcon className="inline mb-1 h-6 w-6 " /> Updates From
              OMMC
            </div>
            <div className="grid sm:grid-cols-2 gap-4 bg-gradient-to-r from-green-300 via-blue-300 to-purple-400 dark:from-gray-600 dark:to-gray-700 rounded-2xl p-4 mt-4 shadow">
              {updates.map((update) => (
                <div className="bg-white dark:bg-gradient-to-r dark:from-green-300 dark:via-blue-300 dark:to-purple-400 p-4 rounded-xl  ">
                  <div className="text-base text-gray-500  mb-2">
                    {update.date}
                  </div>
                  <div className="text-xl text-gray-900 font-semibold mb-2">
                    {update.title}
                  </div>
                  <div className="text-gray-900 ">{update.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
