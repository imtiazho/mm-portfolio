import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import sign from "../../Images/sign2.png";
import mywork from "../../Images/my-works.png";
import { Link } from "react-router-dom";

const HomeProjectAndAbout = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className=" border-white rounded-[2rem] box-card overflow-hidden text-nowrap p-1">
        <div className="inside-border-box rounded-[2rem]">
          <div className="marquee-cus">
            <p
              style={{ color: "rgba(249, 249, 249, 0.70)" }}
              className="text-[12px] tracking-[0.5px] font-[300] p-4"
            >
              LATEST WORK AND{" "}
              <span className="font-normal text-[12px]">FEATURED </span> LATEST
              WORK AND{" "}
              <span className="font-normal text-[12px]">FEATURED </span> LATEST
              WORK AND <span className="font-normal text-[12px]">FEATURED</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <Link
          to="more-about"
          className="w-[50%] box-card flex flex-col justify-center p-4 relative"
        >
          <div className="inside-border-box p-5">
            <img className="mb-1 w-full m-auto" src={sign} alt="" />

            <div className="text-left">
              <p className="text-primary text-[12px] mb-1">MORE ABOUT ME</p>
              <h5 className="text-[24px] font-medium">Credentials</h5>
            </div>
          </div>

          {/* Link */}
          <div className="absolute bottom-[2rem] right-[2rem] opacity-55 icon-hov duration-300">
            <FaExternalLinkAlt />
          </div>
        </Link>
        <Link
          to="/my-works"
          className="box-card w-[50%] flex flex-col justify-center p-4 relative"
        >
          <div className="inside-border-box p-5">
            <img className="mb-1 w-full m-auto" src={mywork} alt="" />

            <div className="text-left">
              <p className="text-primary text-[12px] mb-1">SHOWCASE</p>
              <h5 className="text-[24px] font-medium">Projects</h5>
            </div>
          </div>

          {/* Link */}
          <div className="absolute bottom-[2rem] right-[2rem] opacity-55 icon-hov duration-300">
            <FaExternalLinkAlt />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeProjectAndAbout;
