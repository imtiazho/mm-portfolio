import React from "react";
import NavBar from "../NavBar/NavBar";
import { CiInstagram, CiLinkedin, CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { LiaBehanceSquare } from "react-icons/lia";

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
                <p className="text-[20px] tracking-[0.5px] mb-4 font-medium">
                  SOCIAL INFO
                </p>

                <div className="flex items-center justify-around flex-wrap gap-8">
                  <Link
                    style={{
                      background:
                        "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                      backdropFilter: "blur(15px)",
                      border: ".75px solid rgba(251, 251, 251, 0.1)",
                    }}
                    className="p-5 flex items-center gap-4"
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
                    className="p-5 flex items-center gap-4"
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
                    className="p-5 flex items-center gap-4"
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
                    className="p-5 flex items-center gap-4"
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
          <div className="col-span-3 border">Contact Form</div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Contact;
