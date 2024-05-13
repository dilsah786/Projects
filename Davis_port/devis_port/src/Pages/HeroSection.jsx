import React, { useEffect } from "react";
import heroSectionImage from "../assets/hero-img.jpg";
import AOS from "aos";
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex m-auto overflow-x-hidden">
      <div className="flex justify-between items-center m-auto">
        <div className="flex justify-center m-auto flex-col gap-2 mt-20 ">
          <h1 className="text-yellow-500 font-thin text-3xl pl-1 tracking-wide">
            Hello, I'm
          </h1>
          <h1 className="text-white font-extrabold text-8xl lg:text-9xl tracking-wide">
            Edward Davis
          </h1>
          <p className="text-gray-400 text-4xl mt-8 pl-1 tracking-wide">
            Visual Designer
          </p>
          <button className="text-black bg-yellow-500 p-2 mt-8 w-48 rounded-full ml-1 tracking-wide">
            Hire Me
          </button>
        </div>
        <div
          className="hidden lg:flex"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <img  src={heroSectionImage} width={1000} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
