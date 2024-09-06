import React from "react";
import { AiOutlineBarcode } from "react-icons/ai";
import { BiBarcodeReader } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TfiLayoutGrid2Thumb } from "react-icons/tfi";
import { TiArrowMaximiseOutline } from "react-icons/ti";

const ServiceOffering = () => {
  return (
    <div className="w-[50%] box-card p-4 relative">
      <div className="inside-border-box p-5 flex flex-col justify-between">
        <div>
          <div className="mb-3 mt-14 flex justify-center items-center gap-[5rem]">
            <TfiLayoutGrid2Thumb style={{ width: "40px", height: "40px" }} />
            <AiOutlineBarcode style={{ width: "40px", height: "40px" }} />
            <BiBarcodeReader style={{ width: "40px", height: "40px" }} />
            <TiArrowMaximiseOutline style={{ width: "40px", height: "40px" }} />
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
  );
};

export default ServiceOffering;
