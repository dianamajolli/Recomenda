import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const NavBar = () => {
  //const user = useSelector((state) => state.auth.user);
  const [userInfo, setUserInfo] = useState(null);
  //const uid = user?.uid;
  const uid = "TODO";

  useEffect(() => {
    const fetchUserData = async () => {
      if (!uid) return;

      try {
        const response = await axios.get(`/api/user/profile/${uid}`);
        if (response.data.success) {
          setUserInfo(response.data.data);
        } else {
          console.error("User not found or error fetching user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [uid]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative overflow-x-auto bg-white">
      <div className="hidden md:flex justify-between items-center p-1 mr-5 ml-1">
        <div className="z-10 hidden md:flex gap-16 [font-family:'Inria_Serif',Helvetica] font-bold [color:#342f19] text-lg ">
          <Link to="/" className="hover:[color:#7d5844]">
            
          </Link>
          <Link to="/Dashboard" className="hover:[color:#7d5844]">
            
          </Link>

          <Link to="/myaccount"></Link>
        </div>
      </div>

      {/* <div className="flex justify-between ">
        <Link to="/">
          <img
            className="fixed w-[85px] h-[64px] top-0 left-0 "
            //alt="Logo color updated"
            src="logoRecomenda.png"
          />
        </Link>
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 "
        ></button>
      </div> */}
    </div>
  );
};

export default NavBar;
