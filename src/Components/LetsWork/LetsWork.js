import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import icon from "../../Images/icon1.png";
import { Link } from "react-router-dom";

const LetsWork = () => {
  return (
    <Link to="/contact" className="w-[50%] box-card p-4 relative">
      <div className="inside-border-box p-5 flex items-end text-start">
        <h1 className="text-[40px] font-medium leading-[50px]">
          Let's <br /> Work{" "}
          <span className="text-[#4D66D0] text-[40px] font-medium leading-[50px]">
            Together
          </span>
        </h1>
      </div>

      <div className="absolute left-[5rem] top-[1rem]">
        <img src={icon} alt="" />
      </div>
      {/* Link */}
      <div className="absolute bottom-[3rem] right-[3rem] opacity-55 icon-hov duration-300">
        <FaExternalLinkAlt />
      </div>
    </Link>
  );
};

export default LetsWork;
