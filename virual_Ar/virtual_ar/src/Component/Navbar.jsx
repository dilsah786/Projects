import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../Constant/data";


const Navbar = () => {
  const [mobileDrawer, setMobileDrawer] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawer(!mobileDrawer);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems?.map((nav, index) => {
              return (
                <li key={index}>
                  <a href={nav.href}>{nav.label} </a>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a className="py-2 px-3 border rounded-md" href="#">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawer ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawer && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems?.map((nav, index) => {
                return (
                  <li key={index} className="py-3">
                    <a href={nav.href}> {nav.label} </a>
                  </li>
                );
              })}
            </ul>
            <div className="flex space-x-6 mt-3 ">
              <a href="#" className="py-2 max-[400px]:text-[10px] px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 max-[400px]:text-[10px] py-2 px-3 rounded-md"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
