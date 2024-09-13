import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import userPhoto from "../../Images/me.jpg";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <Link
      to="/about"
      className="w-full h-full p-3 sm:p-6 box-card box-border realtive"
    >
      <div className="inside-border-box grid grid-cols-7 justify-start items-center drop-shadow-xl gap-[1.5rem] p-6">
        <div className="overflow-hidden col-span-3">
          <img
            className="rounded-tl-[30px] rounded-br-[30px]"
            src={userPhoto}
            alt=""
          />
        </div>
        <div className="text-start flex flex-col sm:gap-3 gap-1 col-span-4">
          <h5 className="font-medium tracking-[0.5px] text-primary text-[12px] sm:text-[15px]">
            A WEB DESIGNER
          </h5>
          <h1 className="sm:text-[42px] text-[30px] font-[600] leading-[35px] sm:leading-[40px]">
            Mahmida <br /> Masum
          </h1>
          <p className="sm:mt-2 mt-1 text-[11px] sm:text-[13px] tracking-[0.5px] text-primary font-[300]">
            I am a Web Designer based in Bangladesh, Dhaka.
          </p>
        </div>
      </div>

      {/* Link */}
      <div className="absolute bottom-[2rem] sm:bottom-[3rem] right-[2rem] sm:right-[3rem] opacity-55 icon-hov duration-300">
        <FaExternalLinkAlt />
      </div>
    </Link>
  );
};

export default ProfileCard;
