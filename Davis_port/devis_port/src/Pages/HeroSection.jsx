import React, { useEffect } from "react";
import heroSectionImage from "../assets/hero-img.jpg";
import AOS from "aos";
import 'aos/dist/aos.css';
import Button from "../Component/Button";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Reviews from "./Reviews";
import Blogs from "./Blogs";
import Contacts from "./Contacts";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div className="flex m-auto lg:mt-36 mt-16  overflow-x-hidden bg-[#070d1b] z-0">
      <div className=" w-11/12 md:flex  sm:flex lg:flex m-auto gap-20 ">
        <div className="flex justify-center m-auto flex-col gap-2 mt-20 ">
          <h1 className="text-yellow-500 font-thin text-3xl pl-1 tracking-wide">
            Hello, I'm
          </h1>
          <h1 className="text-white font-extrabold text-8xl lg:text-9xl  ">
            Edward <br/> Davis
          </h1>
          <p className="text-gray-400 text-3xl lg:text-4xl mt-8 pl-1 tracking-wide">
            Visual Designer
          </p>
         <Button text={"Hire Me"} />
        </div>
        <div
          className="hidden  lg:flex lg:opacity-40"
          data-aos="fade-left"
          data-aos-duration="1500"

        >
          <img  src={heroSectionImage} width={800} />
        </div>
      </div>
    </div>
    <About/>
    <Services/>
    <Skills/>
    <Resume/>
    <Portfolio/>
    <Reviews/>
    <Blogs/>
    <Contacts/>
    </>
  );
};

export default React.memo(HeroSection);
