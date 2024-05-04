import React, { useState } from "react";
import { RiCurrencyLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { Avatar } from "../assets/index.js";
import ThemeSwitch from "./ThemeSwitch.jsx";



const links  = ["Dashboard","Trasactions","Account","Settings"]


const Navbar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="w-full flex items-center justify-between py-6">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-violet-700 rounded-xl">
          <RiCurrencyLine className="text-white text-3xl hover:animate-spin" />
        </div>
        <span className="text-xl font-bold text-black dark:text-white ">
          My-Finance
        </span>
      </div>

      <div className="hidden md:flex items-center gap-10 2xl:gap-20">
        {links?.map((link, index) => {
          return (
            <div
              key={index}
              className={`${
                index === selected
                  ? "bg-black dark:bg-slate-800 text-white "
                  : " text-gray-700 dark:text-gray-500 "
              } px-6 py-6 rounded-full`}

              onClick={()=>setSelected(index)}
            >
              <a href="#"> {link} </a>
            </div>
          );
        })}
      </div>

     <div className="flex items-center gap-10 " >
        <ThemeSwitch/>
        <div className="flex items-center gap-2" >
            <img src={Avatar} alt="User" className="w-10 md:w-12 h-10 md:h-12 rounded-none-full object-cover cursor-pointer"  />
          <div className="hidden md:block" >
            <p className="text-lg font-medium text-black dark:text-gray-400 ">Md Dilnawaz Alam</p>
            <span className="text-sm text-gray-700 dark:text-gray-500" >mddilnawazalam@gmail.com</span>
            <MdOutlineKeyboardArrowDown className="hidden md:block text-2xl text-gray-600 dark:text-gray-300 cursor-pointer" />
          </div>

        </div>
     </div>

    </div>
  );
};

export default Navbar;
