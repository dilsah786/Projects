import React, { useEffect } from "react";
import { serviceItems } from "../utils/dataUtils";
import Title from "../Component/Title";
import AOS from "aos";
import 'aos/dist/aos.css';
const Services = () => {

    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className="bg-[#0a101e] pb-8 pt-28">
    <Title text={"services"} />
      <div className="grid min-[600px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 hover:text-neutral-300 w-4/5 justify-center items-center m-auto">
        {serviceItems?.map((service, index) => {
          return (
            <div key={index} className="flex flex-col justify-center items-center bg-[#101624] rounded-md m-2 lg:m-4 p-4 lg:p-8 hover:text-cyan-400 transition-transform " data-aos="fade-up">
             <img  src={service.icon} width={80} className="rounded-full hover:bg-yellow-500 cursor-pointer" />
              <h2 className="p-6 text-center text-3xl font-semibold" > {service.title} </h2>
              <p  className="p-6 text-center hover:text-neutral-300" > {service.description} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
