import React from "react";
import logo from "../../Images/logo.png";

const NavBar = () => {
  return (
    <div className="w-10/12 m-auto py-4">
      <div className="flex justify-between items-center">
        <img src={logo} alt="" className="w-[120px]" />

        <ul className="flex gap-[5rem]">
          <li className="text-[17px] font-medium text-[#fff] cursor-pointer ease-linear duration-300">
            Home
          </li>
          <li className="text-[17px] font-medium text-primary hover:text-[#fff] cursor-pointer ease-linear duration-300">
            About
          </li>
          <li className="text-[17px] font-medium text-primary hover:text-[#fff] cursor-pointer ease-linear duration-300">
            Works
          </li>
          <li className="text-[17px] font-medium text-primary hover:text-[#fff] cursor-pointer ease-linear duration-300">
            Contact
          </li>
        </ul>

        <button className="btn bg-secondary border-0 py-[12px] px-[30px] text-[16px] font-[500] rounded-[1rem] hover:bg-[#fff] duration-500 hover:text-[#000]">
          Let's talk
        </button>
      </div>
    </div>
  );
};

export default NavBar;
