import React, { useState, useContext } from "react";
import axios from "axios";
import Constants from "../../config.js";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  IdentificationIcon,
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import { SignUpContext } from "../../context/signUpContext.tsx";

const schema = yup.object().shape({
  Username: yup.string().required("Username is a required field"),
  Email: yup.string().email().required(),
  Password: yup.string().min(4).max(15).required(),
  ConfirmPassword: yup.string().oneOf([yup.ref("Password"), null]),
});

function Login(props) {
  const {
    signInStatus,
    setSignInStatus,
    username,
    email,
    setUsername,
    setEmail,
    setCookie,
  } = useContext(SignUpContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [userNotFound, setUserNotFound] = useState(false);

  function UserHandler() {
    console.log("Errors contains" + errors.Username?.message);

    if (Boolean(errors.Username?.message) === true) {
      console.log("Errors contains" + errors.Username?.message);

      return "bg-red-300 border-red-400 placeholder-red-700 ";
    } else {
      return "border-gray-300";
    }
  }
  function ConfirmHandler() {
    console.log("Errors contains" + errors.ConfirmPassword?.message);

    if (Boolean(errors.ConfirmPassword?.message) === true) {
      console.log("Errors contains" + errors.ConfirmPassword?.message);

      return "bg-red-300 border-red-400 placeholder-red-700 ";
    } else {
      return "border-gray-300";
    }
  }
  function EmailHandler() {
    console.log("Errors contains" + errors.Email?.message);

    if (Boolean(errors.Email?.message) === true) {
      console.log("Errors contains" + errors.Email?.message);

      return "bg-red-300 border-red-400 placeholder-red-700 ";
    } else {
      return "border-gray-300";
    }
  }
  function PassHandler() {
    console.log("Errors contains" + errors.Password?.message);

    if (Boolean(errors.Password?.message) === true) {
      console.log("Errors contains" + errors.Password?.message);

      return "bg-red-300 border-red-400 placeholder-red-700 ";
    } else {
      return "border-gray-300";
    }
  }
  const navigate = useNavigate();
  const submitForm = (userData) => {
    const findUser = {
      person_username: userData.Username,
      person_password: userData.Password,
      person_email: userData.Email,
    };
    console.log(findUser);

    // This will send a post request to update the data in the database.
    axios.post(`${Constants.SERVER_HOST}/user/login`, findUser).then((res) => {
      if (res.data.error === "User not found") {
        setUserNotFound(true);
        console.log("User not found");
      } else {
        setUsername(res.data.person_username);
        setEmail(res.data.person_email);
        console.log("Username and email: " + username + " " + email);
        setSignInStatus(true);
        console.log("Response was valid");
        console.log(signInStatus);
        console.log("Response data object: " + JSON.stringify(res.data));
        setCookie("username=" + res.data.person_username);
        setCookie("email=" + res.data.person_email);
        navigate("/profile");
      }
    });
    // signUpContext(true);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  dark:from-gray-700 dark:via-gray-900 dark:to-black justify-center items-center">
      <div className="-mt-24 max-w-7xl mx-auto w-[20rem] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 py-8 px-6 md:px-8 rounded-xl">
        <h3 className="font-extrabold text-4xl">Log In</h3>
        <div className="text-center">
          <form
            className="grid grid-rows-4 mt-8 gap-2"
            onSubmit={handleSubmit(submitForm)}
          >
            {" "}
            <div className="bg-gray-100 py-2 rounded-lg">
              <div className="flex justify-center">
                <IdentificationIcon className="h-6 w-6 mr-2 mt-1" />
                <input
                  className={UserHandler() + "inline rounded-md border p-1"}
                  type="text"
                  {...register("Username")}
                  placeholder="Username"
                />{" "}
              </div>
              <p className="basis-[100%] text-red-700">
                {" "}
                {errors.Username?.message}{" "}
              </p>
            </div>{" "}
            <div className="bg-gray-100 py-2 rounded-lg">
              <div className="flex justify-center">
                <AtSymbolIcon className="h-6 w-6 mr-2 mt-1" />
                <input
                  className={EmailHandler() + "inline rounded-md border p-1"}
                  type="email"
                  placeholder="Email"
                  {...register("Email")}
                />{" "}
              </div>{" "}
              <p className="text-red-700"> {errors.Email?.message} </p>
            </div>
            <div className="bg-gray-100 py-2 rounded-lg">
              <div className="flex justify-center">
                <KeyIcon className="h-6 w-6 mr-2 mt-1" />
                <input
                  className={PassHandler() + "inline rounded-md border p-1"}
                  type="password"
                  placeholder="Password"
                  {...register("Password")}
                />{" "}
              </div>{" "}
              <p className="text-red-700"> {errors.Password?.message} </p>
            </div>
            <div className="bg-gray-100 py-2 rounded-lg">
              <div className="flex justify-center">
                <KeyIcon className="h-6 w-6 mr-2 mt-1" />

                <input
                  className={ConfirmHandler() + "inline rounded-md border p-1"}
                  type="password"
                  placeholder="Confirm Password..."
                  {...register("ConfirmPassword")}
                />
              </div>
              {errors.ConfirmPassword && (
                <p className="flex justify-center text-red-700">
                  <ExclamationCircleIcon className="h-5 w-5 mr-1 mt-[0.15rem]" />
                  Passwords Should Match!
                </p>
              )}
            </div>
            <button
              className="font-semibold mt-2 py-2 px-3 max-w-xl mx-auto bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-md"
              type="submit"
              id="submit"
            >
              Log In
            </button>
            {userNotFound && (
              <div className="flex justify-center text-red-200">
                {" "}
                <ExclamationCircleIcon className="h-6 w-6 mr-1" />
                User not found.
              </div>
            )}
          </form>
          <a href="/signup">
            <button className="mt-2 text-white">Or Sign Up</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
