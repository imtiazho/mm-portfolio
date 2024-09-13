import React, { useState } from "react";
import logo from "../../Images/logo.png";
import CustomLink from "../../Hooks/CustomLink";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import ResponsiveNavBar from "../ResponsiveNavBar/ResponsiveNavBar";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="bg-[#040D13]">
      <div className="w-[85%] m-auto py-4 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="" className="w-[120px]" />
        </Link>
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

        <Link
          to="/contact"
          style={{ border: ".75px solid rgba(252, 252, 252, 0.05)" }}
          className="btn bg-[#031B29] border-[#272727] py-[12px] px-[30px] text-[16px] font-[500] rounded-[4px] hover:bg-primary duration-500 hover:text-[#000] shadow-none"
        >
          Let's talk
        </Link>

        <div
          className="cursor-pointer block lg:hidden "
          onClick={() => setNavOpen(!navOpen)}
        >
          <FaBars style={{ width: "22px", height: "22px" }} />
        </div>
      </div>

      {navOpen && (
        <ResponsiveNavBar navOpen={navOpen} setNavOpen={setNavOpen} />
      )}
    </div>
  );
};

export default NavBar;
