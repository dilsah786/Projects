import React from "react";
import Button from "../Component/Button";
import { contactItems } from "../utils/dataUtils";
import Title from "../Component/Title";

const Contacts = () => {
  return (
    <div className="mt-20 pb-6">
    <div className="mt-48 lg:mt-12 lg:pt-12" >
    <Title text={"Contact me"} />
    </div>

      <div className="w-4/5 m-auto justify-center items-center">
        <div className="flex  flex-col lg:flex-row gap-8 ">
          <div className=" lg:w-[50%] text-start placeholder:text-start placeholder-slate-400  flex flex-col pb-8 pt-8 p-6 ">
            <h1 className="text-3xl text-neutral-200 mb-6">Just say Hello</h1>
            <input
              className="bg-gray-800 mb-6  h-16 rounded-lg  placeholder:p-6"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="bg-gray-800 mt-2 h-16 rounded-lg mb-6 placeholder:p-6"
              type="text"
              placeholder="Your Email"
            />
            <input
              className="bg-gray-800 mt-2 h-16 rounded-lg mb-6 placeholder:p-6"
              type="text"
              placeholder="Your Subject"
            />
            <textarea
              className="bg-gray-800 mt-2 h-40 rounded-lg placeholder:p-6"
              placeholder="Your Message"
            />
            <Button text={"Send Message"} />
            {/* <Mail className="rounded-full  border w-[60px] h-[60px] p-4" /> */}
          </div>
          <div className="flex flex-col p-6 lg:w-[50%]">
            <h1 className="text-neutral-200 text-3xl font-semibold mb-6">
              Contact Info
            </h1>
            <p className="text-gray-300 text-[16px] mb-12">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ligula nulla tincidunt id faucibus sed suscipit feugiat.{" "}
            </p>

            <div className="flex flex-col gap-4 ">
              {contactItems?.map((cont, index) => {
                return (
                  <div className="flex gap-4">
                    <div>
                      <p className="border border-white w-[60px] h-[60px] rounded-full p-4 hover:border-yellow-400 cursor-pointer ">
                        {cont.icons}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-2xl text-neutral-200 mb-4 hover:text-yellow-500">
                        {cont.title}
                      </p>
                      <p className="text-gray-400" >{cont.desc1}</p>
                      <p className="text-gray-400">{cont.desc2}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
