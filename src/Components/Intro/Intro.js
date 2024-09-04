import React from "react";
import userPhoto from "../../Images/me.jpg";
import overlay from "../../Images/bg1.png";
import "./intro.css";

const Intro = () => {
  return (
    <div className="w-[75%] m-auto mt-[5em]">
      <div className="flex gap-5">
        <div className="w-full">
          <div className="border-1 border-[#272727] h-full flex justify-start items-center rounded-[30px] drop-shadow-xl p-12 gap-[2rem] shadow-box">
            <p>Profile Card</p>
            {/* <img
              className="w-[240px] h-[240px] object-cover rounded-tl-[30px] rounded-br-[30px]"
              src={userPhoto}
              alt=""
            /> */}
            {/* 
            <div className="text-left">
              <h5 className="text-[16px] font-normal tracking-[0.6px]">
                A WEB DESIGNER
              </h5>
              <h1>
                David
                <br /> Henderson.
              </h1>
              <p>I am a Web Designer based in san francisco.</p>
            </div> */}
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className=" border-white rounded-[2rem] p-[14px] shadow-box">
            <p>Pickup Line</p>
          </div>
          <div className="flex gap-5 justify-between">
            <div className=" border-white rounded-[30px] w-full p-[105px] shadow-box">
              About
            </div>
            <div className="shadow-box border-white rounded-[30px] w-full p-[105px]">
              Projects
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-5 justify-between gap-5">
        <div className="w-[25%] shadow-box  rounded-[30px] px-[1rem] py-[6rem]">
          Blogs
        </div>
        <div className="w-[50%] shadow-box  rounded-[30px] px-[1rem] py-[6rem]">
          Service
        </div>
        <div className="w-[25%] shadow-box rounded-[30px] px-[1rem] py-[6rem]">
          Social
        </div>
      </div>
    </div>
  );
};

export default Intro;
