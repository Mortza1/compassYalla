import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../Images/logo.jpg';

const NavBar = () => {  
  const getCurrentPath = () => window.location.pathname;
  return (
    <>
      <div className="w-full flex items-center bg-[#1B1431] h-[90px] justify-between px-9 border-b border-white">
      <img src={logo} alt="" className="h-[50%]" />
      <div className="nav flex gap-10 text-white">
        <div className="a"><a href="/">Home</a></div>
        <div className="a">About</div>
        <div className="a"><a href="/live">Stream</a> </div>
        <div className="a">Shop</div>
      </div>
      <div className="bg-white text-black py-1 rounded-[14px] px-3">Login</div>

      </div>
    </>
  );
};

export default NavBar;
