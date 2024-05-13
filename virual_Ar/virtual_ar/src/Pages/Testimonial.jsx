import React from "react";
import { testimonials } from "../Constant/data";

const Testimonial = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 ">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center ">
        {" "}
        {testimonials?.map((test, index) => {
          return (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-3 py-2 ">
              <div className=" rounded-md p-6 text-md border border-neutral-800 font-thin hover:bg-neutral-800 hover:transition duration-200">
                <p className=""> {test.text} </p>
                <div className="flex mt-8 items-start">
                  <img
                    className=" w-12 h-12 mr-6 border border-neutral-300 rounded-full"
                    src={test.image}
                    alt={test.user}
                  />
                  <div>
                    <h6> {test.user} </h6>
                    <p> {test.company} </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default Testimonial;
