import React from "react";
import Title from "../Component/Title";
import { skillsItems } from "../utils/dataUtils";

const Skills = () => {
  return (
    <div className="lg:mt-16 mt-36 bg-[#070d1b] pb-20">
      <div className="lg:w-4/5 justify-center items-center m-auto">
        <div>
          <Title text={"my skills"} />
        </div>
        {/*  Skill starts here*/}
        <div className="flex lg:flex-row flex-col justify-center items-center gap-4 lg:gap-6">
          <div className="lg:w-2/4 w-4/5">
            <h1 className="text-neutral-100 lg:text-4xl text-3xl font-semibold mb-8">
              All the skills that I have in that field of work are mentioned.
            </h1>
            <p className="text-gray-400 text-[1rem] mb-8 lg:text-[1.1rem]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores.
            </p>
            <p className="text-gray-400 text-[1rem] mb-6 lg:text-[1.1rem]">
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt.
            </p>
          </div>
          <div className="lg:w-2/4 w-4/5">
            {skillsItems?.map((skills, index) => {
              return (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <p className="text-neutral-100 text-[16px] font-semibold">
                      {" "}
                      {skills.title}{" "}
                    </p>
                    <p className=" text-yellow-500"> {skills.level}% </p>
                  </div>
                  <p className="  border-2  border-neutral-400 "></p>
                  <p
                    className={`{  border-2  border-yellow-600 -mt-[3px] ${
                      skills.level < 90 && skills.level >= 80 && "w-[80%] "
                    }  ${
                      skills.level < 80 && skills.level >= 70 && "w-[70%]"
                    } ${skills.level < 70 && skills.level >= 60 && "w-[60%]"} ${
                      skills.level < 60 && skills.level >= 50 && "w-[50%]"
                    } ${skills.level < 50 && skills.level >= 40 && "w-[40%]"} ${
                      skills.level < 40 && skills.level >= 30 && "w-[30%]"
                    } ${skills.level < 30 && skills.level >= 20 && "w-[20%]"} ${
                      skills.level < 20 && skills.level > 10 && "w-[10%]"
                    }   ${skills.level == 90 && "w-[90%]"}  ${
                      skills.level > 90 && "w-[95%]"
                    } }`}
                  >
                    {" "}
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

export default Skills;
