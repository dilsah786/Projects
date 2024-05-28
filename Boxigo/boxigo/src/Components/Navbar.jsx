import React, { useState } from "react";
import { navbarItems } from "../ConfigFile/dataConfig";
import logo from "../assets/boxigo_logo_small.png";
import { Cross, Menu, X } from "lucide-react";
const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="w-[90%] pt-6 m-auto border-b pb-2">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="">
            {" "}
            <img className="max-[500px]:w-36" src={logo} width={200} />
          </div>

          <div className="flex justify-center items-center lg:hidden">
            <button onClick={() => setSideBar(!sideBar)}>
              {sideBar ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          <div className="  justify-center items-center lg:flex hidden">
            <ul className="flex gap-6 justify-center items-center">
              <li>ABOUT US</li>
              <li>GET QUOTE</li>
              <li>VENDORS</li>
              <li>CONTACT</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center fixed ml-[166px] top-52 lg:hidden " >
        {sideBar && (
          <div className="fixed flex flex-col justify-center items-center w-[90%] bg-slate-200 ">
            {navbarItems?.map((item, index) => {
              return (
                <ul
                  className=""
                  key={index}
                >
                  <img className="m-auto py-2 flex justify-center items-center" src={item.icon} />
                  <li className="">
                    {item.name}{" "}
                  </li>
                </ul>
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
