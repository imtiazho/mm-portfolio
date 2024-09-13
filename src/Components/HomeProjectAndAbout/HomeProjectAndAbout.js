import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import sign from "../../Images/sign.png";
import mywork from "../../Images/my-works.png";
import { Link } from "react-router-dom";

const HomeProjectAndAbout = () => {
  return (
    <div className="w-full flex flex-col gap-3 sm:gap-5">
      <div className=" border-white rounded-[2rem] box-card overflow-hidden text-nowrap p-1">
        <div className="inside-border-box rounded-[2rem]">
          <div className="marquee-cus">
            <p
              style={{ color: "rgba(249, 249, 249, 0.70)" }}
              className="text-[10px] sm:text-[12px] tracking-[0.5px] font-[300] p-3 sm:p-4"
            >
              LATEST WORK AND{" "}
              <span className="font-normal text-[10px] sm:text-[12px]">
                FEATURED{" "}
              </span>{" "}
              LATEST WORK AND{" "}
              <span className="font-normal text-[10px] sm:text-[12px]">
                FEATURED{" "}
              </span>{" "}
              LATEST WORK AND{" "}
              <span className="font-normal text-[12px]">FEATURED</span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-5">
        <Link
          to="more-about"
          className="box-card flex flex-col justify-center p-3 sm:p-4 relative"
        >
          <div className="inside-border-box p-5 sm:block flex flex-col">
            <img className="mb-1 w-full m-auto" src={sign} alt="" />

            <div className="text-left flex flex-col justify-around">
              <p className="text-primary text-[10px] sm:text-[12px] mb-[1px] sm:mb-1">
                MORE ABOUT ME
              </p>
              <h5 className="text-[18px] sm:text-[24px] font-medium">
                Credentials
              </h5>
            </div>
          </div>

          {/* Link */}
          <div className="absolute bottom-[1.5rem] sm:bottom-[2rem] right-[1.5rem] sm:right-[2rem] opacity-55 icon-hov duration-300">
            <FaExternalLinkAlt />
          </div>
        </Link>
        <Link
          to="/my-works"
          className="box-card flex flex-col justify-center p-3 sm:p-4 relative"
        >
          <div className="inside-border-box p-5">
            <img className="mb-1 w-full m-auto" src={mywork} alt="" />

            <div className="text-left">
              <p className="text-primary text-[10px] sm:text-[12px] mb-[1px] sm:mb-1">
                SHOWCASE
              </p>
              <h5 className="text-[18px] sm:text-[24px] font-medium">
                Projects
              </h5>
            </div>
          </div>

          {/* Link */}
          <div className="absolute bottom-[1.5rem] sm:bottom-[2rem] right-[1.5rem] sm:right-[2rem] opacity-55 icon-hov duration-300">
            <FaExternalLinkAlt />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeProjectAndAbout;
