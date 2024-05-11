import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import sun from "../assets/sun.png";
import moon from "../assets/Moon.png";

const Navbar = ({ handleTheme }) => {
  const theme = localStorage.getItem("theme");

  return (
    <div className="pt-4 text-black dark:text-white font-bold">
      <nav className="flex flex-row justify-around items-center">
        <div>
          <ul className="flex flex-row justify-center items-center">
           
              <img src={logo} className="pr-2  bg-white dark:rounded-3xl dark:mr-2" />
              
            <li> ANISH KUMAR SINHA </li>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex flex-row gap-8 p-6 ">
            <li>Home</li>
            <li>About</li>
            <li>Resume</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <ul className="cursor-pointer">
            <li className="">
              <button className="" onClick={() => handleTheme()}>
                <img src={theme==="dark" ? sun : moon} className="ml-2 w-6 pt-6" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
