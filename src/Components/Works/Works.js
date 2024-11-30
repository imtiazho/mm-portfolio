import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "../Intro/intro.css";
import project1 from "../../Images/project1.jpeg";
import project3 from "../../Images/project3.jpeg";
import project4 from "../../Images/project4.jpeg";
import project5 from "../../Images/project5.jpeg";
import project6 from "../../Images/project6.jpeg";
import projectImageDetails1 from "../../Images/project-details1.jpg";
import projectImageDetails2 from "../../Images/project-details2.jpg";
import projectImageDetails3 from "../../Images/project-details3.jpg";
import projectImageDetails4 from "../../Images/project-details4.jpg";
import projectImageDetails5 from "../../Images/project-details5.jpg";
import projectImageDetails6 from "../../Images/project-details6.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import HelmetHook from "../../Hooks/HelmetHook";

const Works = () => {
  const projects = [
    {
      _id: 1,
      title: "MOBILE DESIGNING",
      compnay: "Seven Studio",
      projectImage: project1,
      projectDetailsImage: [
        projectImageDetails1,
        projectImageDetails2,
        projectImageDetails3,
        projectImageDetails4,
        projectImageDetails5,
        projectImageDetails6,
      ],
      client: "Jimmy Divison",
      clientLoc: "Miranda, USA",
      ProjectYear: "2021",
      projectDetailsFirstPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      projectDetailsSecondPara:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam remaperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit",
    },
    {
      _id: 2,
      title: "BRANDING",
      compnay: "Raven Studio",
      projectImage: project3,
      projectDetailsImage: [
        projectImageDetails1,
        projectImageDetails2,
        projectImageDetails3,
        projectImageDetails4,
        projectImageDetails5,
        projectImageDetails6,
      ],
      client: "Jimmy Divison",
      clientLoc: "Miranda, USA",
      ProjectYear: "2021",
      projectDetailsFirstPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      projectDetailsSecondPara:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam remaperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit",
    },
    {
      _id: 3,
      title: "FLYER DESIGNING",
      compnay: "Submarine",
      projectImage: project4,
      projectDetailsImage: [
        projectImageDetails1,
        projectImageDetails2,
        projectImageDetails3,
        projectImageDetails4,
        projectImageDetails5,
        projectImageDetails6,
      ],
      client: "Jimmy Divison",
      clientLoc: "Miranda, USA",
      ProjectYear: "2021",
      projectDetailsFirstPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      projectDetailsSecondPara:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam remaperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit",
    },
    {
      _id: 4,
      title: "PACKET DESIGNING",
      compnay: "Hydra Merc",
      projectImage: project5,
      projectDetailsImage: [
        projectImageDetails1,
        projectImageDetails2,
        projectImageDetails3,
        projectImageDetails4,
        projectImageDetails5,
        projectImageDetails6,
      ],
      client: "Jimmy Divison",
      clientLoc: "Miranda, USA",
      ProjectYear: "2021",
      projectDetailsFirstPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      projectDetailsSecondPara:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam remaperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit",
    },
    {
      _id: 5,
      title: "WEB DESIGNING",
      compnay: "Dynamic",
      projectImage: project6,
      projectDetailsImage: [
        projectImageDetails1,
        projectImageDetails2,
        projectImageDetails3,
        projectImageDetails4,
        projectImageDetails5,
        projectImageDetails6,
      ],
      client: "Jimmy Divison",
      clientLoc: "Miranda, USA",
      ProjectYear: "2021",
      projectDetailsFirstPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      projectDetailsSecondPara:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam remaperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit",
    },
    {
      _id: 6,
      title: "MOBILE DESIGNING",
      compnay: "Seven Studio",
      projectImage: project1,
      projectDetailsImage: [
        projectImageDetails1,
        projectImageDetails2,
        projectImageDetails3,
        projectImageDetails4,
        projectImageDetails5,
        projectImageDetails6,
      ],
      client: "Jimmy Divison",
      clientLoc: "Miranda, USA",
      ProjectYear: "2021",
      projectDetailsFirstPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      projectDetailsSecondPara:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam remaperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit",
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: "2rem",
    });
  }, []);

  return (
    <div>
      <HelmetHook pageName={"Mahmida - Works"} />
      <NavBar />

      <div className="w-[95%] sm:w-[85%] m-auto">
        <p className="font-[700] mt-[1.5rem] sm:mt-[3rem] mb-[0.5rem] sm:mb-[1rem] text-[2rem] md:text-[4.2rem] tracking-[1px] text-primary text-left">
          ALL PROJECTS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-end">
          {projects.map((eachData) => (
            <Link
              key={eachData._id}
              to={`/project-details/${eachData._id}`}
              className="box-card p-3 sm:p-4 relative"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="inside-border-box p-3 sm:p-4 flex flex-col gap-5">
                <img src={eachData.projectImage} alt="" />

                <div className="text-left">
                  <p className="text-primary text-[10px] sm:text-[13px] tracking-[0.5px]">
                    {eachData.title}
                  </p>
                  <p className="text-accent text-[23px] sm:text-[26px] font-semibold">
                    {eachData.compnay}
                  </p>
                </div>
              </div>

              {/* Link */}
              <div className="absolute bottom-[2rem] sm:bottom-[3rem] right-[2rem] sm:right-[3rem] opacity-55 icon-hov duration-300">
                <FaExternalLinkAlt className="sm:text-[15px] text-[12px]" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Works;
