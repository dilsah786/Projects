import React from 'react'
import { navbarItems } from '../ConfigFile/dataConfig';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div>
     {navbarItems?.map((item, index) => {
            return (
              <Link to="/" key={index} ><ul className="flex flex-row gap-2 m-1" key={index}>
                <img className="m-2 w-6 h-6" src={item.icon} />
                <li className="text-black text-sm font-semibold p-3 -ml-4 ">
                  {item.name}{" "}
                </li>
              </ul></Link>
            );
          })}
    
    </div>
  )
}

export default SideBar