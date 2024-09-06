import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import userPhoto from "../../Images/me.jpg";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <Link
      to="/about"
      className="w-full h-full p-6 box-card box-border realtive"
    >
      <div className="inside-border-box flex justify-start items-center drop-shadow-xl gap-[2rem] p-6">
        <div className="w-[50%] overflow-hidden">
          <img
            className="rounded-tl-[30px] rounded-br-[30px]"
            src={userPhoto}
            alt=""
          />
        </div>
        <div className="text-start flex flex-col gap-2">
          <h5 className="font-medium tracking-[0.5px] text-primary">
            A WEB DESIGNER
          </h5>
          <h1 className="text-[42px] font-[600] leading-[40px]">
            Mahmida <br /> Masum
          </h1>
          <p className="mt-2 text-[13px] tracking-[0.5px] text-primary font-[300]">
            I am a Web Designer based in Bangladesh, Dhaka.
          </p>
        </div>
      </div>

      {/* Link */}
      <div className="absolute bottom-[3rem] right-[3rem] opacity-55 icon-hov duration-300">
        <FaExternalLinkAlt />
      </div>
    </Link>
  );
};

export default ProfileCard;
