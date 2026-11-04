import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";
import Constants from "./config.js";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Creating, editing and deleting questions needs the Atlas server's admin token.
// An editor saves it once in this browser's local storage as "atlas-admin-token".
axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("atlas-admin-token");
  if (token && config.url.startsWith(`${Constants.SERVER_HOST}/`)) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
