import React, { useState, useEffect } from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile";
import View from "./components/view";
import Footer from "./components/footer";

import "./styling/app.css";

import { SignUpContext } from "./context/signUpContext";
import { isCompositeComponent } from "react-dom/test-utils";

const App = () => {
  const [signInStatus, setSignInStatus] = useState(false);
  const [username, setUsername] = useState(getCookie("username"));

  const [email, setEmail] = useState(getCookie("email"));

  function setCookie(cookieName) {
    const d = new Date();

    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
    let expires = "; expires=" + d.toUTCString();
    document.cookie = cookieName;
  }
  function getCookie(cookieName) {
    console.log("All Cookies : " + document.cookie);
    try {
      // Get all the cookies pairs in an array
      if (cookieName === "username") {
        let allccookies = document.cookie;

        let cookiearray = allccookies
          .split("; ")
          .find((row) => row.startsWith("username"));
        console.log(cookiearray);
        let value = cookiearray.split("=")[1];
        console.log("Username value is " + value);
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
        console.log(cookiearray);
        let value = cookiearray.split("=")[1];
        console.log("email value is " + value);
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
      <head>
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="App">
        <div style={{ backgroundColor: "#c9424b" }}>
          <Navbar />
          <div>
            <Route exact path="/">
              <RecordList />
            </Route>

            <Route path="/edit/:id" component={Edit} />
            <Route path="/view/:id" component={View} />

            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/create">
              <Create />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </div>
        </div>
        <Footer />
      </div>
    </SignUpContext.Provider>
  );
};

export default App;
