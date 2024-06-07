import React, { useState } from "react";
import Sponsors from "./Sponsors";
import Statement from "./Statement";
import Topvid from "./topvid";
import Schedule from "./Schedule";

const HomeHero = () => {
  return (
    <>
      <div className="video w-full h-[500px] bg-[#1B1431] flex justify-center items-center">
        <Topvid />
        </div>
        <Schedule />
        <Sponsors />
        
        
    </>
  );
};

export default HomeHero;
