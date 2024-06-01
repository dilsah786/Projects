import React, { useContext, useEffect, useState } from "react";
import { navbarItems } from "../ConfigFile/dataConfig.js";
import { ArrowRight, Blocks, CheckSquare } from "lucide-react";
import { DataContext } from "../ContextAPi/DataContext.jsx";
import { FaRoute, FaCheckSquare } from "react-icons/fa";
import { IoMdHome, IoIosWarning } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Bars, MutatingDots } from "react-loader-spinner";
import SideBar from "../Components/SideBar.jsx";
import Loader from "../Components/Loader.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import DetailsPage from "./DetailsPage.jsx";

const Moves = () => {
  const { data, singleData, getIndexForSingleData, loading, toggle } =
    useContext(DataContext);

  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleViewDetailsClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if the same index is clicked
    } else {
      setExpandedIndex(index); // Expand the new index
      getIndexForSingleData(index); // Update the context with the current data
    }
  };

  return (
    <div className="w-[90%] m-auto mb-10 ">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex lg:mt-0 mt-20">
          <div className="mt-10 lg:w-[20%] w-[30%] hidden lg:flex lg:flex-col">
            <SideBar />
          </div>

          <div className="flex flex-col ">
            <div className="text-[16px] pt-10 lg:ml-20 ml-10">
              <h1 className="text-black font-extrabold pt-5 underline">
                My Moves
              </h1>
            </div>

            {data?.map((el, index) => {
              return (
                <div
                  key={el.estimate_id}
                  className="ml-10 lg:ml-20 lg:w-[90%] w-[80%]"
                >
                  <div className="shadow-sm" data-aos="fade-up">
                    <div className="w-full mt-10 flex justify-between">
                      <div className="w-1/4">
                        <h1 className="text-black font-bold">From</h1>
                        <p className="text-wrap lg:text-xl text-lg max-[500px]:text-sm">
                          {el.moving_from}
                        </p>
                      </div>
                      <div className="bg-neutral-200 hidden lg:flex justify-center items-center w-10 h-10 rounded-full text-[#ee553b]">
                        <ArrowRight />
                      </div>
                      <div className="w-1/4">
                        <h1 className="text-black font-bold lg:text-xl text-lg max-[500px]:text-sm">
                          To
                        </h1>
                        <p className="lg:text-xl text-lg max-[500px]:text-sm">
                          {el.moving_to}
                        </p>
                      </div>

                      <div className="flex justify-start">
                        <div className="w-1/4">
                          <h1 className="text-black font-bold lg:text-xl text-lg max-[500px]:text-sm">
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
                        <h1 className="text-[#ee553b] mr-1">
                          <IoMdHome size={30} className="" />
                        </h1>
                        <span className="flex max-[500px]:justify-center max-[500px]:items-center lg:text-xl text-lg max-[500px]:text-sm">
                          {el.property_size}
                        </span>
                      </div>
                      <div className="flex">
                        <h1 className="text-[#ee553b] mr-1">
                          <Blocks />
                        </h1>
                        <span className="flex max-[500px]:justify-center max-[500px]:items-center lg:text-xl text-lg max-[500px]:text-sm">
                          {el.total_items}
                        </span>
                      </div>
                      <div className="flex">
                        <h1 className="text-[#ee553b] mr-1">
                          <FaRoute size={30} />
                        </h1>
                        <span className="flex max-[500px]:justify-center max-[500px]:items-center lg:text-xl text-lg max-[500px]:text-sm">
                          {el.distance}
                        </span>
                      </div>
                      <div className="flex">
                        <h1 className="text-[#ee553b] mr-1">
                          <TbTruckDelivery size={30} />
                        </h1>
                        <span className="flex max-[500px]:justify-center max-[500px]:items-center lg:text-xl text-lg max-[500px]:text-sm">
                          {el.moving_on}
                        </span>
                      </div>
                      <div className="flex">
                        <h1 className="text-[#ee553b] mr-1">
                          <FaCheckSquare
                            size={20}
                            className="text-[#ee553b] mt-1 mr-1"
                          />
                        </h1>
                        <h1 className="flex max-[500px]:justify-center max-[500px]:items-center lg:text-xl text-lg max-[500px]:text-sm">
                          is flexible
                        </h1>
                      </div>
                      <div className="justify-end gap-2 w-10 lg:hidden">
                        <div className="my-2">
                          <button
                            className="bg-white border-2 border-[#ee553b] text-[#ee553b] text-sm max-[900px]:w-32 p-1 text-center flex justify-center items-center rounded-md hover:bg-[#ee553b] hover:text-white"
                            onClick={() => handleViewDetailsClick(index)}
                          >
                            View move details
                          </button>
                        </div>
                        <div>
                          <button className="bg-[#ee553b] border p-2 border-[#ee553b] text-white text-center flex justify-center items-center rounded-md text-sm max-[900px]:w-32 hover:bg-transparent hover:text-[#ee553b]">
                            {el.custom_status || "Quotes Awaiting"}
                          </button>
                        </div>
                      </div>

                      <div className="hidden lg:flex gap-2">
                        <div>
                          <button
                            className="bg-white border-2 border-[#ee553b] text-[#ee553b] p-2 text-center flex justify-center items-center rounded-md hover:bg-[#ee553b] hover:text-white"
                            onClick={() => handleViewDetailsClick(index)}
                          >
                            View move details
                          </button>
                        </div>
                        <div>
                          <button className="bg-[#ee553b] border p-2 border-[#ee553b] text-white text-center flex justify-center items-center rounded-md hover:bg-transparent hover:text-[#ee553b]">
                            {el.custom_status || "Quotes Awaiting"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-8">
                      <span>
                        <IoIosWarning size={30} className="text-[#ee553b] mr-1" />
                      </span>
                      <p className="text-center lg:text-xl text-lg max-[500px]:text-sm">
                        <span className="text-black font-bold">Disclaimer </span>
                        : Please update your move date before two days of
                        shifting
                      </p>
                    </div>
                    <hr className="mt-4" />
                  </div>
                  {expandedIndex === index && (
                    <div className="p-4 mt-4 bg-gray-100">
                      <DetailsPage />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Moves;
