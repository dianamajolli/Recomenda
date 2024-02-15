import React from "react";
import NavBar from "../components/NavBar";
import Login from "../components/Login";

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