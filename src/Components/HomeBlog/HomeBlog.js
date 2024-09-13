import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import blogPic from "../../Images/blog-icon.png";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  return (
    <Link
      to="/blog"
      className="col-span-1 box-card p-3 sm:p-4 order-2 xl:order-none"
    >
      <div className="inside-border-box p-5 flex flex-col justify-around">
        <img
          className="sm:mb-1 w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] m-auto"
          src={blogPic}
          alt=""
        />

        <div className="text-left">
          <p className="text-primary text-[10px] sm:text-[12px] mb-[1px] sm:mb-1">
            BLOGS
          </p>
          <h5 className="text-[18px] sm:text-[24px] font-medium">Typing</h5>
        </div>
      </div>

      {/* Link */}
      <div className="absolute bottom-[1.5rem] sm:bottom-[2rem] right-[1.5rem] sm:right-[2rem] opacity-55 icon-hov duration-300">
        <FaExternalLinkAlt />
      </div>
    </Link>
  );
};

export default HomeBlog;
