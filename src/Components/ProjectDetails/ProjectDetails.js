import React from "react";
import NavBar from "../NavBar/NavBar";
import projectImage from "../../Images/project-details.jpeg";
import star from "../../Images/star.png";
import Footer from "../Footer/Footer";

const ProjectDetails = () => {
  return (
    <div>
      <NavBar />

      <div className="w-[85%] m-auto">
        <div className="flex flex-col gap-10 mt-[3rem]">
          <div className="flex jutify-center items-center gap-[1rem] font-[700]">
            <img src={star} alt="" />
            <span className="text-[4.2rem] tracking-[1px] text-primary">
              MOBILE DESIGNING
            </span>
            <img src={star} alt="" />
          </div>

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
            <img className="w-full object-cover" src={projectImage} alt="" />
            <img className="w-full object-cover" src={projectImage} alt="" />
            <img className="w-full object-cover" src={projectImage} alt="" />
            <img className="w-full object-cover" src={projectImage} alt="" />
            <img className="w-full object-cover" src={projectImage} alt="" />
            <img className="w-full object-cover" src={projectImage} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
