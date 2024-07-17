import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/logo.png";
import nav_profile from "../../assets/nav_profile.png";
const Navbar = () => {
  return (
    <>
      <div className="adminpannel">Admin Dashboard</div>
      <div className="navbar">
        <img src={navlogo} alt="" height={80} className="nav-logo" />
        <img src={nav_profile} alt="" height={80} className="nav-profile" />
      </div>
    </>
  );
};

export default Navbar;
