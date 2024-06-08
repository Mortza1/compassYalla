import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../Images/logo.jpg';
import { ethers } from "ethers";

const NavBar = () => {  
  const [data, setdata] = useState({
    address: "",
    Balance: null,
});

      // Button handler button for handling a
      // request event for metamask
      const btnhandler = () => {
          // Asking if metamask is already present or not
          if (window.ethereum) {
              // res[0] for fetching a first wallet
              window.ethereum
                  .request({ method: "eth_requestAccounts" })
                  .then((res) =>
                      accountChangeHandler(res[0])
                  );
          } else {
              alert("install metamask extension!!");
          }
      };

      // getbalance function for getting a balance in
      // a right format with help of ethers
      const getbalance = (address) => {
          // Requesting balance method
          window.ethereum
              .request({
                  method: "eth_getBalance",
                  params: [address, "latest"],
              })
              .then((balance) => {
                  // Setting balance
                  setdata({
                      Balance:
                          ethers.utils.formatEther(balance),
                  });
              });
      };

      // Function for getting handling all events
      const accountChangeHandler = (account) => {
          // Setting an address data
          setdata({
              address: account,
          });

          // Setting a balance
          getbalance(account);
      };

  return (
    <>
      <div className="w-full flex items-center bg-[#1B1431] h-[90px] justify-between px-9 border-b border-white ">
      <a href="/"><img src={logo} alt="" className="h-[50%]" /></a>
      <div className="nav flex gap-10 text-white">
        <div className="a text-[25px]"><a href="/">HOME</a></div>
        <div className="a text-[25px]"><a href="/about">ABOUT</a></div>
        <div className="a text-[25px]"><a href="/live">STREAM</a> </div>
        <div className="a text-[25px]"><a href="/shop">SHOP</a></div>
      </div>
      <div className="flex items-center gap-4">
      {data.balance}
      <div className="flex flex-col items-center gap-1">
      <p className="text-white text-[14px]">Miss Penifer</p>
      <p className="text-white text-center text-[12px]">Balance: {data.Balance}</p>  
      </div>
      <div className="w-10 h-10 bg-blue-500 rounded-full overflow-hidden">
        {/* Image inside the circle */}
        <button onClick={btnhandler}
                variant="primary">
        <img src='../Images/cat.jpg' alt="Sample Image" className="object-cover"/>
        </button>
        
      </div>
      </div>
      

      </div>
    </>
  );
};

export default NavBar;
