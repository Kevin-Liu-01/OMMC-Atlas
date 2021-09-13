import React, { useState, useEffect, useContext } from "react";
// This will require to npm install axios
import axios from "axios";
import { withRouter } from "react-router";
import Constants from "./config.js";
import { NavLink } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styling/signup.css";
import { SignUpContext } from "../context/signUpContext";

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

      return "ErrorState";
    } else {
      return "DefaultForm";
    }
  }
  function ConfirmHandler() {
    console.log("Errors contains" + errors.ConfirmPassword?.message);

    if (Boolean(errors.ConfirmPassword?.message) === true) {
      console.log("Errors contains" + errors.ConfirmPassword?.message);

      return "ErrorState";
    } else {
      return "DefaultForm";
    }
  }
  function EmailHandler() {
    console.log("Errors contains" + errors.Email?.message);

    if (Boolean(errors.Email?.message) === true) {
      console.log("Errors contains" + errors.Email?.message);

      return "ErrorState";
    } else {
      return "DefaultForm";
    }
  }
  function PassHandler() {
    console.log("Errors contains" + errors.Password?.message);

    if (Boolean(errors.Password?.message) === true) {
      console.log("Errors contains" + errors.Password?.message);

      return "ErrorState";
    } else {
      return "DefaultForm";
    }
  }
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
        props.history.push("/");
      }
    });
    // signUpContext(true);
  };

  return (
    <div className="SignUpPage">
      <div className="Form">
        <h3 className="title">Log In</h3>
        <div className="inputs">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="formElementContainer">
              <div className="formElement">
                <div className="heroIcons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>
                </div>
                <input
                  className={UserHandler()}
                  type="text"
                  name="Username"
                  {...register("Username")}
                  placeholder="Username"
                />
              </div>
              <p className="ErrorMessage"> {errors.Username?.message} </p>
            </div>
            <div className="formElementContainer">
              <div className="formElement">
                <div className="heroIcons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <input
                  className={EmailHandler()}
                  type="text"
                  name="Email"
                  placeholder="Email"
                  {...register("Email")}
                />
              </div>
              <p className="ErrorMessage"> {errors.Email?.message} </p>
            </div>

            <div className="formElement">
              <div className="heroIcons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
              </div>
              <input
                className={PassHandler()}
                type="password"
                name="password"
                placeholder="Password"
                {...register("Password")}
              />
            </div>
            <p className="ErrorMessage"> {errors.Password?.message} </p>
            <div className="formElement">
              <div className="heroIcons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
              </div>
              <input
                className={ConfirmHandler()}
                type="password"
                name="ConfirmPassword"
                placeholder="Confirm Password..."
                {...register("ConfirmPassword")}
              />
            </div>
            <p className="ErrorMessage">
              {errors.ConfirmPassword && "Passwords Should Match!"}{" "}
            </p>
            <input type="submit" id="submit" />
            {userNotFound && <p className="ErrorMessage">User not found.</p>}
            <NavLink className="nav-link" to="/signup">
              <button id="logInsubmit">Or Sign Up</button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
