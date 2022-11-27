import React, { useContext } from "react";
import axios from "axios";
import Constants from "../../config.js";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  IdentificationIcon,
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import { SignUpContext } from "../../context/signUpContext.tsx";

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

      return "bg-red-300 border-red-400 placeholder-red-700 ";
    } else {
      return "border-gray-300";
    }
  }
  function ConfirmHandler() {
    console.log("Errors contains" + errors.ConfirmPassword?.message);

    if (Boolean(errors.ConfirmPassword?.message) === true) {
      console.log("Errors contains" + errors.ConfirmPassword?.message);

      return "bg-red-300 border-red-400 placeholder-red-700 ";
    } else {
      return "border-gray-300";
    }
  }
  function EmailHandler() {
    console.log("Errors contains" + errors.Email?.message);

    if (Boolean(errors.Email?.message) === true) {
      console.log("Errors contains" + errors.Email?.message);

      return "bg-red-300 border-red-400 placeholder-red-700 ";
    } else {
      return "border-gray-300";
    }
  }
  function PassHandler() {
    console.log("Errors contains" + errors.Password?.message);

    if (Boolean(errors.Password?.message) === true) {
      console.log("Errors contains" + errors.Password?.message);

      return "bg-red-300 border-red-400 placeholder-red-700 ";
    } else {
      return "border-gray-300";
    }
  }
  const navigate = useNavigate();

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
      navigate("/profile");
    });
    // signUpContext(true);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 dark:from-gray-700 dark:via-gray-900 dark:to-black justify-center items-center">
      <div className="-mt-24 max-w-7xl mx-auto w-[20rem] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-8 rounded-xl">
        <h3 className="font-extrabold text-4xl">Sign Up</h3>
        <div className="text-center">
          <form
            className="grid grid-rows-4 mt-8 gap-2"
            onSubmit={handleSubmit(submitForm)}
          >
            <div className="bg-gray-100 py-2 rounded-lg">
              <div className="flex justify-center">
                <IdentificationIcon className="h-6 w-6 mr-2 mt-1" />
                <input
                  className={UserHandler() + "inline rounded-md border p-1"}
                  type="text"
                  {...register("Username")}
                  placeholder="Username"
                />{" "}
              </div>
              <p className="basis-[100%] text-red-700">
                {" "}
                {errors.Username?.message}{" "}
              </p>
            </div>{" "}
            <div className="bg-gray-100 py-2 rounded-lg">
              <div className="flex justify-center">
                <AtSymbolIcon className="h-6 w-6 mr-2 mt-1" />
                <input
                  className={EmailHandler() + "inline rounded-md border p-1"}
                  type="email"
                  placeholder="Email"
                  {...register("Email")}
                />{" "}
              </div>{" "}
              <p className="text-red-700"> {errors.Email?.message} </p>
            </div>
            <div className="bg-gray-100 py-2 rounded-lg">
              <div className="flex justify-center">
                <KeyIcon className="h-6 w-6 mr-2 mt-1" />
                <input
                  className={PassHandler() + "inline rounded-md border p-1"}
                  type="password"
                  placeholder="Password"
                  {...register("Password")}
                />{" "}
              </div>{" "}
              <p className="text-red-700"> {errors.Password?.message} </p>
            </div>
            <div className="bg-gray-100 py-2 rounded-lg">
              <div className="flex justify-center">
                <KeyIcon className="h-6 w-6 mr-2 mt-1" />

                <input
                  className={ConfirmHandler() + "inline rounded-md border p-1"}
                  type="password"
                  placeholder="Confirm Password..."
                  {...register("ConfirmPassword")}
                />
              </div>
              <p className="text-red-700">
                {errors.ConfirmPassword && (
                  <p className="flex justify-center text-red-700">
                    <ExclamationCircleIcon className="h-5 w-5 mr-1 mt-[0.15rem]" />
                    Passwords Should Match!
                  </p>
                )}
              </p>
            </div>
            <button
              className="font-semibold mt-2 py-2 px-3 max-w-xl mx-auto bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-md"
              type="submit"
              id="submit"
            >
              Sign Up
            </button>
          </form>
          <a href="/login">
            <button className="mt-2 text-white">Or Log In</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;

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
