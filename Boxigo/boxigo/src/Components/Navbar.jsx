import React, { useState } from "react";
import { navbarItems } from "../ConfigFile/dataConfig";
import logo from "../assets/boxigo_logo_small.png";
import { Cross, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);


  const openSideBar = ()=>{
    setSideBar(!sideBar)
  }

  return (
    <div className="w-[90%] pt-6 m-auto border-b pb-2">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="">
            {" "}
           <Link to="/" > <img className="max-[500px]:w-36" src={logo} width={200} /></Link>
          </div>

          <div className="flex justify-center items-center lg:hidden fixed right-5">
            <button onClick={openSideBar}>
              {sideBar ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          <div className="  justify-center items-center lg:flex hidden">
            <Link to="/">
            <ul className="flex gap-6 justify-center items-center">
              <li>ABOUT US</li>
              <li>GET QUOTE</li>
              <li>VENDORS</li>
              <li>CONTACT</li>
              <li>FAQ</li>
            </ul>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center fixed ml-[166px] top-48 lg:hidden " >
        {sideBar && (
          <div className="fixed flex flex-col justify-center items-center right-0 w-full bg-slate-200 ">
            {navbarItems?.map((item, index) => {
              return (
                <Link key={index} to="/" >
                <ul onClick={openSideBar}
                  className=""
                  key={index}
                >
                  <img className="m-auto py-2 flex justify-center items-center" src={item.icon} />
                  <li className="mb-2 ">
                    {item.name}{" "}
                  </li>
                </ul>
                </Link>
                
              );
            })}
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
