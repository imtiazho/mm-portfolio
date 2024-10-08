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
    },
    {
      _id: "2",
      sName: "PROOFREADING",
      sDetails:
        "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.",
    },
    {
      _id: "3",
      sName: "BOOK WRITING",
      sDetails:
        "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.",
    },
    {
      _id: "4",
      sName: "TRANSLATING",
      sDetails:
        "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.",
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

      <div className="w-[85%] m-auto">
        <div className="grid grid-cols-7 mt-[3rem] gap-[1.5rem]">
          <div className="col-span-2 box-card p-8 flex flex-col gap-8">
            <div className="inside-border-box flex items-center gap-[2rem] p-6">
              <GiSpellBook style={{ width: "40px", height: "40px" }} />
              <p className="text-[18px] text-primary">BOOK EDITING</p>
            </div>

            <div className="inside-border-box flex items-center gap-[2rem] p-6">
              <PiListMagnifyingGlassBold
                style={{ width: "40px", height: "40px" }}
              />
              <p className="text-[18px] text-primary">PROOFREADING</p>
            </div>

            <div className="inside-border-box flex items-center gap-[2rem] p-6">
              <GiNotebook style={{ width: "40px", height: "40px" }} />
              <p className="text-[18px] text-primary">BOOK WRITING</p>
            </div>

            <div className="inside-border-box flex items-center gap-[2rem] p-6">
              <BsTranslate style={{ width: "40px", height: "40px" }} />
              <p className="text-[18px] text-primary">TRANSLATING</p>
            </div>
          </div>
          <div className="col-span-5">
            <p className="font-[600] text-[4.2rem] tracking-[1px] text-primary text-left">
              MY OFFERINGS
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {services.map((eachService) => (
                <div key={eachService} className="box-card p-4">
                  <div className="inside-border-box p-6 text-left">
                    <p className="text-[16px] text-accent mb-3 tracking-[0.5px] font-medium">
                      {eachService.sName}
                    </p>
                    <p className="text-primary text-[14px] tracking-[0.3px] leading-[26px]">
                      {eachService.sDetails}
                    </p>
                  </div>
                </div>
              ))}
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
