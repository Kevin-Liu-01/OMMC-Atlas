import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router";
import { SignUpContext } from "../context/signUpContext";
import "../styling/profile.css";

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
        <div className="ProfileHeader">Profile</div>
        <div>You are not logged in. Please sign up or log in.</div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="ProfileContainer">
          <div className="ProfileHeader">{username}'s Profile</div>
        </div>
        <div className="ProfileBody">
          <div>
            <div>Email: {email}</div>
            <div>Favorited questions: {}</div>
          </div>
          <div>
            <button
              className="signoutButton"
              onClick={() => (onClick(), props.history.push("/"))}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(Profile);
