import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import blogPic from "../../Images/gfonts.png";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  return (
    <Link to="/blog" className="w-[25%] box-card p-4">
      <div className="inside-border-box p-5">
        <img className="mb-1 w-full m-auto" src={blogPic} alt="" />

        <div className="text-left">
          <p className="text-primary text-[12px] mb-1">BLOGS</p>
          <h5 className="text-[24px] font-medium">Typing</h5>
        </div>
      </div>

      {/* Link */}
      <div className="absolute bottom-[2rem] right-[2rem] opacity-55 icon-hov duration-300">
        <FaExternalLinkAlt />
      </div>
    </Link>
  );
};

export default HomeBlog;
