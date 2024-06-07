import React from "react";
import gifSrc from "../Images/topvid.gif";

const TopVid = () => {
  return (
    <>
      <div className="w-full h-[500px] flex justify-center items-center relative">
        {/* Switched to an <img> tag for GIF background */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={gifSrc}
          alt="Background Animation"
        />
        <div className="relative z-10 py-[20px] px-15 w-[250px] border-[2px] rounded-[8px] text-[30px] text-white w-[350px] text-center bg-[#1B1431] bg-opacity-70 ">
          COMPASS ABU-DHABI 2024
        </div>
      </div>
    </>
  );
};

export default TopVid;
