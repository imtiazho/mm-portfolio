import React from "react";

const AboutEduExpStruct = ({ eachData }) => {
  return (
    <div key={eachData._id} className="">
      <p className="text-primary mb-[2px] sm:mb-[5px] text-[13px] sm:text-[15px]">
        {eachData.year}
      </p>
      <p className="text-accent font-medium text-[18px] sm:text-[20px]">
        {eachData.heading}
      </p>
      <p className="text-primary text-[10px] sm:text-[12px] mt-1">
        {eachData.institution}
      </p>
    </div>
  );
};

export default AboutEduExpStruct;
