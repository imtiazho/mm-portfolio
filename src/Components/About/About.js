import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import userPic from "../../Images/me.jpg";
import "../Intro/intro.css";
import icon from "../../Images/icon1.png";
import HomeBlog from "../HomeBlog/HomeBlog";
import SocialLinks from "../SocialLinks/SocialLinks";
import LetsWork from "../LetsWork/LetsWork";
import Footer from "../Footer/Footer";
import HelmetHook from "../../Hooks/HelmetHook";
import AboutEduExpStruct from "../AboutEduExpStruct/AboutEduExpStruct";

const About = () => {
  const aboutData = {
    shortDetails:
      "I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.",
    detailsInWide:
      "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit. Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz elementum sahas facilisis leot.",
    experienceData: [
      {
        _id: 1,
        year: "2017 - 2023",
        institution: "Larsen & Toubro",
        heading: "Front-End Developer",
        detailsOfIts:
          "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.",
      },
      {
        _id: 2,
        year: "2007 - 2017",
        institution: "Bluebase Designs",
        heading: "Framer Designer & Developer",
        detailsOfIts:
          "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.",
      },
    ],
    educationData: [
      {
        _id: 1,
        year: "2004 - 2007",
        institution: "University of California",
        heading: "Bachelor Degree in Psychology",
        detailsOfIts:
          "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.",
      },
      {
        _id: 2,
        year: "2007 - 2009",
        institution: "University of Texas",
        heading: "Master Degree in Designing",
        detailsOfIts:
          "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.",
      },
    ],
  };

  useEffect(() => {
    window.scrollTo({
      top: "2rem",
    });
  }, []);

  return (
    <div>
      <HelmetHook pageName={"Mahmida - About"} />
      <NavBar />

      <div className="w-[95%] sm:w-[80%] m-auto">
        <div className="grid xl:grid-cols-10 items-end gap-[1rem] sm:gap-[1.5rem] mt-[1rem] sm:mt-[3rem]">
          <div className="xl:col-span-3 box-card p-3 sm:p-4">
            <div className="inside-border-box p-3 sm:p-4">
              <img cl src={userPic} alt="" />
            </div>
          </div>

          <div className="text-left xl:col-span-7">
            <span className="font-[600] text-[4.2rem] tracking-[1px] text-primary hidden xl:block">
              SELF-SUMMARY
            </span>

            <div className="box-card p-3 sm:p-4">
              <div className="inside-border-box pt-12 pr-4 pb-4 pl-4 sm:pt-12 sm:pr-12 sm:pb-12 sm:pl-12 realtive">
                <h1 className="text-[25px] sm:text-[35px] font-[600] mb-2 sm:mb-3 text-primary">
                  Mahmida Masum
                </h1>
                <p className="text-[13px] font-[400] sm:text-[15px] text-primary">
                  I am a San francisco-based product designer with a focus on
                  web design, illustration, a visual development. I have a
                  diverse range of experience having worked across various
                  fields and industries.
                </p>

                <div className="absolute right-[4rem] sm:right-[5rem] top-[1rem]">
                  <img className="h-[50px] sm:h-[75px]" src={icon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1rem] sm:gap-[1.5rem] mt-4 sm:mt-6">
          <div className="w-full h-full box-card p-3 sm:p-4">
            <div className="inside-border-box p-4 sm:p-8 text-left flex flex-col gap-[1rem] sm:gap-[2rem]">
              <p className="text-[#fff] font-medium text-[18px] sm:text-[20px] tracking-[0.5px]">
                EXPERIENCE
              </p>

              {aboutData?.experienceData.map((eachData) => (
                <AboutEduExpStruct eachData={eachData} />
              ))}
            </div>
          </div>
          <div className="w-full h-full box-card p-3 sm:p-4">
            <div className="inside-border-box p-4 sm:p-8 text-left flex flex-col gap-[1rem] sm:gap-[2rem]">
              <p className="text-[#fff] font-medium text-[18px] sm:text-[20px] tracking-[0.5px]">
                EDUCATION
              </p>

              {aboutData?.educationData.map((eachData) => (
                <AboutEduExpStruct eachData={eachData} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 mt-3 sm:mt-5 justify-between gap-3 sm:gap-5">
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
