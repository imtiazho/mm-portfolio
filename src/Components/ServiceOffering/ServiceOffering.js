import React from "react";
import { BsTranslate } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GiNotebook, GiSpellBook } from "react-icons/gi";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const ServiceOffering = () => {
  return (
    <Link to="/services" className="w-[50%] box-card p-4 relative">
      <div className="inside-border-box p-5 flex flex-col justify-between">
        <div>
          <div className="mb-3 mt-14 flex justify-center items-center gap-[5rem]">
            <GiSpellBook style={{ width: "45px", height: "45px" }} />
            <PiListMagnifyingGlassBold
              style={{ width: "45px", height: "45px" }}
            />
            <GiNotebook style={{ width: "45px", height: "45px" }} />
            <BsTranslate style={{ width: "45px", height: "45px" }} />
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
    </Link>
  );
};

export default ServiceOffering;
