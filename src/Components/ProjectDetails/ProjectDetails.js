import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import BookModal from "../BookModal/BookModal";
import HelmetHook from "../../Hooks/HelmetHook";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  const { projectId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/bf36af87-ba79-4837-9e34-97180f85524a")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [projectId]);

  const targetedProject = data?.find((project) => project._id === projectId);

  // useEffect(() => {
  //   window.scrollTo({
  //     top: "2rem",
  //   });
  // }, []);

  return (
    <div>
      <HelmetHook pageName={"Mahmida - Project Details"} />
      <NavBar />

      <div className="w-[95%] sm:w-[85%] m-auto">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-10 mt-[1rem] sm:mt-[3rem]">
          <span className="font-[700] text-[2rem] md:text-[4.2rem] tracking-[1px] text-primary text-left mb-[-8px] sm:mb-0">
            {targetedProject?.title}
          </span>

          <div className="grid grid-cols-1 xl:grid-cols-5 gap-3 sm:gap-5 sm:gap-8">
            <div className="xl:col-span-2 box-card p-3 sm:p-4">
              <div className="flex flex-col gap-3 sm:gap-5 text-left inside-border-box p-5 sm:p-8">
                <p className="text-[18px] sm:text-xl font-[500] text-accent">
                  PROJECT DETAILS:
                </p>

                <div className="grid grid-cols-2 gap-24">
                  <div>
                    <p className="text-[17px] sm:text-xl font-[500] mb-[3px] sm:mb-[2px] text-accent">
                      Project
                    </p>
                    <p className="text-[11px] sm:text-[14px] text-primary">
                      {targetedProject?.title}
                    </p>
                  </div>
                  <div>
                    <p className="text-[17px] sm:text-xl font-[500] mb-[3px] sm:mb-[2px] text-accent">
                      Clients
                    </p>
                    <p className="text-[11px] sm:text-[14px] text-primary">
                      {targetedProject?.client}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-24">
                  <div>
                    <p className="text-[17px] sm:text-xl font-[500] mb-[3px] sm:mb-[2px] text-accent">
                      Location
                    </p>
                    <p className="text-[11px] sm:text-[14px] text-primary">
                      {targetedProject?.clientLoc}
                    </p>
                  </div>
                  <div>
                    <p className="text-[17px] sm:text-xl font-[500] mb-[3px] sm:mb-[2px] text-accent">
                      Project Year
                    </p>
                    <p className="text-[11px] sm:text-[14px] text-primary">
                      {targetedProject?.ProjectYear}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-card xl:col-span-3 p-3 sm:p-4">
              <div className="inside-border-box p-3 sm:p-4">
                <p className="text-left text-[11px] sm:text-[14px] sm:text-[14px] font-[300] leading-loose">
                  {targetedProject?.projectDetailsFirstPara}
                </p>
                <p className="md:mt-4 mt-2 text-left text-[11px] sm:text-[14px] sm:text-[14px] font-[300] leading-loose">
                  {targetedProject?.projectDetailsSecondPara}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8">
            {targetedProject?.projectDetailsImage.map((eachImage, index) => (
              <div key={index}>
                <label
                  onClick={() => setOpenModal(true)}
                  htmlFor={`my-modal-${index}`}
                  className="cursor-pointer"
                >
                  <img className="w-full object-cover" src={eachImage} alt="" />
                </label>
                {openModal && (
                  <BookModal modalNo={index} projectImage={eachImage} />
                )}
              </div>
            ))}

            {/* <div>
              <label
                onClick={() => setOpenModal(true)}
                htmlFor="my-modal-2"
                className="cursor-pointer"
              >
                <img
                  className="w-full object-cover"
                  src={projectImage2}
                  alt=""
                />
              </label>
              {openModal && (
                <BookModal modalNo={"2"} projectImage={projectImage2} />
              )}
            </div>

            <div>
              <label
                onClick={() => setOpenModal(true)}
                htmlFor="my-modal-3"
                className="cursor-pointer"
              >
                <img
                  className="w-full object-cover"
                  src={projectImage3}
                  alt=""
                />
              </label>
              {openModal && (
                <BookModal modalNo={"3"} projectImage={projectImage3} />
              )}
            </div>

            <div>
              <label
                onClick={() => setOpenModal(true)}
                htmlFor="my-modal-4"
                className="cursor-pointer"
              >
                <img
                  className="w-full object-cover"
                  src={projectImage4}
                  alt=""
                />
              </label>
              {openModal && (
                <BookModal modalNo={"4"} projectImage={projectImage4} />
              )}
            </div>

            <div>
              <label
                onClick={() => setOpenModal(true)}
                htmlFor="my-modal-5"
                className="cursor-pointer"
              >
                <img
                  className="w-full object-cover"
                  src={projectImage5}
                  alt=""
                />
              </label>
              {openModal && (
                <BookModal modalNo={"5"} projectImage={projectImage5} />
              )}
            </div>

            <div>
              <label
                onClick={() => setOpenModal(true)}
                htmlFor="my-modal-6"
                className="cursor-pointer"
              >
                <img
                  className="w-full object-cover"
                  src={projectImage6}
                  alt=""
                />
              </label>
              {openModal && (
                <BookModal modalNo={"6"} projectImage={projectImage6} />
              )}
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
