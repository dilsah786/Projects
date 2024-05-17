import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { mobileNavItems, navItems } from "../utils/dataUtils";
import {
  Menu,
  Phone,
  PhoneCall,
  PhoneCallIcon,
  PhoneIcon,
  X,
} from "lucide-react";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div className="bg-[#070e1b] w-full fixed -top-4 z-20 ">
      <div className=" m-auto sticky  overflow-hidden">
        <nav className="  flex justify-around items-center p-8   m-auto ">
          <div className="">
            <Link to="/">
              {" "}
              <img className="w-28 lg:w-40 md:w-40" src={logo} />
            </Link>
          </div>
          <div className="flex justify-end">
            <ul className=" hidden  lg:flex justify-around items-center gap-8">
              {navItems.map((nav, index) => {
                return (
                  <Link to={nav.href}>
                    <li className="text-xl cursor-pointer hover:text-yellow-500">
                      {" "}
                      {nav.text}{" "}
                    </li>
                  </Link>
                );
              })}
            </ul>
            <div className="lg:flex justify-between items-center gap-4 hidden">
              <p className="border-r border-2 m-6 h-4"></p>
              <PhoneIcon
                className="space-x-4 hover:text-yellow-500"
                size={16}
              />
              <p className="text-yellow-500 text-lg font-semibold hover:text-neutral-100 ">
                {" "}
                +1 971 234 1508{" "}
              </p>
            </div>
          </div>
          <div className="md:flex justify-end lg:hidden">
            <button onClick={toggleDrawer}>{drawer ? <X /> : <Menu />}</button>
          </div>
        </nav>
        {drawer && (
          <div className="bg-slate-800 w-[100%] flex justify-center items-center ">
            <ul>
              {mobileNavItems.map((nav, index) => {
                return (
                  <Link to={nav.href}>
                  <li key={index} className="py-3 text-[18px] hover:underline">
                    {nav.text} 
                  </li>
                  </Link>
                  
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
