import React from "react";
import { communityLinks, platformLinks, resourcesLinks } from "../Constant/data";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="">
          <h3>Resources</h3>
          <ul>
            {resourcesLinks?.map((link, index) => {
              return (
                <li key={index}>
                  {" "}
                  <a className="text-neutral-400" href={link.href}>{link.text}</a>{" "}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="">
          <h3>Platform</h3>
          <ul>
            {platformLinks?.map((link, index) => {
              return (
                <li key={index}>
                  {" "}
                  <a className="text-neutral-400" href={link.href}>{link.text}</a>{" "}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="">
          <h3>Communinty</h3>
          <ul>
            {communityLinks?.map((link, index) => {
              return (
                <li key={index}>
                  {" "}
                  <a className="text-neutral-400" href={link.href}>{link.text}</a>{" "}
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
