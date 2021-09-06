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

function Signup(props) {
  const {
    signInStatus,
    setSignInStatus,
    username,
    email,
    setUsername,
    setEmail,
    setCookie,
    getCookie,
  } = useContext(SignUpContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
  const submitForm = (data) => {
    const newUser = {
      person_username: data.Username,
      person_password: data.Password,
      person_email: data.Email,
    };
    console.log(newUser);
    setUsername(data.Username);
    setEmail(data.Email);

    console.log("Username and email: " + username + " " + email);

    setCookie("username=" + data.Username);
    setCookie("email=" + data.Email);
    // This will send a post request to update the data in the database.
    axios.post(`${Constants.SERVER_HOST}/user/add`, newUser).then((res) => {
      setSignInStatus(true);
      console.log(signInStatus);
      console.log(res.data);
      props.history.push("/");
    });
    // signUpContext(true);
  };

  return (
    <div className="SignUpPage">
      <div className="Form">
        <h3 className="title">Sign Up</h3>
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
            <NavLink className="nav-link" to="/login">
              <button id="submit">Or Log In</button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Signup);

// const Signup = (props) => {
//   const [logStatus, setLogStatus] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [usernameStatus, setUsernameStatus] = useState(false);
//   const [passwordStatus, setPasswordStatus] = useState(false);

//   useEffect(() => {
//     if (usernameStatus && passwordStatus) {
//       console.log("Input is valid");
//     }
//   });
//   function onUsernameChange(e) {
//     e.preventDefault();

//     setUsername(e.target.value);
//     setUsernameStatus(false);
//   }

//   function onPasswordChange(e) {
//     e.preventDefault();

//     setPassword(e.target.value);
//     setPasswordStatus(false);
//   }

//   const inputUserStyle = usernameStatus
//     ? { border: "2px solid #b70c13", backgroundColor: "pink" }
//     : {};
//   const inputPasswordStyle = passwordStatus
//     ? { border: "2px solid #b70c13", backgroundColor: "pink" }
//     : {};

//   function onSubmit(e) {
//     e.preventDefault();
//     if (username === "" && password === "") {
//       console.log("Invalid password and username");
//       setUsernameStatus(true);
//       setPasswordStatus(true);

//       return;
//     }
//     if (username === "") {
//       console.log("Invalid username");
//       setUsernameStatus(true);
//       return;
//     }

//     if (password === "") {
//       console.log("Invalid password");
//       setPasswordStatus(true);
//       return;
//     } else {
//       const newUser = {
//         person_username: username,
//         person_password: password,
//       };
//       console.log(newUser);

//       // This will send a post request to update the data in the database.
//       axios.post(`${Constants.SERVER_HOST}/user/add`, newUser).then((res) => {
//         console.log(res.data);
//         props.history.push("/");
//       });
//     }
//   }

//   return (
//     <div>
//       <h3 align="center">Sign Up</h3>
//       <form onSubmit={onSubmit}>
//         <div className="form-group">
//           <label>Username:</label>
//           <input
//             style={inputUserStyle}
//             type="text"
//             className="form-control"
//             value={username}
//             onChange={onUsernameChange}
//           />
//         </div>
//         {usernameStatus && (
//           <div style={{ color: "#b70c13" }}>
//             Please enter in a valid username.
//           </div>
//         )}

//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             style={inputPasswordStyle}
//             type="text"
//             className="form-control"
//             value={password}
//             onChange={onPasswordChange}
//           />
//         </div>
//         {passwordStatus && (
//           <div style={{ color: "#b70c13" }}>
//             Please enter in a valid password.
//           </div>
//         )}

//         <br />

//         <div className="form-group">
//           <input type="submit" value="Sign Up" className="btn btn-primary" />
//         </div>
//       </form>
//       <NavLink className="nav-link" to="/login">
//         <button className="btn btn-primary" onClick={() => setLogStatus(true)}>
//           Or Log In
//         </button>
//       </NavLink>
//     </div>
//   );
// };

// export default withRouter(Signup);
