import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import userPic from "../../Images/me.jpg";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import HelmetHook from "../../Hooks/HelmetHook";
import { AiOutlineBehanceSquare } from "react-icons/ai";

const MoreAbout = () => {
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
    skills: [
      {
        name: "Javascript",
        percentage: "85%",
        quality: "Non enim praesent",
      },
      {
        name: "Python",
        percentage: "85%",
        quality: "Non enim praesent",
      },
      {
        name: "Figma",
        percentage: "85%",
        quality: "Non enim praesent",
      },
      {
        name: "React",
        percentage: "85%",
        quality: "Non enim praesent",
      },
      {
        name: "WordPress",
        percentage: "85%",
        quality: "Non enim praesent",
      },
      {
        name: "Adobe XD",
        percentage: "85%",
        quality: "Non enim praesent",
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
      <HelmetHook pageName={"Mahmida - More About"} />
      <NavBar />

      <div className="w-[95%] sm:w-[85%] m-auto">
        <div className="grid xl:grid-cols-10 gap-[1rem] mt-[1rem] sm:mt-[3rem] relative">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="xl:col-span-3 xl:h-[90vh] h-fit xl:sticky xl:top-0 xl:bottom-0 xl:right-0 xl:left-0 box-card p-3 sm:p-6"
          >
            <div
              style={{
                background:
                  "linear-gradient(-89.99999881140911deg,rgba(0,170,255,.04) 0%,rgba(0,170,255,.019999999552965164) 100%)",
                backdropFilter: "blur(0px)",
                boxShadow: "0 1px 2px #00000040",
                height: "100%",
              }}
              className="single-box p-2 sm:p-4 flex flex-col gap-5 sm:gap-8"
            >
              <div className="mb-0 sm:mb-1">
                <img className="object-cover" src={userPic} alt="" />
              </div>

              <div>
                <p className="text-[23px] sm:text-[27px] font-semibold tracking-[0.5px] text-accent">
                  Mahmida Masum
                </p>
                <p className="text-primary text-[11px] sm:text-[13px] font-[300] tracking-[0.5px]">
                  @mumu.mahmida
                </p>
              </div>

              <div className="flex ietms-center justify-center gap-4">
                <Link
                  style={{
                    background:
                      "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                    backdropFilter: "blur(15px)",
                    border: ".75px solid rgba(251, 251, 251, 0.1)",
                  }}
                  className="p-2 sm:p-4"
                >
                  <AiOutlineBehanceSquare className="text-[18px] sm:text-[20px]" />
                </Link>

                <Link
                  style={{
                    background:
                      "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                    backdropFilter: "blur(15px)",
                    border: ".75px solid rgba(251, 251, 251, 0.1)",
                  }}
                  className="p-2 sm:p-4"
                >
                  <FaFacebookSquare className="text-[18px] sm:text-[20px]" />
                </Link>

                <Link
                  style={{
                    background:
                      "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                    backdropFilter: "blur(15px)",
                    border: ".75px solid rgba(251, 251, 251, 0.1)",
                  }}
                  className="p-2 sm:p-4"
                >
                  <FaInstagramSquare className="text-[18px] sm:text-[20px]" />
                </Link>

                <Link
                  style={{
                    background:
                      "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                    backdropFilter: "blur(15px)",
                    border: ".75px solid rgba(251, 251, 251, 0.1)",
                  }}
                  className="p-2 sm:p-4"
                >
                  <FaLinkedin className="text-[18px] sm:text-[20px]" />
                </Link>
              </div>

              <Link
                to="/contact"
                style={{ border: ".75px solid rgba(252, 252, 252, 0.05)" }}
                className="btn bg-[#031B29] border-[#272727] py-[12px] px-[30px] text-[13px] sm:text-[15px] font-[500] rounded-[4px] hover:bg-primary duration-500 hover:text-[#000] shadow-none"
              >
                Let's talk
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="xl:col-span-7 border box-card p-3 sm:p-4"
          >
            <div className="inside-border-box text-left p-5 sm:p-8 flex flex-col gap-8 sm:gap-12">
              <div>
                <p className="text-[#fff] font-medium text-[17px] sm:text-[20px] tracking-[0.5px] mb-2 sm:mb-4">
                  ABOUT ME
                </p>
                <p className="text-primary text-[12px] sm:text-[14px] tracking-[0.4px]">
                  {aboutData.detailsInWide}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <p className="text-[#fff] font-medium text-[17px] sm:text-[20px] tracking-[0.5px]">
                  EXPERIENCE
                </p>
                {aboutData?.experienceData?.map((eachData) => (
                  <div key={eachData._id} className="mb-2">
                    <p className="text-primary text-[13px] sm:text-[15px] mb-[3px] sm:mb-[5px]">
                      {eachData.year}
                    </p>
                    <p className="text-[#4D66D0] font-medium text-[18px] sm:text-[20px]">
                      {eachData.heading}
                    </p>
                    <p className="text-primary text-[10px] sm:text-[12px] sm:mt-1">
                      {eachData.institution}
                    </p>
                    <p className="text-primary text-[12px] sm:text-[14px] mt-1">
                      {eachData.detailsOfIts}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <p className="text-[#fff] font-medium text-[17px] sm:text-[20px] tracking-[0.5px]">
                  EDUCATION
                </p>

                {aboutData?.educationData?.map((eachData) => (
                  <div key={eachData._id} className="mb-2">
                    <p className="text-primary text-[13px] sm:text-[15px] mb-[3px] sm:mb-[5px]">
                      {eachData.year}
                    </p>
                    <p className="text-[#4D66D0] font-medium text-[18px] sm:text-[20px]">
                      {eachData.heading}
                    </p>
                    <p className="text-primary text-[10px] sm:text-[12px] sm:mt-1">
                      {eachData.institution}
                    </p>
                    <p className="text-primary text-[12px] sm:text-[14px] mt-1">
                      {eachData.detailsOfIts}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <p className="text-[#fff] font-medium text-[17px] sm:text-[20px] tracking-[0.5px] mb-1 sm:mb-2">
                  SKILLS
                </p>

                <div className="grid grid-cols-2 gap-6 sm:gap-8">
                  {aboutData?.skills?.map((eachData) => (
                    <div>
                      <p className="text-primary mb-[1px] sm:mb-[2px] text-[11px] sm:text-[13px]">
                        {eachData?.percentage}
                      </p>
                      <p className="text-accent font-medium text-[18px] sm:text-[20px]">
                        {eachData?.name}
                      </p>
                      <p className="text-primary text-[10px] sm:text-[12px] mt-1">
                        {eachData?.quality}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default MoreAbout;
