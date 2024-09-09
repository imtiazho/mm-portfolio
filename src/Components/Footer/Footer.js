import React from "react";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="w-full flex flex-col gap-[2rem] justify-center items-center mt-[6rem] pb-[2rem]">
      <img className="w-[120px]" src={logo} alt="" />
      <ul className="flex justify-center gap-[5rem]">
        <Link
          to="/"
          className="text-[12px] uppercase text-primary hover:text-[#fff] cursor-pointer ease-linear duration-300"
        >
          Home
        </Link>
        <Link
          to="/more-about"
          className="text-[12px] uppercase text-primary hover:text-[#fff] cursor-pointer ease-linear duration-300"
        >
          About
        </Link>
        <Link
          to="/my-works"
          className="text-[12px] uppercase text-primary hover:text-[#fff] cursor-pointer ease-linear duration-300"
        >
          Works
        </Link>
        <Link
          to="/contact"
          className="text-[12px] uppercase text-primary hover:text-[#fff] cursor-pointer ease-linear duration-300"
        >
          Contact
        </Link>
      </ul>
      <div className="w-[40%] bg-[#555555] h-[1px]"></div>
      <p className="text-[13px] tracking-[.5px] font-light text-primary">
        © {year} All rights reserved by Mahmida Masum
      </p>
    </div>
  );
};

export default Footer;
