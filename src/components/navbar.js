import React, { useContext } from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { SignUpContext } from "../context/signUpContext";
import "../styling/navbar.css";

// Here, we display our Navbar
const Navbar = () => {
  const { signInStatus, username } = useContext(SignUpContext);
  return (
    <div>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <nav id="navBar" className="navbar navbar-expand-lg navbar-light ">
        <a
          className="navbar-brand"
          id="navbarElement"
          href="http://www.ommcofficial.org"
        >
          <img
            className="ommcImage"
            alt="OMMC Website"
            src="https://media.discordapp.net/attachments/778356169223700481/785890106489438269/fixup2.png"
          ></img>
        </a>
        <NavLink className="navbar-brand" id="navbarElement" to="/">
          <div id="atlasLogo">OMMC Atlas</div>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {signInStatus ? (
              <li className="nav-item">
                <NavLink id="navbarElement" className="nav-link" to="/profile">
                  Welcome, <a style={{ fontWeight: "bold" }}>{username}</a>
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink id="navbarElement" className="nav-link" to="/signup">
                  Sign Up
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink id="navbarElement" className="nav-link" to="/create">
                Create Record
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
