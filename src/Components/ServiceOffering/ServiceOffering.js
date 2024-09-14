import React from "react";
import { BsTranslate } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GiNotebook, GiSpellBook } from "react-icons/gi";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const ServiceOffering = () => {
  return (
    <Link
      to="/services"
      className="col-span-2 box-card p-3 sm:p-4 relative order-1 xl:order-none"
    >
      <div className="inside-border-box p-5 flex flex-col gap-3 justify-between">
        <div>
          <div className="mb-3 mt-14 flex justify-center items-center gap-[4rem] sm:gap-[5rem]">
            <GiSpellBook className="w-[40px] sm:w-[45px] h-[45px]" />
            <PiListMagnifyingGlassBold className="w-[40px] sm:w-[45px] h-[45px]" />
            <GiNotebook className="w-[40px] sm:w-[45px] h-[45px]" />
            <BsTranslate className="w-[40px] sm:w-[45px] h-[45px]" />
          </div>
        </div>

        <div className="text-left">
          <p className="text-primary text-[10px] sm:text-[12px] mb-[1px] sm:mb-1">
            SPECIALIZATION
          </p>
          <h5 className="text-[18px] sm:text-[24px] font-medium">
            Service Offering
          </h5>
        </div>
      </div>

      {/* Link */}
      <div className="absolute bottom-[2rem] sm:bottom-[3rem] right-[2rem] sm:right-[3rem] opacity-55 icon-hov duration-300">
        <FaExternalLinkAlt className="sm:text-[15px] text-[12px]" />
      </div>
    </Link>
  );
};

export default ServiceOffering;
