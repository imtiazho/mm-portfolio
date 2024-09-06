import React from "react";
import NavBar from "../NavBar/NavBar";
import "../Intro/intro.css";
import project1 from "../../Images/project1.jpeg";
import project2 from "../../Images/project2.jpeg";
import project3 from "../../Images/project3.jpeg";
import project4 from "../../Images/project4.jpeg";
import project5 from "../../Images/project5.jpeg";
import project6 from "../../Images/project6.jpeg";
import { FaExternalLinkAlt } from "react-icons/fa";
import star from "../../Images/star.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div>
      <NavBar />

      <div className="w-[85%] m-auto">
        <div className="grid grid-cols-6 mt-[4rem] gap-6 items-end">
          <div className="col-span-2 grid grid-cols-1 gap-6">
            <Link to="/project-details" className="box-card p-4 relative">
              <div className="inside-border-box p-4 flex flex-col gap-5">
                <img src={project1} alt="" />

                <div className="text-left">
                  <p className="text-primary text-[13px] tracking-[0.5px]">
                    WEB DESIGNING
                  </p>
                  <p className="text-accent text-[26px] font-semibold">
                    Dynamic
                  </p>
                </div>
              </div>

              {/* Link */}
              <div className="absolute bottom-[3rem] right-[3rem] opacity-55 icon-hov duration-300">
                <FaExternalLinkAlt />
              </div>
            </Link>

            <Link to="/project-details" className="box-card p-4 realtive">
              <div className="inside-border-box p-4 flex flex-col gap-5">
                <img src={project2} alt="" />

                <div className="text-left">
                  <p className="text-primary text-[13px] tracking-[0.5px]">
                    PHOTOGRAPHY
                  </p>
                  <p className="text-accent text-[26px] font-semibold">
                    Diesel H1
                  </p>
                </div>
              </div>

              {/* Link */}
              <div className="absolute bottom-[3rem] right-[3rem] opacity-55 icon-hov duration-300">
                <FaExternalLinkAlt />
              </div>
            </Link>
          </div>
          <div className="col-span-4">
            <div className="flex jutify-center items-center gap-[1rem] font-[600]">
              <img src={star} alt="" />
              <span className="text-[4.2rem] tracking-[1px] text-primary">
                ALL PROJECTS
              </span>
              <img src={star} alt="" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Link to="/project-details" className="box-card p-4 relative">
                <div className="inside-border-box p-4 flex flex-col gap-5">
                  <img src={project3} alt="" />

                  <div className="text-left">
                    <p className="text-primary text-[13px] tracking-[0.5px]">
                      MOBILE DESIGNING
                    </p>
                    <p className="text-accent text-[26px] font-semibold">
                      Seven Studio
                    </p>
                  </div>
                </div>

                {/* Link */}
                <div className="absolute bottom-[3rem] right-[3rem] opacity-55 icon-hov duration-300">
                  <FaExternalLinkAlt />
                </div>
              </Link>

              <Link to="/project-details" className="box-card p-4 relative">
                <div className="inside-border-box p-4 flex flex-col gap-5">
                  <img src={project4} alt="" />

                  <div className="text-left">
                    <p className="text-primary text-[13px] tracking-[0.5px]">
                      BRANDING
                    </p>
                    <p className="text-accent text-[26px] font-semibold">
                      Raven Studio
                    </p>
                  </div>
                </div>

                {/* Link */}
                <div className="absolute bottom-[3rem] right-[3rem] opacity-55 icon-hov duration-300">
                  <FaExternalLinkAlt />
                </div>
              </Link>

              <Link to="/project-details" className="box-card p-4 relative">
                <div className="inside-border-box p-4 flex flex-col gap-5">
                  <img src={project5} alt="" />

                  <div className="text-left">
                    <p className="text-primary text-[13px] tracking-[0.5px]">
                      FLYER DESIGNING
                    </p>
                    <p className="text-accent text-[26px] font-semibold">
                      Submarine
                    </p>
                  </div>
                </div>

                {/* Link */}
                <div className="absolute bottom-[3rem] right-[3rem] opacity-55 icon-hov duration-300">
                  <FaExternalLinkAlt />
                </div>
              </Link>

              <Link to="/project-details" className="box-card p-4 relative">
                <div className="inside-border-box p-4 flex flex-col gap-5">
                  <img src={project6} alt="" />

                  <div className="text-left">
                    <p className="text-primary text-[13px] tracking-[0.5px]">
                      PACKET DESIGNING
                    </p>
                    <p className="text-accent text-[26px] font-semibold">
                      Hydra Merc
                    </p>
                  </div>
                </div>

                {/* Link */}
                <div className="absolute bottom-[3rem] right-[3rem] opacity-55 icon-hov duration-300">
                  <FaExternalLinkAlt />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Works;
