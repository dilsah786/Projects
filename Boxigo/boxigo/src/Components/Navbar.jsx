import React, { useState } from "react";
import { navbarItems } from "../ConfigFile/dataConfig";
import logo from "../assets/boxigo_logo_small.png";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);

  const openSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div className="w-full lg:w-4/5 pt-6 mx-auto border-b pb-2 top-0 lg:bg-white bg-slate-400 opacity-100 lg:static fixed z-50">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="sticky">
            <Link to="/">
              <img className="w-36 ml-4 lg:w-52" src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="lg:hidden fixed right-5 top-10">
            <button onClick={openSideBar}>
              {sideBar ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          <div className="hidden lg:flex gap-6">
            <ul className="flex gap-6 items-center">
              <li><Link to="/">ABOUT US</Link></li>
              <li><Link to="/">GET QUOTE</Link></li>
              <li><Link to="/">VENDORS</Link></li>
              <li><Link to="/">CONTACT</Link></li>
              <li><Link to="/">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {sideBar && (
          <div className="fixed top-20 right-0 w-full bg-slate-400 opacity-100 lg:hidden z-40">
            <div className="flex flex-col items-center py-6">
              {navbarItems?.map((item, index) => (
                <Link key={index} to="/" onClick={openSideBar} className="w-full text-center">
                  <ul key={index} className="py-2">
                    <img className="m-auto" src={item.icon} alt={`${item.name} icon`} />
                    <li className="mt-2">{item.name}</li>
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
