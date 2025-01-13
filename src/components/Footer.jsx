import React from "react";

const Footer = () => {
  return (
    <div className=" p-4 mt-2 bg-gray-300 grid grid-cols-3 items-center m-4 md:flex md:justify-around md:items-center">
      <div className="flex items-center">
        <img className="w-10 h-10 md:w-14 md:h-14" src="./logo2.webp" />
        <div className="px-2 md:text-base text-xs">ShoppyGlobe</div>
      </div>
      <div className="text-xs md:text-base hidden md:block">
        Terms and Conditions
      </div>
      <div className="text-xs md:text-base">&copy; ShoppyGlobe, Inc. 2025</div>
    </div>
  );
};

export default Footer;
