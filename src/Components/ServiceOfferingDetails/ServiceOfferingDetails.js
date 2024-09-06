import React from "react";
import NavBar from "../NavBar/NavBar";
import { CiBarcode, CiCamera } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import star from "../../Images/star.png";
import HomeBlog from "../HomeBlog/HomeBlog";
import SocialLinks from "../SocialLinks/SocialLinks";
import LetsWork from "../LetsWork/LetsWork";
import Footer from "../Footer/Footer";
import { ImDisplay } from "react-icons/im";

const ServiceOfferingDetails = () => {
  return (
    <div>
      <NavBar />

      <div className="w-[85%] m-auto">
        <div className="grid grid-cols-7 mt-[3rem] gap-[1.5rem]">
          <div className="col-span-2 box-card p-8 flex flex-col gap-8">
            <div className="inside-border-box flex items-center gap-[2rem] p-6">
              <CiCamera style={{ width: "40px", height: "40px" }} />
              <p className="text-[18px] text-primary">PHOTOGRAPHY</p>
            </div>

            <div className="inside-border-box flex items-center gap-[2rem] p-6">
              <ImDisplay style={{ width: "40px", height: "40px" }} />
              <p className="text-[18px] text-primary">WEB DESIGNING</p>
            </div>

            <div className="inside-border-box flex items-center gap-[2rem] p-6">
              <CiBarcode style={{ width: "40px", height: "40px" }} />
              <p className="text-[18px] text-primary">BRANDING</p>
            </div>

            <div className="inside-border-box flex items-center gap-[2rem] p-6">
              <FaCode style={{ width: "40px", height: "40px" }} />
              <p className="text-[18px] text-primary">DEVELOPMENT</p>
            </div>
          </div>
          <div className="col-span-5">
            <div className="flex jutify-center items-center gap-[1rem] font-[600]">
              <img src={star} alt="" />
              <span className="text-[4.2rem] tracking-[1px] text-primary">
                MY OFFERINGS
              </span>
              <img src={star} alt="" />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="box-card p-4">
                <div className="inside-border-box p-6 text-left">
                  <p className="text-[16px] text-accent mb-3 tracking-[0.5px] font-medium">
                    PHOTOGRAPHY
                  </p>
                  <p className="text-primary text-[14px] tracking-[0.3px] leading-[26px]">
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis
                    urna, porttitor asna rhoncus dolor purus non enim aberitin
                    praesent in elementum sahas facilisis leo, vel fringilla est
                    etisam dignissim.
                  </p>
                </div>
              </div>
              <div className="box-card p-4">
                <div className="inside-border-box p-6 text-left">
                  <p className="text-[16px] text-accent mb-3 tracking-[0.5px] font-medium">
                    WEB DESIGNING
                  </p>
                  <p className="text-primary text-[14px] tracking-[0.3px] leading-[26px]">
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis
                    urna, porttitor asna rhoncus dolor purus non enim aberitin
                    praesent in elementum sahas facilisis leo, vel fringilla est
                    etisam dignissim.
                  </p>
                </div>
              </div>
              <div className="box-card p-4">
                <div className="inside-border-box p-6 text-left">
                  <p className="text-[16px] text-accent mb-3 tracking-[0.5px] font-medium">
                    BRANDING
                  </p>
                  <p className="text-primary text-[14px] tracking-[0.3px] leading-[26px]">
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis
                    urna, porttitor asna rhoncus dolor purus non enim aberitin
                    praesent in elementum sahas facilisis leo, vel fringilla est
                    etisam dignissim.
                  </p>
                </div>
              </div>
              <div className="box-card p-4">
                <div className="inside-border-box p-6 text-left">
                  <p className="text-[16px] text-accent mb-3 tracking-[0.5px] font-medium">
                    DEVELOPMENT
                  </p>
                  <p className="text-primary text-[14px] tracking-[0.3px] leading-[26px]">
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis
                    urna, porttitor asna rhoncus dolor purus non enim aberitin
                    praesent in elementum sahas facilisis leo, vel fringilla est
                    etisam dignissim.
                  </p>
                </div>
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

export default ServiceOfferingDetails;
