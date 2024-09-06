import React from "react";
import NavBar from "../NavBar/NavBar";
import userPic from "../../Images/me.jpg";
import "../Intro/intro.css";
import star from "../../Images/star.png";
import icon from "../../Images/icon1.png";
import HomeBlog from "../HomeBlog/HomeBlog";
import SocialLinks from "../SocialLinks/SocialLinks";
import LetsWork from "../LetsWork/LetsWork";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
      <NavBar />

      <div className="w-[80%] m-auto">
        <div className="flex items-end gap-[1.5rem] mt-[3rem]">
          <div className="box-card w-[30%] p-4">
            <div className="inside-border-box p-4">
              <img src={userPic} alt="" />
            </div>
          </div>

          <div className="text-left w-[70%]">
            <div className="flex jutify-center items-center gap-[1rem] font-[600]">
              <img src={star} alt="" />
              <span className="text-[4.2rem] tracking-[1px] text-primary">
                SELF-SUMMARY
              </span>
              <img src={star} alt="" />
            </div>

            <div className="box-card p-4">
              <div className="inside-border-box p-12 realtive">
                <h1 className="text-[35px] font-[600] mb-3 text-primary">
                  Mahmida Masum
                </h1>
                <p className="text-[15px] text-primary">
                  I am a San francisco-based product designer with a focus on
                  web design, illustration, a visual development. I have a
                  diverse range of experience having worked across various
                  fields and industries.
                </p>

                <div className="absolute right-[5rem] top-[1rem]">
                  <img src={icon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-[1.5rem] mt-6">
          <div className="w-full h-full box-card p-4">
            <div className="inside-border-box p-8 text-left flex flex-col gap-[2rem]">
              <p className="text-[#fff] font-medium text-[20px] tracking-[0.5px]">
                EXPERIENCE
              </p>

              <div className="">
                <p className="text-primary mb-[5px]">2017 - 2023</p>
                <p className="text-accent font-medium text-[20px]">
                  Front-End Developer
                </p>
                <p className="text-primary text-[12px] mt-1">Larsen & Toubro</p>
              </div>

              <div className="">
                <p className="text-primary mb-[5px]">2007 - 2017</p>
                <p className="text-accent font-medium text-[20px]">
                  Framer Designer & Developer
                </p>
                <p className="text-primary text-[12px] mt-1">
                  Bluebase Designs
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full box-card p-4">
            <div className="inside-border-box p-8 text-left flex flex-col gap-[2rem]">
              <p className="text-[#fff] font-medium text-[20px] tracking-[0.5px]">
                EDUCATION
              </p>

              <div className="">
                <p className="text-primary mb-[5px]">2004 - 2007</p>
                <p className="text-accent font-medium text-[20px]">
                  Bachelor Degree in Psychology
                </p>
                <p className="text-primary text-[12px] mt-1">
                  University of California
                </p>
              </div>

              <div className="">
                <p className="text-primary mb-[5px]">2007 - 2009</p>
                <p className="text-accent font-medium text-[20px]">
                  Master Degree in Designing
                </p>
                <p className="text-primary text-[12px] mt-1">
                  University of Texas
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-5 justify-between gap-5">
          <HomeBlog />
          <LetsWork />
          <SocialLinks />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;
