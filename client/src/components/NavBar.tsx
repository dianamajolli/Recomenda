import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { useSelector } from "react-redux";
import { IoIosLogOut } from "react-icons/io";
import { IconContext } from "react-icons";
import { userSignOut } from '../utilities/authUtils';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const NavBar = () => {
  //const user = useSelector((state) => state.auth.user);
  const [userInfo, setUserInfo] = useState(null);
  //const uid = user?.uid;

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     if (!uid) return;

  //     try {
  //       const response = await axios.get(`/api/user/profile/${uid}`);
  //       if (response.data.success) {
  //         setUserInfo(response.data.data);
  //       } else {
  //         console.error("User not found or error fetching user data");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchUserData();
  // }, [uid]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    userSignOut(navigate, dispatch);
  };

  return (
    <div className="w-full grid grid-cols-6 gap-4" style={{ marginBottom: '105px', marginTop: '20px' }}>
      <div className="column-1">

        {/* <div style={{ marginLeft: '30px' }}> */}
        <div className="links-row" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', paddingLeft: '38px', flexWrap: 'nowrap' }}>

          {/* <Link to="/" className="text-left w-full p-4 font-semibold"> */}
          <Link to="/" style={{ minWidth: '100%' }}>
            <img
              className="logoRecomenda"
              alt="logoRecomenda"
              src="../../public/images/logoRecomenda4.png">
            </img>
          </Link>
        </div>
      </div>
      <div className="column-2" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'nowrap', paddingLeft: '38px' }}>

        <Link to="/Performance" className="text-left text-xl font-semibold hover:text-brown-800 index-link">
          Performance Metrics
        </Link>
      </div>

      <div className="column-3" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'nowrap' }}>

        <Link to="/RemoteWork" className="text-left text-xl font-semibold hover:text-brown-800 index-link">
          Remote Work Analysis
        </Link>
      </div>

      <div className="column-4" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'nowrap' }}>
        <Link to="/Training" className="text-left text-xl font-semibold hover:text-brown-800 index-link">
          Training and Development
        </Link>
      </div>

      <div className="column-5" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'nowrap' }}>
        <Link to="/Compensation" className="text-left text-xl font-semibold hover:text-brown-800 index-link">
          Compensation and Benefits
        </Link>
      </div>

      <div className="column-6" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'nowrap' }}>
        <Link to="/Recruitment" className="text-left text-xl font-semibold hover:text-brown-800 index-link" >
          Recruitment
        </Link>

        <button onClick={handleSignOut}  style={{ marginRight: '20px' }}>
          <IconContext.Provider value={{ size: '2.2em', color: 'white', className: "global-class-name" }}>
            <IoIosLogOut />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
