import React, { useEffect, useRef, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { CiInstagram, CiLinkedin, CiMail } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { LiaBehanceSquare } from "react-icons/lia";
import "../Intro/intro.css";
import Footer from "../Footer/Footer";
import HomeBlog from "../HomeBlog/HomeBlog";
import ServiceOffering from "../ServiceOffering/ServiceOffering";
import SocialLinks from "../SocialLinks/SocialLinks";
import { useForm } from "@formspree/react";
import toast from "react-hot-toast";
import HelmetHook from "../../Hooks/HelmetHook";

const Contact = () => {
  const [state, handleSubmit] = useForm("mdknjjnn");
  const formRef = useRef(null);
  useEffect(() => {
    window.scrollTo({
      top: "2rem",
    });
  }, []);

  const [errors, setErrors] = useState({
    nameError: false,
    emailError: false,
    subjectError: false,
    messageError: false,
  });

  const handleNameError = (e) => {
    if (e.target.value === "") {
      setErrors({ ...errors, nameError: true });
    } else {
      setErrors({ ...errors, nameError: false });
    }
  };

  const handleEmailError = (e) => {
    const emailRegEx = /\S+@\S+\.\S+/;
    const validEmail = emailRegEx.test(e.target.value);
    if (!validEmail) {
      setErrors({ ...errors, emailError: true });
    } else {
      setErrors({ ...errors, emailError: false });
    }
  };

  const handleSubjectError = (e) => {
    if (e.target.value === "") {
      setErrors({ ...errors, subjectError: true });
    } else {
      setErrors({ ...errors, subjectError: false });
    }
  };

  const handleMessageError = (e) => {
    if (e.target.value === "") {
      setErrors({ ...errors, messageError: true });
    } else {
      setErrors({ ...errors, messageError: false });
    }
  };

  const activeButton =
    errors.nameError ||
    errors.emailError ||
    errors.subjectError ||
    errors.messageError
      ? true
      : false;
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for messaging us!", {
        style: {
          border: "0.75px solid rgba(252, 252, 252, 0.05)",
          color: "#c0c0c0",
          padding: "13px",
          background: "#002434",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#002434",
        },
      });
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <div>
      <HelmetHook pageName={"Mahmida - Contact"} />
      <NavBar />
      <div className="w-[95%] sm:w-[85%] m-auto">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-3 sm:gap-6 mt-[1rem] sm:mt-[3rem]">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="xl:col-span-2 flex flex-col justify-between gap-4 order-2 xl:order-none"
          >
            <div className="box-card p-3 sm:p-4 grid grid-cols-1 gap-3 sm:gap-6">
              <div className="inside-border-box p-4 sm:p-8 flex items-center gap-4">
                <div
                  style={{
                    background:
                      "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                    backdropFilter: "blur(15px)",
                    border: ".75px solid rgba(251, 251, 251, 0.1)",
                  }}
                  className="p-3 sm:p-5 flex items-center gap-4"
                >
                  <CiMail className="sm:text-[32px] text-[25px]" />
                </div>

                <div className="text-left flex flex-col gap-[0.15rem] sm:gap-1">
                  <p className="text-accent text-[14px] sm:text-[16px] tracking-[0.5px] font-medium">
                    MAIL US
                  </p>
                  <p className="text-primary text-[11px] sm:text-[14px]">
                    info@bluebase.com
                  </p>
                  <p className="text-primary text-[11px] sm:text-[14px]">
                    {" "}
                    info@bluebase2.com
                  </p>
                </div>
              </div>
              <div className="inside-border-box p-4 sm:p-8 flex items-center gap-4">
                <div
                  style={{
                    background:
                      "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                    backdropFilter: "blur(15px)",
                    border: ".75px solid rgba(251, 251, 251, 0.1)",
                  }}
                  className="p-3 sm:p-5 flex items-center gap-4"
                >
                  <MdOutlineWatchLater className="sm:text-[32px] text-[25px]" />
                </div>

                <div className="text-left flex flex-col gap-[0.15rem] sm:gap-1">
                  <p className="text-accent text-[14px] sm:text-[16px] tracking-[0.5px] font-medium">
                    WORKING HOURS
                  </p>
                  <p className="text-primary text-[11px] sm:text-[14px]">
                    10.00 PM to 06.00 AM
                  </p>
                </div>
              </div>
              <div className="inside-border-box p-4 sm:p-8 flex items-center gap-4">
                <div
                  style={{
                    background:
                      "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                    backdropFilter: "blur(15px)",
                    border: ".75px solid rgba(251, 251, 251, 0.1)",
                  }}
                  className="p-3 sm:p-5 flex items-center gap-4"
                >
                  <IoLocationOutline className="sm:text-[32px] text-[25px]" />
                </div>

                <div className="text-left flex flex-col gap-[0.15rem] sm:gap-1">
                  <p className="text-accent text-[14px] sm:text-[16px] tracking-[0.5px] font-medium">
                    LOCATION
                  </p>
                  <p className="text-primary text-[11px] sm:text-[14px]">
                    22 Baker Street, Texas United States
                  </p>
                  <p className="text-primary text-[11px] sm:text-[14px]">
                    {" "}
                    W1U 3BW
                  </p>
                </div>
              </div>
            </div>

            <div className="box-card p-4 hidden xl:block">
              <div className="inside-border-box p-4 text-left">
                <p className="text-[20px] tracking-[0.5px] mb-4 font-medium text-center">
                  SOCIAL INFO
                </p>

                <div className="flex items-center justify-center gap-6 lg:gap-8">
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
          <div className="xl:col-span-3 order-1 xl:order-none">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="box-card p-3 sm:p-6"
            >
              <div className="inside-border-box p-2 sm:p-4 flex items-stretch gap-1 sm:gap-2">
                <div
                  style={{
                    background:
                      "linear-gradient(.0000026635723315848736deg,rgba(0,170,255,.05) 0%,rgba(182,102,195,.05000000074505806) 100%)",
                    backdropFilter: "blur(26.25249671936035px)",
                    border: ".75px solid rgb(252 252 252 / 10%)",
                  }}
                  className="py-3 px-4 text-[11px] sm:text-[13px] tracking-[0.4px] sm:tracking-[0.3px] w-fit"
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
                  <p className="text-[11px] tracking-[0.5px] font-[300] text-accent">
                    ⌘ It is a long established fact that a reader will
                    distracted by the readable content. ⌘
                  </p>
                </div>
              </div>

              {/* Form */}
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{
                  background:
                    "linear-gradient(rgba(0, 163, 255, 0.06) 100%, rgba(0, 163, 255, 0.5) 0%)",
                  transition: "0.3s ease",
                  height: "100%",
                }}
                className="flex flex-col gap-3 sm:gap-6 p-3 sm:p-4 mt-2 sm:mt-4"
              >
                <div>
                  <label htmlFor="Name"> </label>
                  <input
                    onBlur={handleNameError}
                    id="Name"
                    name="Name"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(0, 170, 255, 0.01), rgba(0, 170, 255, 0.05))",
                    }}
                    placeholder="Full Name*"
                    type="text"
                    className={`w-full focus:outline-0 h-full p-[0.9rem] sm:p-[1rem] text-accent ${
                      errors.nameError
                        ? "input-focus-border-error"
                        : "input-focus-border"
                    } placeholder:text-[13px] sm:placeholder:text-[15px] text-[13px] sm:text-[15px]`}
                  />
                </div>
                <div>
                  <label htmlFor="Email"> </label>
                  <input
                    onBlur={handleEmailError}
                    id="Email"
                    name="Email"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(0, 170, 255, 0.01), rgba(0, 170, 255, 0.05))",
                    }}
                    placeholder="Email*"
                    type="email"
                    className={`w-full focus:outline-0 h-full p-[0.9rem] sm:p-[1rem] text-accent ${
                      errors.emailError
                        ? "input-focus-border-error"
                        : "input-focus-border"
                    } placeholder:text-[13px] sm:placeholder:text-[15px] text-[13px] sm:text-[15px]`}
                  />
                </div>
                <div>
                  <label htmlFor="subject"> </label>
                  <input
                    onBlur={handleSubjectError}
                    id="subject"
                    name="subject"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(0, 170, 255, 0.01), rgba(0, 170, 255, 0.05))",
                    }}
                    placeholder="Subject*"
                    type="text"
                    className={`w-full focus:outline-0 h-full p-[0.9rem] sm:p-[1rem]text-accent ${
                      errors.subjectError
                        ? "input-focus-border-error"
                        : "input-focus-border"
                    } placeholder:text-[13px] sm:placeholder:text-[15px] text-[13px] sm:text-[15px]`}
                  />
                </div>
                <div>
                  <label htmlFor="Message"> </label>
                  <textarea
                    onBlur={handleMessageError}
                    id="Message"
                    name="Message"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(0, 170, 255, 0.01), rgba(0, 170, 255, 0.05))",
                    }}
                    rows="8"
                    placeholder="Message*"
                    type="text"
                    className={`w-full focus:outline-0 h-full p-[0.9rem] sm:p-[1rem] text-accent ${
                      errors.messageError
                        ? "input-focus-border-error"
                        : "input-focus-border"
                    } placeholder:text-[13px] sm:placeholder:text-[15px] text-[13px] sm:text-[15px] resize-none`}
                  ></textarea>
                </div>
                <input
                  style={{ border: ".75px solid rgba(252, 252, 252, 0.05)" }}
                  className={`btn bg-[#031B29] border-[#272727] py-[12px] px-[30px] text-[13px] sm:text-[16px] font-[500] rounded-[4px] hover:bg-primary duration-500 hover:text-[#000] shadow-none ${
                    activeButton && "btn-disabled"
                  }`}
                  type="submit"
                  value="SEND"
                />
              </form>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-2 xl:grid-cols-4 mt-3 sm:mt-5 justify-between gap-3 sm:gap-5"
        >
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
