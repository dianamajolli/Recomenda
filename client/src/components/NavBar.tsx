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
    <div className="w-full grid grid-cols-2 gap-4">


      <div className="column-1">

        <div style={{ marginTop: '30px', marginBottom: '30px'}}>
          <Link to="/" className="text-left w-full text-4xl p-8 font-semibold" style={{
            fontFamily: 'Arial, sans-serif', color: '#7724a7', paddingLeft: '68px'
          }}>
            Recomenda
          </Link>
        </div>

        <div className="links-row" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', paddingLeft: '38px', flexWrap: 'nowrap' }}>
          <Link to="/Performance" className="text-left text-xl font-semibold hover:text-brown-800" style={{
            fontFamily: 'Arial, sans-serif',
            color: '#FFFFFF',
            whiteSpace: 'nowrap',
            padding: '0px 68px 38px 38px', // top right ? ? 
            fontSize: '1.3rem',
            maxWidth: '100%'
          }}>
            Performance Metrics
          </Link>

          <Link to="/RemoteWork" className="text-left text-xl font-semibold hover:text-brown-800" style={{
            fontFamily: 'Arial, sans-serif',
            color: '#FFFFFF',
            whiteSpace: 'nowrap',
            padding: '0px 68px 38px 38px', // top right ? ? 
            fontSize: '1.3rem',
            maxWidth: '100%'
          }}>
            Remote Work Analysis
          </Link>

          <Link to="/Training" className="text-left text-xl font-semibold hover:text-brown-800" style={{
            fontFamily: 'Arial, sans-serif',
            color: '#FFFFFF',
            whiteSpace: 'nowrap',
            padding: '0px 68px 38px 38px', // ? right ? ? 
            fontSize: '1.3rem',
            maxWidth: '100%'
          }}>
            Training and Development
          </Link>

          <Link to="/Compensation" className="text-left text-xl font-semibold hover:text-brown-800" style={{
            fontFamily: 'Arial, sans-serif',
            color: '#FFFFFF',
            whiteSpace: 'nowrap',
            padding: '0px 68px 38px 38px', // top right ? ? 
            fontSize: '1.3rem',
            maxWidth: '100%'
          }}>
            Compensation and Benefits
          </Link>

          <Link to="/Recruitment" className="text-left text-xl font-semibold hover:text-brown-800" style={{
            fontFamily: 'Arial, sans-serif',
            color: '#FFFFFF',
            whiteSpace: 'nowrap',
            padding: '0px 68px 38px 38px', // top right ? ? 
            fontSize: '1.3rem',
            maxWidth: '100%'
          }}>
            Recruitment
          </Link>
        </div>




      </div>

    </div>

  );
};

export default NavBar;
