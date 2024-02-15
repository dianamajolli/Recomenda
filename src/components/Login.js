/* import React, { useState } from 'react';
import axios from 'axios';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/login', { username, password });
      // Handle successful login here (e.g., storing the token, redirecting to dashboard)
      console.log(data); // Placeholder
    } catch (error) {
      console.error("Login failed", error);
    }
  }; 

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
      

  );
}

export default Login; */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { FaFacebook } from "react-icons/fa6";
import Notification from "./Notification";
//import { auth } from '../firebase';
import './Login.css';



const Login = () => {
    const [loginData, setLoginData] = useState({
      email: "",
      password: "",
    });
  
    const [notification, setNotification] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const loginUser = async (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, loginData.email, loginData.password)
        .then((userCredential) => {
          console.log("Login successful:", userCredential);
          dispatch(loginSuccess(userCredential.user)); // Dispatch action with user data
          navigate("/");
        })
        .catch((error) => {
          console.error("Error occurred:", error);
          setNotification("Login failed. Please try again.");
          dispatch(loginFailure());
        });
    };
  
    
  
    const googleSignIn = () => {
      try {
        signInWithRedirect(auth, provider);
      } catch (error) {
        console.error("Google sign-in error:", error);
        setNotification("Google sign-in failed. Please try again.");
        dispatch(loginFailure());
      }
    };
  
    /*const facebookSignIn = () => {
      try {
        signInWithRedirect(auth, facebookProvider);
      } catch (error) {
        console.error("Facebook sign-in error:", error);
        setNotification("Facebook sign-in failed. Please try again.");
        dispatch(loginFailure());
      }
    };*/
  
    return (
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">
                LOG IN            
          </h2>
          <form className="login-form" onSubmit={loginUser}>
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
              <input type="checkbox" id="rememberMe"/>
              <span>Remember Me </span>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="login-button"
              >
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
            <div className="login-or">
              OR
            </div>
            <div>
              <button
                type="button"
                className="google-button"
                value="Sign In"
                onClick={googleSignIn}
              >
                <img
                  className="google-button"
                  alt="Google Logo"
                  src="./images/Google.svg"
                />
                LOG IN WITH GOOGLE
              </button>
            </div>
            <div>
              <button
                type="button"
                className=" flex justify-center w-full bg-[#ffffff] text-[#767676] rounded border py-2 mt-4"
                value="Sign In"
                //onClick={facebookSignIn}
              >
                <div
                  size={30}
                  color="blue"
                  style={{ marginRight: "15px", marginLeft: "20px" }}
                />
                LOG IN WITH FACEBOOK
              </button>
            </div>
          </form>
        </div>
        <Notification
          message={notification}
          onClose={() => setNotification("")}
        />
      </div>
    );
  };
  
  export default Login;
  