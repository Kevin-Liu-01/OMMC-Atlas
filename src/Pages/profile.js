import React, { useState, useEffect, useContext } from "react";
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
      <div class="ProfileContainer">
        <div className="ProfileHeader">{username}'s Profile</div>
        <div className="ProfileBody">
          <div>
            <div className="bodyContents">
              <div className="emailContainer">Email: {email}</div>
              <p></p>
              <div className="FavoritedContainer">
                <div style={{ fontWeight: "bold" }}>Favorited questions:</div>
                {0 === 1 && (
                  <div>
                    <div className="">{}</div>
                  </div>
                )}
                {true && (
                  <div>
                    <div className="">No favorited questions (Feature TBA)</div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <button
                className="signoutButton"
                onClick={() => (onClick(), props.history.push("/"))}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
