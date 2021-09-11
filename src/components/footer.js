import React, { useContext } from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import "../styling/footer.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { SignUpContext } from "../context/signUpContext";

// Here, we display our Navbar
const Footer = () => {
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
      <footer className="footer" align="center">
        <div className="footerContent">
          <div>Made by Kevin Liu for OMMC</div>
          <p></p>
          <div>
            <a href="http://www.ommcofficial.org/terms">Terms of Service</a> ·
            <a href="http://www.ommcofficial.org/faq">FAQs</a> ·
            <a href="http://www.ommcofficial.org/rules">Rules</a> ·
            <a href="http://www.ommcofficial.org/info">Test Info</a>
          </div>
          <div>© Copyright 2020, OMMC</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
