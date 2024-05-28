import React, { useContext } from "react";
import { navbarItems } from "../ConfigFile/dataConfig.js";
import { ArrowRight, Blocks, CheckSquare } from "lucide-react";
import { DataContext } from "../ContextAPi/DataContext.jsx";
import { FaRoute, FaCheckSquare } from "react-icons/fa";
import { IoMdHome, IoIosWarning } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";

const Moves = () => {
  const { data, singleData, getIndexForSingleData } = useContext(DataContext);

  return (
    <div className="w-[90%] m-auto mb-10">
      <div className="flex">
        <div className="mt-10 lg:w-[20%] w-[30%] hidden lg:flex lg:flex-col">
          {navbarItems?.map((item, index) => {
            return (
              <ul className="flex flex-row gap-2 m-1" key={index}>
                <img className="m-2 w-6 h-6" src={item.icon} />
                <li className="text-black text-sm font-semibold p-3 -ml-4 ">
                  {item.name}{" "}
                </li>
              </ul>
            );
          })}
        </div>

        {/* <div className="flex flex-col">
          <div className="text-[16px] pt-10 ml-20">
            <h1 className="text-black font-extrabold pt-5">My Moves</h1>
          </div>
          {data?.map((el, index) => {
            return (
              <div key={el.estimate_id} className=" ml-20 lg:w-[90%]  w-[80%] ">
                <div className=" w-full mt-10 flex justify-between ">
                  <div className="w-1/4">
                    <h1 className="text-black font-bold">From</h1>
                    <p className="text-wrap"> {el.moving_from} </p>
                  </div>
                  <div className="bg-neutral-200 flex justify-center items-center w-10 h-10 rounded-full text-[#ee553b]">
                    <ArrowRight />{" "}
                  </div>
                  <div className="w-1/4 ">
                    <h1 className="text-black font-bold">To</h1>
                    <p> {el.moving_to} </p>
                  </div>

                  <div className="flex justify-start">
                    <div className="w-1/4">
                      <h1 className="text-black font-bold">Request#</h1>
                      <p className="text-[#ee553b] font-extrabold">
                        {el.estimate_id}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-between mt-10 ">
                  <div className="flex ">
                    <h1 className="text-[#ee553b] mr-1 ">
                      {" "}
                      <IoMdHome size={30} className="" />{" "}
                    </h1>
                    <span> {el.property_size}</span>
                  </div>
                  <div className="flex ">
                    <h1 className="text-[#ee553b] mr-1">
                      {" "}
                      <Blocks />{" "}
                    </h1>
                    <span> {el.total_items}</span>
                  </div>
                  <div className="flex ">
                    <h1 className="text-[#ee553b] mr-1">
                      {" "}
                      <FaRoute size={30} />{" "}
                    </h1>
                    <span> {el.distance} </span>
                  </div>
                  <div className="flex ">
                    <h1 className="text-[#ee553b] mr-1">
                      {" "}
                      <TbTruckDelivery size={30} />{" "}
                    </h1>
                    <span> {el.moving_on} </span>
                  </div>
                  <div className="flex ">
                    <h1 className="text-[#ee553b] mr-1">
                      {" "}
                      <FaCheckSquare size={20} className="text-[#ee553b] " />{" "}
                    </h1>

                    <span> is flexible</span>
                  </div>
                  <div className="flex justify-end border gap-2">
                    <div>
                      <button className="bg-white border-2 border-[#ee553b] text-[#ee553b] p-2 text-center flex justify-center items-center rounded-md" onClick={()=>getIndexForSingleData(index)} >
                        View move details
                      </button>
                    </div>
                    <div>
                      <button className="bg-[#ee553b] border p-2 border-[#ee553b] text-white text-center flex justify-center items-center rounded-md">
                        {el.custom_status}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex mt-8">
                  <span>
                    {" "}
                    <IoIosWarning size={30} className="text-[#ee553b] mr-1" />{" "}
                  </span>
                  <p>
                    {" "}
                    <span className="text-black font-bold">
                      Disclaimer{" "}
                    </span>
                    : Please update your move date before two days of shifting
                  </p>
                </div>
                <hr className="mt-2" />
              </div>
            );
          })}
        </div> */}
        <div className="flex flex-col ">
          <div className="text-[16px] pt-10 lg:ml-20 ml-10">
            <h1 className="text-black font-extrabold pt-5 underline">
              My Moves
            </h1>
          </div>
          
          {data?.map((el, index) => {
            return (
              <div
                key={data.estimate_id}
                className="  ml-10 lg:ml-20 lg:w-[90%]  w-[80%]"
              >
              <div className="bg-neutral-50 shadow-md " >
                <div className=" w-full mt-10 flex justify-between">
                  <div className="w-1/4">
                    <h1 className="text-black font-bold">From</h1>
                    <p className="text-wrap lg:text-xl text-lg  max-[500px]:text-sm">
                      {" "}
                      {el.moving_from}{" "}
                    </p>
                  </div>
                  <div className="bg-neutral-200 hidden lg:flex justify-center items-center w-10 h-10 rounded-full text-[#ee553b]">
                    <ArrowRight />{" "}
                  </div>
                  <div className="w-1/4 ">
                    <h1 className="text-black font-bold lg:text-xl text-lg  max-[500px]:text-sm">
                      To
                    </h1>
                    <p className="lg:text-xl text-lg  max-[500px]:text-sm">
                      {" "}
                      {el.moving_to}{" "}
                    </p>
                  </div>

                  <div className="flex justify-start">
                    <div className="w-1/4">
                      <h1 className="text-black font-bold lg:text-xl text-lg  max-[500px]:text-sm">
                        Request#
                      </h1>
                      <p className="text-[#ee553b] font-extrabold">
                        {el.estimate_id}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:flex w-full justify-between mt-10 lg:flex-row flex-col gap-2 grid grid-cols-2">
                  <div className="flex">
                    <h1 className="text-[#ee553b] mr-1 ">
                      {" "}
                      <IoMdHome size={30} className="" />{" "}
                    </h1>
                    <span className="flex max-[500px]:justify-center max-[500px]:items-center lg:text-xl text-lg  max-[500px]:text-sm">
                      {" "}
                      {el.property_size}
                    </span>
                  </div>
                  <div className="flex ">
                    <h1 className="text-[#ee553b] mr-1">
                      {" "}
                      <Blocks />{" "}
                    </h1>
                    <span className="flex max-[500px]:justify-center max-[500px]:items-center lg:text-xl text-lg  max-[500px]:text-sm">
                      {" "}
                      {el.total_items}
                    </span>
                  </div>
                  <div className="flex ">
                    <h1 className="text-[#ee553b] mr-1">
                      {" "}
                      <FaRoute size={30} />{" "}
                    </h1>
                    <span className="flex max-[500px]:justify-center max-[500px]:items-center lg:text-xl text-lg  max-[500px]:text-sm">
                      {" "}
                      {el.distance}{" "}
                    </span>
                  </div>
                  <div className="flex ">
                    <h1 className="text-[#ee553b] mr-1">
                      {" "}
                      <TbTruckDelivery size={30} />{" "}
                    </h1>
                    <span className="flex max-[500px]:justify-center max-[500px]:items-center lg:text-xl text-lg  max-[500px]:text-sm">
                      {" "}
                      {el.moving_on}{" "}
                    </span>
                  </div>
                  <div className="flex ">
                    <h1 className="text-[#ee553b] mr-1">
                      {" "}
                      <FaCheckSquare
                        size={20}
                        className="text-[#ee553b] mt-1 mr-1"
                      />{" "}
                    </h1>
                    <h1 className="flex max-[500px]:justify-center max-[500px]:items-center lg:text-xl text-lg  max-[500px]:text-sm">
                      {" "}
                      is flexible
                    </h1>
                  </div>
                  <div className=" justify-end  gap-2 w-10  lg:hidden">
                    <div className="my-2">
                      <button
                        className="bg-white border-2 border-[#ee553b] text-[#ee553b] text-sm max-[800px]:w-32 p-1 text-center flex justify-center items-center rounded-md "
                        onClick={() => getIndexForSingleData(index)}
                      >
                        View move details
                      </button>
                    </div>
                    <div>
                      <button className="bg-[#ee553b] border p-2 border-[#ee553b] text-white text-center flex justify-center items-center rounded-md text-sm max-[800px]:w-32">
                        {el.custom_status || "Quotes Awaiting"}
                      </button>
                    </div>
                  </div>

                <div className="hidden lg:flex gap-2">
                  <div>
                  <button className="bg-white border-2 border-[#ee553b] text-[#ee553b] p-2 text-center flex justify-center items-center rounded-md">
                    View move details
                  </button>
                </div>
                <div>
                  <button className="bg-[#ee553b] border p-2 border-[#ee553b] text-white text-center flex justify-center items-center rounded-md">
                    {data.custom_status || "Quotes Awaiting"}
                  </button>
                </div>
              </div>











                  

                </div>
                <div className="flex mt-8">
                  <span>
                    {" "}
                    <IoIosWarning
                      size={30}
                      className="text-[#ee553b] mr-1"
                    />{" "}
                  </span>
                  <p className="text-center lg:text-xl text-lg  max-[500px]:text-sm">
                    {" "}
                    <span className="text-black font-bold">Disclaimer </span>:
                    Please update your move date before two days of shifting
                  </p>
                </div>
                <hr className=" mt-4" />
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Moves;
