import React from "react";
import "../App.css";
import vector3 from "../assets/Vector 3.png";
import vector4 from "../assets/Vector 4.png";
import vector5 from "../assets/Vector 5.png";
import hand from "../assets/Rectangle.png";
import vector1 from "../assets/Vector 1.png";

const About = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-row justify-between items-center">
        <div className=" flex justify-center items-center relative">
          <img
            src={vector1}
            className=" flex justify-center items-center absolute"
            width={300}
          />
          <img
            src={hand}
            width={300}
            className="flex justify-center items-center relative mb-6"
          />
        </div>
        <div>
          <article>
            <p className="first-letter:text-[32px] text-gray-900 font-semibold text-[24px] dark:text-white">
              This is it. ;)
              <p className="w-[50%] border-b border-gray-800 inline-flex ml-10 dark:border-white border-2"></p>
            </p>
          </article>
          <p className="dark:text-gray-400" >
            Anish Kr. Sinha is an Indian
            <span className="text-gray-900 font-semibold dark:text-white">
              UI/UX Designer & Front End Developer
            </span>
            with passion for designing beautiful and functional user <br />
            experiences. Typically, he's Driven & permanently Curious. He's
            obsessed with things and even more obsessed with <br />
            designing coll & clean stuff for the web and mobile. He has been in
            the business of creating his first painting <br />
            on the wall when he was 11.
            <br /> He holds a <span></span>
            <span className="text-gray-900 font-semibold dark:text-white">
               bachelor degree in Computer Applications. <span> </span> 
            </span> 
             During his graduation, he has been actively involved in the web
            <br/>
            design communinty for the last 3 years. he has designed website for
            small business, events, nonprofits and more. <br/>
             Currently he's based in Bihar,
            <span className="text-gray-900 font-semibold dark:text-white">India</span> Where
            he's working as an independent creative.
            <br />
            <br />
            His interest, however, extend beyond the web and he loves helping
            people with branding and print design. He even loves <br />
            designing
            <span className="text-gray-900 font-semibold dark:text-white"> 3D floor plan. </span>
            <br />
            <br />
            When he's not designing, he's probably hanging out with his
            girlfriend, watching series, sketching or messing around on <br />
            something inspired by Youtube tutorials.
          </p>
          <br />
          <br />
          <br />
          <br />
          <div className="flex justify-center items-center">
            <p className="w-[50%]  border-b border-gray-700 dark:border-white border-2 "> </p>
          </div>
        </div>

        <div>
          <img src={vector3} width={300} height={300} />
        </div>
      </div>
      <div className="flex flex-row justify-around items-center ">
        <img src={vector4} width={300} />
        <img src={vector5} width={300} />
      </div>
    </div>
  );
};

export default About;
