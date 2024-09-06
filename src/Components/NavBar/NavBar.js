import React from "react";
import logo from "../../Images/logo.png";
import CustomLink from "../../Hooks/CustomLink";

const NavBar = () => {
  return (
    <div className="bg-[#040D13]">
      <div className="w-[85%] m-auto py-4 flex justify-between items-center">
        <img src={logo} alt="" className="w-[120px]" />
        <ul className="flex gap-[5rem]">
          <CustomLink
            to="/"
            className="text-[15px] text-[#fff] cursor-pointer ease-linear duration-300"
          >
            Home
          </CustomLink>
          <CustomLink
            to="/about"
            className="text-[15px] text-primary hover:text-[#fff] cursor-pointer ease-linear duration-300"
          >
            About
          </CustomLink>
          <CustomLink
            to="/my-works"
            className="text-[15px] text-primary hover:text-[#fff] cursor-pointer ease-linear duration-300"
          >
            Works
          </CustomLink>
          <CustomLink
            to="/contact"
            className="text-[15px] text-primary hover:text-[#fff] cursor-pointer ease-linear duration-300"
          >
            Contact
          </CustomLink>
        </ul>

        <button
          style={{ border: ".75px solid rgba(252, 252, 252, 0.05)" }}
          className="btn bg-[#031B29] border-[#272727] py-[12px] px-[30px] text-[16px] font-[500] rounded-[4px] hover:bg-primary duration-500 hover:text-[#000] shadow-none"
        >
          Let's talk
        </button>
      </div>
    </div>
  );
};

export default NavBar;
