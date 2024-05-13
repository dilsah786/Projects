import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        {" "}
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex  justify-center my-10 gap-4 md:gap-6 lg:gap-7">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800  max-[400px]:text-[10px] py-3 px-4 rounded-md max-[400px]:h-10 max-[400px]:py-3"
        >
          {" "}
          Start for free{" "}
        </a>
        <a
          href="#"
          className=" max-[400px]:py-3 max-[400px]:text-[10px] max-[400px]:h-10 py-3 px-4 rounded-md border"
        >
          {" "}
          Documentation{" "}
        </a>
      </div>
      <div className=" flex max-[400px]:flex-col  md:flex lg:flex max-[400px]:-mt-4  mt-10 justify-center items-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 max-[400px]:w-4/5 border border-orange-700 shadow-orange-400 mx-2 my-4   "
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support video tag
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 max-[400px]:w-4/5 border border-orange-700 shadow-orange-400 mx-2 my-4   "
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support video tag
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
