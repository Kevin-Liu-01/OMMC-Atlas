import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router";
import { SignUpContext } from "../context/signUpContext";

const Profile = (props) => {
  const { setSignInStatus, username, email, setCookie } =
    useContext(SignUpContext);

  function onClick() {
    setSignInStatus(false);
    setCookie("username= ");
    setCookie("email= ");
  }
  if (username === "") {
    return (
      <div>
        <h3>Profile</h3>
        <div>You are not logged in. Please sign up or log in.</div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Profile</h3>
        <h2>{username}</h2>
        <button onClick={() => (onClick(), props.history.push("/"))}>
          Sign out
        </button>
      </div>
    );
  }
};

export default withRouter(Profile);
