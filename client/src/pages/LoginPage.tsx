import React from "react";
import Login from "./../components/Login";

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div style={{ marginTop: '200px' }} />
      <div className="flex flex-1 items-center justify-center">
        <img
          className="logoRecomenda"
          alt="logoRecomenda"
          src="./../../public/images/logoRecomenda4.png"
        />
      </div>

      <div className="flex flex-1 items-center justify-center">
        <Login />
      </div>


    </div>
  );
};

export default LoginPage;