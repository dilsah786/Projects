import React, { useEffect } from "react";
import heroImage from "../assets/hero-img.jpg";
import Button from "../Component/Button";
import Title from "../Component/Title";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);



  return (
    <div className="mt-36  bg-[#0a101e] pt-8 pb-10">
    <div className="mt-24 lg:mt-0">
    <Title text={"ABOUT ME"} />
    </div>
     
      <div className="flex w-4/5 flex-col  lg:justify-around lg:flex-row lg:gap-16 m-auto">
        <div className="mb-6" data-aos="zoom-in-up" data-aos-duration="1500">
          <img className="lg:w-[1200px]" src={heroImage} />
        </div>
        <div className="">
          <h1 className="text-white text-4xl py-2">
            Hi There! I'm Edward Davis
          </h1>
          <h1 className="text-yellow-500 text-3xl py-2">Visual Designer</h1>
          <p className=" text-gray-400 text-start text-lg py-2">
            I am a Visual Designer with a strong focus on digital branding.
            Visul design seeks to attract, inspire, create desires and motivate
            people to respond to messages, with a view to making a favorable
            impact.
          </p>
          <div className="flex text-gray-400 ">
            <div className="mt-2 text-sm lg:text-xl  font-semibold">
              <p className="p-2">Birthday</p>
              <p className="p-2">Phone</p>
              <p className="p-2">Email</p>
              <p className="p-2">From</p>
              <p className="p-2">Language</p>
              <p className="p-2">Freelance</p>
            </div>
            <div className="mt-2 text-sm lg:text-xl ">
              <p className="p-2">
                <span className="pr-2 ml-6">: </span> May 07, 1990
              </p>
              <p className="p-2">
                <span className="pr-2 ml-6">: </span> +1 876-369-9009
              </p>
              <p className="p-2">
                <span className="pr-2 ml-6">: </span> devis@example.com
              </p>
              <p className="p-2 hidden lg:flex md:flex sm:flex ">
                <span className="pr-2 ml-6">: </span> 2661 Hich meadow lane bear
                creek{" "}
              </p>
              <p className="p-2">
                <span className="pr-2 ml-6">: </span> English, Germanic
              </p>
              <p className="p-2">
                <span className="pr-2 ml-6">: </span> Available
              </p>
            </div>
          </div>

          <Button text={"Download CV"} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(About);
