import React, { useEffect } from "react";
import { portfolioItems } from "../utils/dataUtils";
import Title from "../Component/Title";
import Button from "../Component/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#0a101e] lg:mt-16 lg:pt-8  mb-18 pb-12  mt-24 pt-12 ">
      <div className="">
        <Title text={"portfolios"} />
      </div>
      <div className="w-4/5 flex justify-center items-center m-auto">
        <div className="grid lg:grid-cols-3 min-[600px]:grid-cols-2 gap-5 m-5 cursor-pointer">
          {portfolioItems?.map((port, index) => {
            return (
              <div className=" m-auto hover:border-2 hover:scale-105  bg-slate-700 transition-all hover:duration-200">
                {" "}
                <img
                  className="w-full m-auto "
                  src={port.img}
                  data-aos="zoom-in"
                  data-aos-duration="500"
                />{" "}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex m-auto justify-center items-start">
        <Button text={"Lode More"} />
      </div>
    </div>
  );
};

export default Portfolio;
