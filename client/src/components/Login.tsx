import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import Notification from "./Notification";
//import { auth } from '../firebase';
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [notification, setNotification] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const loginUser = async (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, loginData.email, loginData.password)
  //     .then((userCredential: { user: any; }) => {
  //       console.log("Login successful:", userCredential);
  //       dispatch(loginSuccess(userCredential.user)); // Dispatch action with user data
  //       navigate("/");
  //     })
  //     .catch((error: any) => {
  //       console.error("Error occurred:", error);
  //       setNotification("Login failed. Please try again.");
  //       dispatch(loginFailure());
  //     });
  // };

  // const googleSignIn = () => {
  //   try {
  //     signInWithRedirect(auth, provider);
  //   } catch (error) {
  //     console.error("Google sign-in error:", error);
  //     setNotification("Google sign-in failed. Please try again.");
  //     dispatch(loginFailure());
  //   }
  // };

  return (
    <div className="login-container">
      
        <img
          className="logoRecomenda"
          alt="logoRecomenda"
          src="./images/logoRecomenda2.png"
        />
      
      <div className="tagline-container">
        <p>Your HR Management System</p>
      </div>
      <div className="login-box">
        <h2 className="login-title">LOG IN</h2>
        {/* <form className="login-form" onSubmit={loginUser}>
          <input
            type="text"
            placeholder="Username or email address *"
            className="login-input"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password *"
            className="login-input"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <span>Remember Me </span>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="login-button">
              LOG IN
            </button>
          </div>
          <div className="login-links">
            <p className="login-links">
              <a href="/signup" className="underline">
                Don’t have an account?
              </a>
            </p>
            <p className="login-links">
              <a href="/forgotpassword" className="underline">
                Forgot password?
              </a>
            </p>
          </div>
          <div className="login-or">OR</div>
          <div>
            <button
              type="button"
              className="google-button"
              value="Sign In"
              onClick={googleSignIn}
            >
              <img alt="Google Logo" src="./images/Google.svg" />
              LOG IN WITH GOOGLE
            </button>
          </div>
        </form> */}
      </div>
      {/* <Notification
        message={notification}
        onClose={() => setNotification("")}
      /> */}
    </div>
  );
};

export default Login;
function signInWithEmailAndPassword(auth: any, email: string, password: string) {
  throw new Error("Function not implemented.");
}

function loginSuccess(user: any): any {
  throw new Error("Function not implemented.");
}

function loginFailure(): any {
  throw new Error("Function not implemented.");
}

function signInWithRedirect(auth: any, provider: any) {
  throw new Error("Function not implemented.");
}

