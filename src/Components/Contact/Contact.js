import React from "react";
import NavBar from "../NavBar/NavBar";
import { CiInstagram, CiLinkedin, CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { LiaBehanceSquare } from "react-icons/lia";
import "../Intro/intro.css";
import Footer from "../Footer/Footer";
import HomeBlog from "../HomeBlog/HomeBlog";
import ServiceOffering from "../ServiceOffering/ServiceOffering";
import SocialLinks from "../SocialLinks/SocialLinks";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="w-[85%] m-auto">
        <div className="grid grid-cols-5 gap-6 mt-[3rem]">
          <div className="col-span-2">
            <div className="box-card p-4 flex flex-col gap-4">
              <div className="inside-border-box p-8 flex items-center gap-4">
                <div
                  style={{
                    background:
                      "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                    backdropFilter: "blur(15px)",
                    border: ".75px solid rgba(251, 251, 251, 0.1)",
                  }}
                  className="p-5 flex items-center gap-4"
                >
                  <CiMail
                    style={{ width: "32px", height: "32px", color: "#00aaff" }}
                  />
                </div>

                <div className="text-left flex flex-col gap-1">
                  <p className="text-accent text-[16px] tracking-[0.5px] font-medium">
                    MAIL US
                  </p>
                  <p className="text-primary text-[14px]">info@bluebase.com</p>
                  <p className="text-primary text-[14px]">
                    {" "}
                    info@bluebase2.com
                  </p>
                </div>
              </div>
              <div className="inside-border-box p-8 flex items-center gap-4">
                <div
                  style={{
                    background:
                      "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                    backdropFilter: "blur(15px)",
                    border: ".75px solid rgba(251, 251, 251, 0.1)",
                  }}
                  className="p-5 flex items-center gap-4"
                >
                  <MdOutlineLocalPhone
                    style={{ width: "32px", height: "32px", color: "#00aaff" }}
                  />
                </div>

                <div className="text-left flex flex-col gap-1">
                  <p className="text-accent text-[16px] tracking-[0.5px] font-medium">
                    CONTACT US
                  </p>
                  <p className="text-primary text-[14px]">+1 504-899-8221</p>
                  <p className="text-primary text-[14px]"> +1 504-749-5456</p>
                </div>
              </div>
              <div className="inside-border-box p-8 flex items-center gap-4">
                <div
                  style={{
                    background:
                      "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                    backdropFilter: "blur(15px)",
                    border: ".75px solid rgba(251, 251, 251, 0.1)",
                  }}
                  className="p-5 flex items-center gap-4"
                >
                  <IoLocationOutline
                    style={{ width: "32px", height: "32px", color: "#00aaff" }}
                  />
                </div>

                <div className="text-left flex flex-col gap-1">
                  <p className="text-accent text-[16px] tracking-[0.5px] font-medium">
                    LOCATION
                  </p>
                  <p className="text-primary text-[14px]">
                    22 Baker Street, Texas United States
                  </p>
                  <p className="text-primary text-[14px]"> W1U 3BW</p>
                </div>
              </div>
            </div>

            <div className="box-card p-4 mt-4">
              <div className="inside-border-box p-4 text-left">
                <p className="text-[20px] tracking-[0.5px] mb-4 font-medium text-center">
                  SOCIAL INFO
                </p>

                <div className="flex items-center justify-center flex-wrap gap-8">
                  <Link
                    style={{
                      background:
                        "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                      backdropFilter: "blur(15px)",
                      border: ".75px solid rgba(251, 251, 251, 0.1)",
                    }}
                    className="p-4 flex items-center gap-4"
                  >
                    <RiFacebookBoxLine
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </Link>
                  <Link
                    style={{
                      background:
                        "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                      backdropFilter: "blur(15px)",
                      border: ".75px solid rgba(251, 251, 251, 0.1)",
                    }}
                    className="p-4 flex items-center gap-4"
                  >
                    <CiInstagram
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </Link>
                  <Link
                    style={{
                      background:
                        "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                      backdropFilter: "blur(15px)",
                      border: ".75px solid rgba(251, 251, 251, 0.1)",
                    }}
                    className="p-4 flex items-center gap-4"
                  >
                    <CiLinkedin
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </Link>
                  <Link
                    style={{
                      background:
                        "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                      backdropFilter: "blur(15px)",
                      border: ".75px solid rgba(251, 251, 251, 0.1)",
                    }}
                    className="p-4 flex items-center gap-4"
                  >
                    <LiaBehanceSquare
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="box-card p-6">
              <div className="inside-border-box p-4 flex items-stretch gap-2">
                <div
                  style={{
                    background:
                      "linear-gradient(.0000026635723315848736deg,rgba(0,170,255,.05) 0%,rgba(182,102,195,.05000000074505806) 100%)",
                    backdropFilter: "blur(26.25249671936035px)",
                    border: ".75px solid rgb(252 252 252 / 10%)",
                  }}
                  className="py-3 px-4 text-[13px] tracking-[0.3px] w-fit"
                >
                  Contact
                </div>
                <div
                  style={{
                    color: "rgba(249, 249, 249, 0.70)",
                    background:
                      "linear-gradient(.0000026635723315848736deg,rgba(0,170,255,.05) 0%,rgba(182,102,195,.05000000074505806) 100%)",
                    backdropFilter: "blur(26.25249671936035px)",
                    border: ".75px solid rgb(252 252 252 / 10%)",
                  }}
                  className="marquee-cus w-full flex items-center"
                >
                  <p className="text-[12px] tracking-[0.5px] font-[300] w-full text-accent">
                    ⌘ It is a long established fact that a reader will
                    distracted by the readable content of a page when looking an
                    its readable ⌘
                  </p>
                </div>
              </div>

              {/* Form */}
              <form
                style={{
                  background:
                    "linear-gradient(rgba(0, 163, 255, 0.06) 100%, rgba(0, 163, 255, 0.5) 0%)",
                  transition: "0.3s ease",
                  height: "100%",
                }}
                className="flex flex-col gap-6 p-4 mt-4"
              >
                <input
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0, 170, 255, 0.01), rgba(0, 170, 255, 0.05))",
                  }}
                  placeholder="Full Name*"
                  type="text"
                  className="w-full focus:outline-0 h-full p-[1rem] text-accent input-focus-border placeholder:text-[15px]"
                />
                <input
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0, 170, 255, 0.01), rgba(0, 170, 255, 0.05))",
                  }}
                  placeholder="Email"
                  type="email"
                  className="w-full focus:outline-0 h-full p-[1rem] text-accent input-focus-border placeholder:text-[15px]"
                />
                <input
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0, 170, 255, 0.01), rgba(0, 170, 255, 0.05))",
                  }}
                  placeholder="Subject"
                  type="text"
                  className="w-full focus:outline-0 h-full p-[1rem] text-accent input-focus-border placeholder:text-[15px]"
                />
                <textarea
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0, 170, 255, 0.01), rgba(0, 170, 255, 0.05))",
                  }}
                  rows="8"
                  placeholder="Message"
                  type="text"
                  className="w-full focus:outline-0 h-full p-[1rem] text-accent input-focus-border placeholder:text-[15px] resize-none"
                ></textarea>
                <input
                  style={{ border: ".75px solid rgba(252, 252, 252, 0.05)" }}
                  className="btn bg-[#031B29] border-[#272727] py-[12px] px-[30px] text-[16px] font-[500] rounded-[4px] hover:bg-primary duration-500 hover:text-[#000] shadow-none"
                  type="submit"
                  value="SUBMIT NOW"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="flex mt-5 justify-between gap-5">
          <HomeBlog />
          <ServiceOffering />
          <SocialLinks />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
