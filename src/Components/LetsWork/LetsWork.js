import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import icon from "../../Images/icon1.png";
import { Link } from "react-router-dom";

const LetsWork = () => {
  return (
    <Link
      to="/contact"
      className="col-span-2 box-card p-3 sm:p-4 relative order-1 xl:order-none"
    >
      <div className="inside-border-box pt-5 pr-4 pb-5 pl-4 sm:pt-5 sm:pr-5 sm:pb-5 sm:pl-5 flex items-end text-start">
        <h1 className="text-[30px] sm:text-[40px] font-medium leading-[40px] sm:leading-[50px]">
          Let's <br /> Work{" "}
          <span className="text-[#4D66D0] text-[30px] sm:text-[40px] font-medium leading-[50px]">
            Together
          </span>
        </h1>
      </div>

      <div className="absolute xl:right-[5rem] right-[2rem] top-[1rem]">
        <img className="h-[50px] sm:h-[75px]" src={icon} alt="" />
      </div>

      {/* Link */}
      <div className="absolute bottom-[1.5rem] sm:bottom-[3rem] right-[1.5rem] sm:right-[3rem] opacity-55 icon-hov duration-300">
        <FaExternalLinkAlt />
      </div>
    </Link>
  );
};

export default LetsWork;
