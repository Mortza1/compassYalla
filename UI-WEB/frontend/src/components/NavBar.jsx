import React, { useState } from "react";
import { Link } from "react-router-dom";


const NavBar = () => {  
  const getCurrentPath = () => window.location.pathname;
  return (
    <>
      <div className="w-full flex items-center bg-[#1B1431] h-[90px] justify-between px-9 border-b border-white">
      <div className="w-11 h-11 shrink-0 grow-0 rounded-full bg-white text-green-700" />
      <div className="nav flex gap-10 text-white">
        <div className="a"><a href="/">Home</a></div>
        <div className="a">About</div>
        <div className="a"><a href="/live">Stream</a> </div>
        <div className="a">Shop</div>
      </div>
      <div className="bg-white text-black p-2 rounded-[14px] px-4">Login</div>

      </div>
    </>
  );
};

export default NavBar;
