import React from "react";
import Title from "../Component/Title";
import experienceImage from "../assets/bag.png";
import educationImage from "../assets/education.png";
import { educationItems, experienceItems } from "../utils/dataUtils";

const Resume = () => {
  return (
    <div className="mt-16  pt-12 lg:pt-0 bg-[#070d1b] ">
      <div className="mt-24 lg:mt-12 lg:pt-12">
        <Title text={"resume"} />
      </div>
      <div className="w-4/5 lg:m-auto flex m-auto pb-16">
        {/* Experience and education start here */}
        <div className="flex m-auto flex-col lg:flex-row lg:justify-around lg:items-center gap-6">
          <div className="flex flex-col justify-start">
            <div className="flex gap-2">
              <img src={experienceImage} />
              <h1 className="flex justify-start text-neutral-50 text-4xl font-semibold tracking-wide">
                Experience
              </h1>
            </div>

            {experienceItems?.map((e, index) => {
              return (
                <div key={index} className="mb-6 ">
                  <p className="text-yellow-500 font-[490] text-3xl py-2">
                    {" "}
                    {e.title}{" "}
                  </p>
                  <p className="text-gray-400 text-xl py-2 font-[400]">
                    {" "}
                    {e.date}{" "}
                  </p>
                  <p className="text-gray-200 text-2xl font-semibold py-2">
                    {" "}
                    {e.place}{" "}
                  </p>
                  <p className="text-gray-300 pv-2 flex justify-start w-[90%]">
                    {" "}
                    {e.description}{" "}
                  </p>
                </div>
              );
            })}
            <hr className="mt-4 mb-6 lg:hidden " />
          </div>
          <div>
            {" "}
            <hr className=" h-50 border h-[100vh] lg:flex hidden border-gray-500 mr-6" />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <img src={experienceImage} />
              <h1 className="flex justify-start text-neutral-50 text-4xl font-semibold tracking-wide">
                Education
              </h1>
            </div>

            {educationItems?.map((e, index) => {
              return (
                <div key={index} className="mb-6">
                  <p className="text-yellow-500 text-3xl font-[490] py-2 ">
                    {" "}
                    {e.title}{" "}
                  </p>
                  <p className="text-gray-400 text-xl py-2 font-[400]">
                    {" "}
                    {e.date}{" "}
                  </p>
                  <p className="text-gray-200 text-2xl font-semibold py-2">
                    {" "}
                    {e.place}{" "}
                  </p>
                  <p className="text-gray-300 pv-2  w-[90%]">
                    {" "}
                    {e.description}{" "}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Resume);
