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
    }
  }
  function ConfirmHandler() {
    console.log("Errors contains" + errors.ConfirmPassword?.message);

    if (Boolean(errors.ConfirmPassword?.message) === true) {
      console.log("Errors contains" + errors.ConfirmPassword?.message);

      return "ErrorState";
    }
  }
  function EmailHandler() {
    console.log("Errors contains" + errors.Email?.message);

    if (Boolean(errors.Email?.message) === true) {
      console.log("Errors contains" + errors.Email?.message);

      return "ErrorState";
    }
  }
  function PassHandler() {
    console.log("Errors contains" + errors.Password?.message);

    if (Boolean(errors.Password?.message) === true) {
      console.log("Errors contains" + errors.Password?.message);

      return "ErrorState";
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
            <input
              className={UserHandler()}
              type="text"
              name="Username"
              {...register("Username")}
              placeholder="Username"
            />
            <p className="ErrorMessage"> {errors.Username?.message} </p>
            <input
              className={EmailHandler()}
              type="text"
              name="Email"
              placeholder="Email"
              {...register("Email")}
            />
            <p className="ErrorMessage"> {errors.Email?.message} </p>

            <input
              className={PassHandler()}
              type="password"
              name="password"
              placeholder="Password"
              {...register("Password")}
            />
            <p className="ErrorMessage"> {errors.Password?.message} </p>
            <input
              className={ConfirmHandler()}
              type="password"
              name="ConfirmPassword"
              placeholder="Confirm Password..."
              {...register("ConfirmPassword")}
            />
            <p className="ErrorMessage">
              {" "}
              {errors.ConfirmPassword && "Passwords Should Match!"}{" "}
            </p>
            <input type="submit" id="submit" />
            {userNotFound && <p>User not found.</p>}
            <NavLink className="nav-link" to="/signup">
              <button id="submit">Or Sign Up</button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
