import React from "react";
import "./intro.css";
import ProfileCard from "../ProfileCard/ProfileCard";
import HomeProjectAndAbout from "../HomeProjectAndAbout/HomeProjectAndAbout";
import HomeBlog from "../HomeBlog/HomeBlog";
import ServiceOffering from "../ServiceOffering/ServiceOffering";
import SocialLinks from "../SocialLinks/SocialLinks";

const Intro = () => {
  return (
    <div className="w-[95%] sm:w-[85%] m-auto mt-[1rem] sm:mt-[2rem]">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-5 items-end">
        <ProfileCard />
        <HomeProjectAndAbout />
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 mt-3 sm:mt-5 justify-between gap-3 sm:gap-5">
        <HomeBlog />
        <ServiceOffering />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Intro;
