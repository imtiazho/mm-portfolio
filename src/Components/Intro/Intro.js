import React from "react";
import userPhoto from "../../Images/me.jpg";
import "./intro.css";
import sign from "../../Images/sign.png";
import mywork from "../../Images/my-works.png";
import blogPic from "../../Images/gfonts.png";
import { FaExternalLinkAlt, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillSun, AiOutlineBarcode } from "react-icons/ai";
import { BiBarcodeReader } from "react-icons/bi";
import { TiArrowMaximiseOutline } from "react-icons/ti";
import { TfiLayoutGrid2Thumb } from "react-icons/tfi";

const Intro = () => {
  return (
    <div className="w-[85%] m-auto mt-[2rem]">
      <div className="flex gap-5 items-center">
        <div className="w-full h-full p-6 box-card box-border realtive">
          <div className="inside-border-box flex justify-start items-center drop-shadow-xl gap-[2rem] p-6">
            <div className="w-[50%] overflow-hidden">
              <img
                className="rounded-tl-[30px] rounded-br-[30px]"
                src={userPhoto}
                alt=""
              />
            </div>
            <div className="text-start flex flex-col gap-2">
              <h5 className="font-medium tracking-[0.5px] text-primary">
                A WEB DESIGNER
              </h5>
              <h1 className="text-[42px] font-[600] leading-[40px]">
                Mahmida <br /> Masum
              </h1>
              <p className="mt-2 text-[13px] tracking-[0.5px] text-primary font-[300]">
                I am a Web Designer based in Bangladesh, Dhaka.
              </p>
            </div>
          </div>

          {/* Link */}
          <div className="absolute bottom-[3rem] right-[3rem] opacity-55 icon-hov duration-300">
            <FaExternalLinkAlt />
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className=" border-white rounded-[2rem] box-card overflow-hidden text-nowrap p-1">
            <div className="inside-border-box rounded-[2rem]">
              <div className="marquee-cus">
                <p
                  style={{ color: "rgba(249, 249, 249, 0.70)" }}
                  className="text-[12px] tracking-[0.5px] font-[300] p-4"
                >
                  LATEST WORK AND{" "}
                  <span className="font-normal text-[12px]">FEATURED </span>{" "}
                  LATEST WORK AND{" "}
                  <span className="font-normal text-[12px]">FEATURED </span>{" "}
                  LATEST WORK AND{" "}
                  <span className="font-normal text-[12px]">FEATURED</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between">
            <div className="w-[50%] box-card flex flex-col justify-center p-4 relative">
              <div className="inside-border-box p-5">
                <img className="mb-1 w-full m-auto" src={sign} alt="" />

                <div className="text-left">
                  <p className="text-primary text-[12px] mb-1">MORE ABOUT ME</p>
                  <h5 className="text-[24px] font-medium">Credentials</h5>
                </div>
              </div>

              {/* Link */}
              <div className="absolute bottom-[2rem] right-[2rem] opacity-55 icon-hov duration-300">
                <FaExternalLinkAlt />
              </div>
            </div>
            <div className="box-card w-[50%] flex flex-col justify-center p-4 relative">
              <div className="inside-border-box p-5">
                <img className="mb-1 w-full m-auto" src={mywork} alt="" />

                <div className="text-left">
                  <p className="text-primary text-[12px] mb-1">SHOWCASE</p>
                  <h5 className="text-[24px] font-medium">Projects</h5>
                </div>
              </div>

              {/* Link */}
              <div className="absolute bottom-[2rem] right-[2rem] opacity-55 icon-hov duration-300">
                <FaExternalLinkAlt />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-5 justify-between gap-5">
        <div className="w-[25%] box-card p-4">
          <div className="inside-border-box p-5">
            <img className="mb-1 w-full m-auto" src={blogPic} alt="" />

            <div className="text-left">
              <p className="text-primary text-[12px] mb-1">BLOGS</p>
              <h5 className="text-[24px] font-medium">Typing</h5>
            </div>
          </div>

          {/* Link */}
          <div className="absolute bottom-[2rem] right-[2rem] opacity-55 icon-hov duration-300">
            <FaExternalLinkAlt />
          </div>
        </div>
        <div className="w-[50%] box-card p-4 relative">
          <div className="inside-border-box p-5 flex flex-col justify-between">
            <div>
              <div className="mb-3 mt-14 flex justify-center items-center gap-[5rem]">
                <TfiLayoutGrid2Thumb
                  style={{ width: "40px", height: "40px" }}
                />
                <AiOutlineBarcode style={{ width: "40px", height: "40px" }} />
                <BiBarcodeReader style={{ width: "40px", height: "40px" }} />
                <TiArrowMaximiseOutline
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </div>

            <div className="text-left">
              <p className="text-primary text-[12px] mb-1">SPECIALIZATION</p>
              <h5 className="text-[24px] font-medium">Service Offering</h5>
            </div>
          </div>

          {/* Link */}
          <div className="absolute bottom-[3rem] right-[3rem] opacity-55 icon-hov duration-300">
            <FaExternalLinkAlt />
          </div>
        </div>
        <div className="w-[25%] box-card p-4">
          <div
            style={{
              background:
                "linear-gradient(-89.99999881140911deg,rgba(0,170,255,.04) 0%,rgba(0,170,255,.019999999552965164) 100%)",
              backdropFilter: "blur(0px)",
              boxShadow: "0 1px 2px #00000040",
              height: "100%",
            }}
            className="pt-14 pr-5 pb-5 pl-5 flex flex-col justify-between single-box"
          >
            <div className="mb-3 flex justify-center items-center gap-4">
              <span
                style={{
                  background:
                    "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                  backdropFilter: "blur(15px)",
                  border: ".75px solid rgba(251, 251, 251, 0.1)",
                }}
                className="p-5"
              >
                <FaWhatsapp
                  style={{ width: "32px", height: "32px", color: "#00aaff" }}
                />
              </span>
              <span
                style={{
                  background:
                    "linear-gradient(-90deg, rgba(0, 170, 255, 0.02) 0%, rgba(0, 170, 255, 0) 100%)",
                  backdropFilter: "blur(15px)",
                  border: ".75px solid rgba(251, 251, 251, 0.1)",
                }}
                className="p-5"
              >
                <FaXTwitter
                  style={{ width: "32px", height: "32px", color: "#00aaff" }}
                />
              </span>
            </div>
            <div className="text-left">
              <p className="text-primary text-[12px] mb-1">STAY WITH ME</p>
              <h5 className="text-[24px] font-medium">Profiles</h5>
            </div>
          </div>

          {/* Link */}
          <div className="absolute bottom-[2rem] right-[2rem] opacity-55 icon-hov duration-300">
            <FaExternalLinkAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
