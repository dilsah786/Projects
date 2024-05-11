import React from "react";
import Navbar from "../Component/Navbar";
import wave from "../assets/Wave.svg";
import avatar from "../assets/Group 23.png";
import btn from "../assets/hello_btn.png";
import Social from "../Component/Social";
import Email from "../Component/Email";

const Home = () => {
  return (
    <div className="flex justify-between items-center -mt-10 ">
      <div className="pt-96 ml-20">
        <Social />
      </div>
      <div className="">
        {/* <button className='text-2xl font-bold text-white w-[197px] h-[72px] bg-gradient-to-r from-[#32F6F6] to-[#A6A79F] rounded-borderRadius' >Hello!</button> */}
        <img src={btn} className="-mb-8 -ml-8" width={197} height={72} />
        <p className="font-bold  text-[40px] flex gap-2 dark:text-white">
          I'm <span className="text-gray-500 underline dark:text-gray-400 ">Anish</span>
          <sapn>
            <img src={wave} width={50} />
          </sapn>
        </p>
        <p className="text-gray-500 text-lg dark:text-gray-400">
          UI/UX Designer, Front-End Developer & Thinker
        </p>
        <p className="text-gray-500 text-lg dark:text-gray-400">Based in India.</p>

        <div className="flex gap-5 w-[375px] mt-16">
          <button className="text-white bg-orange-600 border rounded-md p-2 font-semibold shadow-orange-900/90 ">
            Download CV
          </button>
          <button className="text-white bg-slate-900 border rounded-md p-2 font-semibold shadow-lg">
            Get In Touch
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="ml-50 mt-36">
          <img className="ml-48" src={avatar} width={500} height={575} />
        </div>
        <div className="mt-80">
          <Email />
        </div>
      </div>
    </div>
  );
};

export default Home;
