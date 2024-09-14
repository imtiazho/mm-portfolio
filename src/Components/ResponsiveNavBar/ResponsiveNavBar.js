import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const ResponsiveNavBar = ({ navOpen, setNavOpen }) => {
  return (
    <div className="h-full w-full bg-black z-[11] top-0 absolute block lg:hidden">
      <div className="relative">
        <RxCross2
          className="absolute text-white top-[2.1%] right-[2.5%] sm:right-[7.5%] top-[27px] cursor-pointer border border-white text-[26px] p-1"
          onClick={() => setNavOpen(!navOpen)}
        />
        <ul className="flex flex-col pt-[2rem] items-center justify-around h-[100vh]">
          <li className="md:text-[14px] text-[11px] font-medium text-primary hover:text-white duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="md:text-[14px] text-[11px] font-medium text-primary hover:text-white duration-300">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="md:text-[14px] text-[11px] font-medium text-primary hover:text-white duration-300">
            <Link to="/my-works">WORKS</Link>
          </li>
          <li className="md:text-[14px] text-[11px] font-medium text-primary hover:text-white duration-300">
            <Link to="/contact">CONTACTS</Link>
          </li>
          <li className="md:text-[14px] text-[11px] font-medium text-primary hover:text-white duration-300">
            <Link to="/services">SERVICES</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveNavBar;
