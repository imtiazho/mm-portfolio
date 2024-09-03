import React from "react";

const Intro = () => {
  return (
    <div className="w-10/12 m-auto mt-[5em]">
      <div className="flex justify-between gap-5">
        <div className="border-2 border-white w-full flex justify-between items-center rounded-[1.5rem] p-[125px] p-[59px]">
          <div>
            <p>Photo or User</p>
          </div>
          <div>
            <h1>Name and something</h1>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="border border-white rounded-[2rem] p-[14px]">
            <p>Pickup Line</p>
          </div>
          <div className="flex gap-5 justify-between">
            <div className="border border-white rounded-[1.5rem] w-full p-[105px]">
              About Me
            </div>
            <div className="border border-white rounded-[1.5rem] w-full p-[105px]">
              Projects
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-5 justify-between gap-5">
        <div className="w-[25%] border border-2 rounded-[1rem] px-[1rem] py-[6rem]">
          Blogs
        </div>
        <div className="w-[50%] border border-2 rounded-[1rem] px-[1rem] py-[6rem]">
          Service
        </div>
        <div className="w-[25%] border border-2 rounded-[1rem] px-[1rem] py-[6rem]">
          Social
        </div>
      </div>
    </div>
  );
};

export default Intro;
