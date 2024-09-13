import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div className="col-span-1 box-card p-3 sm:p-4 order-3 xl:order-none">
      <div
        style={{
          background:
            "linear-gradient(-89.99999881140911deg,rgba(0,170,255,.04) 0%,rgba(0,170,255,.019999999552965164) 100%)",
          backdropFilter: "blur(0px)",
          boxShadow: "0 1px 2px #00000040",
          height: "100%",
        }}
        className="pt-14 pr-5 pb-5 pl-5 flex flex-col justify-between single-box"
      >
        <div className="mb-4 sm:mb-3 flex justify-center items-center gap-4">
          <Link
            style={{
              background:
                "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
              backdropFilter: "blur(15px)",
              border: ".75px solid rgba(251, 251, 251, 0.1)",
            }}
            className="p-3 sm:p-5"
          >
            <RiFacebookBoxLine className="w-[25px] sm:w-[32px] h-[25px] sm:h-[32px]" />
          </Link>
          <Link
            style={{
              background:
                "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
              backdropFilter: "blur(15px)",
              border: ".75px solid rgba(251, 251, 251, 0.1)",
            }}
            className="p-3 sm:p-5"
          >
            <CiInstagram className="w-[25px] sm:w-[32px] h-[25px] sm:h-[32px]" />
          </Link>
        </div>
        <div className="text-left">
          <p className="text-primary text-[10px] sm:text-[12px] mb-[1px] sm:mb-1">
            STAY WITH ME
          </p>
          <h5 className="text-[18px] sm:text-[24px] font-medium">Profiles</h5>
        </div>
      </div>

      {/* Link */}
      <div className="absolute bottom-[2rem] right-[2rem] opacity-55 icon-hov duration-300">
        <FaExternalLinkAlt />
      </div>
    </div>
  );
};

export default SocialLinks;
