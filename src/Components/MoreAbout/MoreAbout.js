import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import userPic from "../../Images/me.jpg";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { LiaBehanceSquare } from "react-icons/lia";
import HelmetHook from "../../Hooks/HelmetHook";

const MoreAbout = () => {
  useEffect(() => {
    window.scrollTo({
      top: "2rem",
    });
  }, []);

  return (
    <div>
      <HelmetHook pageName={"Mahmida - More About"} />
      <NavBar />

      <div className="w-[85%] m-auto">
        <div className="flex gap-[1.5rem] mt-[3rem] relative">
          <div className="w-[30%] h-[90vh] sticky top-0 bottom-0 right-0 left-0 box-card p-6">
            <div
              style={{
                background:
                  "linear-gradient(-89.99999881140911deg,rgba(0,170,255,.04) 0%,rgba(0,170,255,.019999999552965164) 100%)",
                backdropFilter: "blur(0px)",
                boxShadow: "0 1px 2px #00000040",
                height: "100%",
              }}
              className="single-box p-4 flex flex-col gap-8"
            >
              <div className="mb-1">
                <img className="object-cover" src={userPic} alt="mb-1" />
              </div>

              <div>
                <p className="text-[27px] font-semibold tracking-[0.5px] text-accent">
                  Mahmida Masum
                </p>
                <p className="text-primary text-[13px] font-[300] tracking-[0.5px]">
                  @mumu.mahmida
                </p>
              </div>

              <div className="flex ietms-center flex-wrap justify-center gap-6">
                <Link
                  style={{
                    background:
                      "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                    backdropFilter: "blur(15px)",
                    border: ".75px solid rgba(251, 251, 251, 0.1)",
                  }}
                  className="p-4"
                >
                  <LiaBehanceSquare
                    style={{ width: "20px", height: "20px", color: "#00aaff" }}
                  />
                </Link>

                <Link
                  style={{
                    background:
                      "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                    backdropFilter: "blur(15px)",
                    border: ".75px solid rgba(251, 251, 251, 0.1)",
                  }}
                  className="p-4"
                >
                  <FaFacebookSquare
                    style={{ width: "20px", height: "20px", color: "#00aaff" }}
                  />
                </Link>

                <Link
                  style={{
                    background:
                      "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                    backdropFilter: "blur(15px)",
                    border: ".75px solid rgba(251, 251, 251, 0.1)",
                  }}
                  className="p-4"
                >
                  <FaInstagramSquare
                    style={{ width: "20px", height: "20px", color: "#00aaff" }}
                  />
                </Link>

                <Link
                  style={{
                    background:
                      "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                    backdropFilter: "blur(15px)",
                    border: ".75px solid rgba(251, 251, 251, 0.1)",
                  }}
                  className="p-4"
                >
                  <CiLinkedin
                    style={{ width: "20px", height: "20px", color: "#00aaff" }}
                  />
                </Link>
              </div>

              <Link
                to="/contact"
                style={{ border: ".75px solid rgba(252, 252, 252, 0.05)" }}
                className="btn bg-[#031B29] border-[#272727] py-[12px] px-[30px] text-[16px] font-[500] rounded-[4px] hover:bg-primary duration-500 hover:text-[#000] shadow-none"
              >
                Let's talk
              </Link>
            </div>
          </div>
          <div className="w-[70%] border box-card p-4">
            <div className="inside-border-box text-left p-8 flex flex-col gap-12">
              <div>
                <p className="text-[#fff] font-medium text-[20px] tracking-[0.5px] mb-4">
                  ABOUT ME
                </p>
                <p className="text-primary text-[14px] tracking-[0.4px]">
                  Sit amet luctussd fav venenatis, lectus magna fringilla inis
                  urna, porttitor rhoncus dolor purus non enim praesent in
                  elementum sahas facilisis leo, vel fringilla est ullamcorper
                  eget nulla facilisi etisam dignissim diam quis enim lobortis
                  viverra orci sagittis eu volutpat odio facilisis mauris sit.
                  Scelerisque fermentum duisi faucibus in ornare quam sisd sit
                  amet luctussd fav venenatis, lectus magna fringilla zac urna,
                  porttitor rhoncus dolor purus non enim praesent cuz elementum
                  sahas facilisis leot.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[#fff] font-medium text-[20px] tracking-[0.5px]">
                  EXPERIENCE
                </p>

                <div className="mb-2">
                  <p className="text-primary mb-[5px]">2017 - 2023</p>
                  <p className="text-[#4D66D0] font-medium text-[20px]">
                    Front-End Developer
                  </p>
                  <p className="text-primary text-[12px] mt-1">
                    Larsen & Toubro
                  </p>
                  <p className="text-primary text-[14px] mt-1">
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis
                    urna, porttitor rhoncus dolor purus non enim praesent in
                    elementum sahas facilisis leo, vel fringilla est ullamcorper
                    eget nulla facilisi etisam dignissim diam quis enim lobortis
                    viverra orci sagittis eu volutpat odio facilisis mauris sit.
                  </p>
                </div>

                <div className="mb-2">
                  <p className="text-primary mb-[5px]">2007 - 2017</p>
                  <p className="text-[#4D66D0] font-medium text-[20px]">
                    Framer Designer & Developer
                  </p>
                  <p className="text-primary text-[12px] mt-1">
                    Bluebase Designs
                  </p>
                  <p className="text-primary text-[14px] mt-1">
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis
                    urna, porttitor rhoncus dolor purus non enim praesent in
                    elementum sahas facilisis leo, vel fringilla est ullamcorper
                    eget nulla facilisi etisam dignissim diam quis enim lobortis
                    viverra orci sagittis eu volutpat odio facilisis mauris sit.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[#fff] font-medium text-[20px] tracking-[0.5px]">
                  EDUCATION
                </p>

                <div className="mb-2">
                  <p className="text-primary mb-[5px]">2004 - 2007</p>
                  <p className="text-[#4D66D0] font-medium text-[20px]">
                    Bachelor Degree in Psychology
                  </p>
                  <p className="text-primary text-[12px] mt-1">
                    University of California
                  </p>
                  <p className="text-primary text-[14px] mt-1">
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis
                    urna, porttitor rhoncus dolor purus non enim praesent in
                    elementum sahas facilisis leo, vel fringilla est ullamcorper
                    eget nulla facilisi etisam dignissim diam quis enim lobortis
                    viverra orci sagittis eu volutpat odio facilisis mauris sit.
                  </p>
                </div>

                <div className="mb-2">
                  <p className="text-primary mb-[5px]">2007 - 2009</p>
                  <p className="text-[#4D66D0] font-medium text-[20px]">
                    Master Degree in Designing
                  </p>
                  <p className="text-primary text-[12px] mt-1">
                    University of Texas
                  </p>
                  <p className="text-primary text-[14px] mt-1">
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis
                    urna, porttitor rhoncus dolor purus non enim praesent in
                    elementum sahas facilisis leo, vel fringilla est ullamcorper
                    eget nulla facilisi etisam dignissim diam quis enim lobortis
                    viverra orci sagittis eu volutpat odio facilisis mauris sit.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[#fff] font-medium text-[20px] tracking-[0.5px] mb-2">
                  SKILLS
                </p>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-primary mb-[2px] text-[13px]">85%</p>
                    <p className="text-accent font-medium text-[20px]">
                      Javascript
                    </p>
                    <p className="text-primary text-[12px] mt-1">
                      Non enim praesent
                    </p>
                  </div>
                  <div>
                    <p className="text-primary mb-[2px] text-[13px]">85%</p>
                    <p className="text-accent font-medium text-[20px]">
                      Python
                    </p>
                    <p className="text-primary text-[12px] mt-1">
                      Non enim praesent
                    </p>
                  </div>
                  <div>
                    <p className="text-primary mb-[2px] text-[13px]">85%</p>
                    <p className="text-accent font-medium text-[20px]">Figma</p>
                    <p className="text-primary text-[12px] mt-1">
                      Non enim praesent
                    </p>
                  </div>
                  <div>
                    <p className="text-primary mb-[2px] text-[13px]">85%</p>
                    <p className="text-accent font-medium text-[20px]">React</p>
                    <p className="text-primary text-[12px] mt-1">
                      Non enim praesent
                    </p>
                  </div>
                  <div>
                    <p className="text-primary mb-[2px] text-[13px]">85%</p>
                    <p className="text-accent font-medium text-[20px]">
                      WordPress
                    </p>
                    <p className="text-primary text-[12px] mt-1">
                      Non enim praesent
                    </p>
                  </div>
                  <div>
                    <p className="text-primary mb-[2px] text-[13px]">85%</p>
                    <p className="text-accent font-medium text-[20px]">
                      Adobe XD
                    </p>
                    <p className="text-primary text-[12px] mt-1">
                      Non enim praesent
                    </p>
                  </div>
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
