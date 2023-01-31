import "./App.css";
import React, { useState, useEffect } from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
// We import all the components we need in our app
import Navbar from "./Components/AppComponents/Navbar.tsx";

import Home from "./Pages/Home.tsx";
import Edit from "./Pages/Editor";
import Create from "./Pages/Creator";
import Atlas from "./Pages/Atlas/Atlas.tsx";
import Error from "./Pages/Error.tsx";

import Login from "./Pages/Users/UserLogin.tsx";
import Signup from "./Pages/Users/UserSignup.tsx";
import Profile from "./Pages/Users/UserProfile.tsx";
import View from "./Pages/Atlas/QuestionView.tsx";

import Footer from "./Components/AppComponents/Footer.tsx";
import { SignUpContext } from "./context/signUpContext.tsx";

const App = () => {
  const [signInStatus, setSignInStatus] = useState(false);
  const [username, setUsername] = useState(getCookie("username"));
  const [email, setEmail] = useState(getCookie("email"));
  const [dark, setDark] = useState(false);

  //Extract dark mode state from local storage
  useEffect(() => {
    setDark(JSON.parse(window.localStorage.getItem("mode")));
  }, []);

  //Set dark mode state in local storage
  useEffect(() => {
    window.localStorage.setItem("mode", dark);
  }, [dark]);

  //Cookies
  function setCookie(cookieName) {
    const d = new Date();

    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
    let expires = "; expires=" + d.toUTCString();
    document.cookie = cookieName;
  }
  function getCookie(cookieName) {
    // console.log("All Cookies: " + document.cookie);
    try {
      // Get all the cookies pairs in an array
      if (cookieName === "username") {
        let allccookies = document.cookie;

        let cookiearray = allccookies
          .split("; ")
          .find((row) => row.startsWith("username"));
        let value = cookiearray.split("=")[1];
        // console.log("Username value:" + value);
        return value;
      }
    } catch (error) {
      console.log(error);
    }
    try {
      if (cookieName === "email") {
        let allcookies = document.cookie;

        let cookiearray = allcookies
          .split("; ")
          .find((row) => row.startsWith("email"));
        let value = cookiearray.split("=")[1];
        // console.log("Email value:" + value);
        return value;
      }
    } catch (error) {
      console.log(error);
    }

    // Now take key value pair out of this array
  }

  function eraseCookie(name) {
    console.log("Cookie erased: " + name);
    document.cookie = name + "=; Max-Age=0";
  }

  useEffect(() => {
    let usernameCookie = getCookie("username");
    let emailCookie = getCookie("email");

    if (usernameCookie && emailCookie !== "") {
      setSignInStatus(true);
      console.log("Welcome again " + username);

      setUsername(usernameCookie);
      setEmail(emailCookie);
    } else {
    }
  }, []);
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      // var elementVisible = 10;

      if (elementTop < windowHeight) {
        reveals[i].classList.add("active");
      }
      // else {
      // 	reveals[i].classList.remove("active");
      // }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <SignUpContext.Provider
      value={{
        signInStatus,
        setSignInStatus,
        username,
        email,
        setUsername,
        setEmail,
        setCookie,
        getCookie,
        eraseCookie,
      }}
    >
      <div className={dark ? "dark" : ""}>
        <Navbar dark={dark} setDark={setDark} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/atlas" element={<Atlas />}></Route>

          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view/:id" element={<View />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer dark={dark} setDark={setDark} />
      </div>
    </SignUpContext.Provider>
  );
};

export default App;
