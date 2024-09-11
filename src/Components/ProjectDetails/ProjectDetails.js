import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import projectImage1 from "../../Images/project-details1.jpg";
import projectImage2 from "../../Images/project-details2.jpg";
import projectImage3 from "../../Images/project-details3.jpg";
import projectImage4 from "../../Images/project-details4.jpg";
import projectImage5 from "../../Images/project-details5.jpg";
import projectImage6 from "../../Images/project-details6.jpg";
import Footer from "../Footer/Footer";
import BookModal from "../BookModal/BookModal";
import HelmetHook from "../../Hooks/HelmetHook";

const ProjectDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: "2rem",
    });
  }, []);

  return (
    <div>
      <HelmetHook pageName={"Mahmida - Project Details"} />
      <NavBar />

      <div className="w-[85%] m-auto">
        <div className="flex flex-col gap-10 mt-[3rem]">
          <span className="font-[700] text-[4.2rem] tracking-[1px] text-primary text-left">
            MOBILE DESIGNING
          </span>

          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-2 box-card p-4">
              <div className="flex flex-col gap-5 text-left inside-border-box p-8">
                <p className="text-xl font-[500] text-accent">
                  PROJECT DETAILS:
                </p>

                <div className="grid grid-cols-2 gap-24">
                  <div>
                    <p className="text-xl font-[500] mb-[2px] text-accent">
                      Project
                    </p>
                    <p className="text-[14px] text-primary">Outdoor Paint</p>
                  </div>
                  <div>
                    <p className="text-xl font-[500] mb-[2px] text-accent">
                      Clients
                    </p>
                    <p className="text-[14px] text-primary">Jimmy Divison</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-24">
                  <div>
                    <p className="md:text-xl text-[16px] font-[500] mb-[2px] text-accent">
                      Location
                    </p>
                    <p className="text-[14px] text-primary">Miranda, USA</p>
                  </div>
                  <div>
                    <p className="md:text-xl text-[16px] font-[500] mb-[2px] text-accent">
                      Project Year
                    </p>
                    <p className="text-[14px] text-primary">2021</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-card col-span-3 p-4">
              <div className="text-left text-[14px] font-[300] leading-loose inside-border-box p-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididuntut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="md:mt-4 mt-2">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam remaperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <label
                onClick={() => setOpenModal(true)}
                htmlFor="my-modal-1"
                className="cursor-pointer"
              >
                <img
                  className="w-full object-cover"
                  src={projectImage1}
                  alt=""
                />
              </label>
              {openModal && (
                <BookModal modalNo={"1"} projectImage={projectImage1} />
              )}
            </div>

            <div>
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
