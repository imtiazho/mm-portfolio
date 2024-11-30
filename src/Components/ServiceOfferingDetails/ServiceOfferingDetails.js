import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import HomeBlog from "../HomeBlog/HomeBlog";
import SocialLinks from "../SocialLinks/SocialLinks";
import LetsWork from "../LetsWork/LetsWork";
import Footer from "../Footer/Footer";
import { GiNotebook, GiSpellBook } from "react-icons/gi";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
import { BsTranslate } from "react-icons/bs";
import HelmetHook from "../../Hooks/HelmetHook";

const ServiceOfferingDetails = () => {
  const services = [
    {
      _id: "1",
      sName: "BOOK EDITING",
      sDetails:
        "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.",
      icon: <GiSpellBook />,
    },
    {
      _id: "2",
      sName: "PROOFREADING",
      sDetails:
        "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.",
      icon: <PiListMagnifyingGlassBold />,
    },
    {
      _id: "3",
      sName: "BOOK WRITING",
      sDetails:
        "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.",
      icon: <GiNotebook />,
    },
    {
      _id: "4",
      sName: "TRANSLATING",
      sDetails:
        "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.",
      icon: <BsTranslate />,
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: "2rem",
    });
  }, []);

  return (
    <div>
      <HelmetHook pageName={"Mahmida - Services"} />
      <NavBar />

      <div className="w-[95%] sm:w-[85%] m-auto">
        <div className="mt-[1rem] sm:mt-[3rem] grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-6 box-card p-3 sm:p-6">
          {services.map((eachData) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="border w-full h-full relative inside-border-box px-8 py-14 sm:py-16 flex flex-col items-center gap-5 sm:gap-6"
            >
              <div className="service-icon">{eachData?.icon}</div>

              <p className="text-[23px] sm:text-[30px] text-primary font-semibold tracking-[1px]">
                {eachData?.sName}
              </p>

              <div className="w-full bg-[#555555] h-[1px]"></div>

              <p className="text-primary text-[11px] sm:text-[13px] tracking-[0.3px] md:leading-[26px] leading-[23px]">
                {eachData.sDetails}
              </p>
            </div>
          ))}
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-2 xl:grid-cols-4 mt-3 sm:mt-5 justify-between gap-3 sm:gap-5"
        >
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
