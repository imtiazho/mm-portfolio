import React from "react";
import "./intro.css";
import ProfileCard from "../ProfileCard/ProfileCard";
import HomeProjectAndAbout from "../HomeProjectAndAbout/HomeProjectAndAbout";
import HomeBlog from "../HomeBlog/HomeBlog";
import ServiceOffering from "../ServiceOffering/ServiceOffering";
import SocialLinks from "../SocialLinks/SocialLinks";

const Intro = () => {
  return (
    <div className="w-[85%] m-auto mt-[2rem]">
      <div className="flex gap-5 items-end">
        <ProfileCard />
        <HomeProjectAndAbout />
      </div>

      <div className="flex mt-5 justify-between gap-5">
        <HomeBlog />
        <ServiceOffering />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Intro;
