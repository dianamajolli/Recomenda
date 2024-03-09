import React from "react";
import Login from "./../components/Login";
import NavBar from "../components/NavBar";

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      <NavBar />
      

      <div className="flex flex-1 items-center justify-center">
        <Login />
      </div>

      
    </div>
  );
};

export default LoginPage;