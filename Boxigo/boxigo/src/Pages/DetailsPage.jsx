import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../ContextAPi/DataContext";
import { IoIosWarning, IoMdHome } from "react-icons/io";
import { ArrowDown, ArrowRight, ArrowUp, Blocks } from "lucide-react";
import { FaCheckSquare, FaRoute } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import SideBar from "../Components/SideBar";
import Loader from "../Components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from "./Accordion";

const DetailsPage = () => {
  const [data, setData] = useState([]);
  const [model, setModel] = useState(false);
  const [items, setItems] = useState([]);
  const [id, setId] = useState(-1);
  const { singleData, loading } = useContext(DataContext);
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);

  const handleButtonClick = (index) => {
    setExpandedItemIndex(index === expandedItemIndex ? null : index);
  };

  useEffect(() => {
    setData(singleData);
    setItems(singleData.items?.inventory);
  }, [singleData]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-[85%] m-auto mb-10 ">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex">
          <div
            className="mt-10 lg:w-[20%] w-[30%] hidden lg:flex lg:flex-col"
            data-aos="fade-right"
          >
            <SideBar />
          </div>
          <div>
            <div className="lg:-ml-20">
              {/* Parcel div */}
              <div className="flex flex-col">
                <div className="text-[16px] pt-10 lg:ml-20 ml-10">
                  <h1 className="text-black font-extrabold pt-5 underline">
                    My Moves
                  </h1>
                </div>

                <div
                  key={data.estimate_id}
                  className=" ml-10 lg:ml-20 lg:w-[90%]  w-[80%] "
                 >
                  <div className=" lg:w-full mt-10 flex justify-between lg:justify-between">
                    <div className="lg:w-1/4 w-1/3">
                      <h1 className="text-black font-bold">From</h1>
                      <p className="text-wrap lg:text-xl text-lg  max-[500px]:text-sm">
                        {" "}
                        {data.moving_from}{" "}
                      </p>
                    </div>
                    <div className="bg-neutral-200 hidden lg:flex justify-center items-center w-10 h-10 rounded-full text-[#ee553b]">
                      <ArrowRight />{" "}
                    </div>
                    <div className="lg:w-1/4 w-1/3 ">
                      <h1 className="text-black font-bold lg:text-xl text-lg  max-[500px]:text-sm">
                        To
                      </h1>
                      <p className="lg:text-xl text-lg  max-[500px]:text-sm">
                        {" "}
                        {data.moving_to}{" "}
                      </p>
                    </div>

                    <div className="flex justify-start">
                      <div className="lg:w-1/4 w-1/3">
                        <h1 className="text-black font-bold lg:text-xl text-lg  max-[500px]:text-sm">
                          Request#
                        </h1>
                        <p className="text-[#ee553b] font-extrabold">
                          {data.estimate_id}
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
                        {data.property_size}
                      </span>
                    </div>
                    <div className="flex ">
                      <h1 className="text-[#ee553b] mr-1">
                        {" "}
                        <Blocks />{" "}
                      </h1>
                      <span className="flex max-[500px]:justify-center max-[500px]:items-center lg:text-xl text-lg  max-[500px]:text-sm">
                        {" "}
                        {data.total_items}
                      </span>
                    </div>
                    <div className="flex ">
                      <h1 className="text-[#ee553b] mr-1">
                        {" "}
                        <FaRoute size={30} />{" "}
                      </h1>
                      <span className="flex max-[500px]:justify-center max-[500px]:items-center lg:text-xl text-lg  max-[500px]:text-sm">
                        {" "}
                        {data.distance}{" "}
                      </span>
                    </div>
                    <div className="flex ">
                      <h1 className="text-[#ee553b] mr-1">
                        {" "}
                        <TbTruckDelivery size={30} />{" "}
                      </h1>
                      <span className="flex max-[500px]:justify-center max-[500px]:items-center lg:text-xl text-lg  max-[500px]:text-sm">
                        {" "}
                        {data.moving_on}{" "}
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
                        <button className="bg-white border-2 border-[#ee553b] text-[#ee553b] text-sm max-[900px]:w-32 p-1 text-center flex justify-center items-center rounded-md  hover:bg-[#ee553b] hover:text-white transition-colors">
                          <Link to="/">View All Moves</Link>
                        </button>
                      </div>
                      <div>
                        <button className="bg-[#ee553b] border p-2 border-[#ee553b] text-white text-center flex justify-center items-center rounded-md text-sm max-[900px]:w-32 hover:bg-white hover:text-[#ee553b]">
                          {data.custom_status || "Quotes Awaiting"}
                        </button>
                      </div>
                    </div>

                    <div className="hidden lg:flex gap-2">
                      <div>
                        <button className="bg-white border-2 border-[#ee553b] text-[#ee553b] p-2 text-center flex justify-center items-center rounded-md hover:bg-[#ee553b] hover:text-white">
                          <Link to="/">View All Moves</Link>
                        </button>
                      </div>
                      <div>
                        <button className="bg-[#ee553b] border p-2 border-[#ee553b] text-white text-center flex justify-center items-center rounded-md hover:bg-white hover:text-[#ee553b]">
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
                  <hr className="mt-2" />
                </div>
              </div>
            </div>
            {/* Additional Parts start here */}
            <div className="flex justify-between items-center mt-5 mb-5">
              <div>
                <h1 className="text-black font-bold lg:text-xl md:text-lg  ">
                  Additional Information
                </h1>
              </div>
              <div>
                {" "}
                <button className="bg-black text-white lg:text-lg text-sm lg:font-medium lg:p-2 p-1 rounded-sm">
                  Edit Additional Info
                </button>{" "}
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center mt-5 mb-5">
                <div>
                  <h1 className="text-black font-bold lg:text-xl md:text-lg  ">
                    House Details
                  </h1>
                </div>
                <div>
                  {" "}
                  <button className="bg-black text-white font-medium lg:p-2 p-1 rounded-sm lg:text-lg text-sm lg:font-medium">
                    Edit House Details
                  </button>{" "}
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col mb-5">
                <h1 className="text-orange-600 font-bold">
                  Existing House Details
                </h1>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-black font-semibold">Floor No.</h1>
                    <p> {data.old_floor_no} </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-black font-semibold">
                      Elevator Available
                    </h1>
                    <p> {data.old_elevator_availability} </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-black font-semibold">
                      Distance from Elevator / Staircase to truck
                    </h1>
                    <p> {data.old_parking_distance} </p>
                  </div>
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className="mb-5">
                <h1 className="text-orange-600 font-bold">New House Details</h1>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-black font-semibold">Floor No.</h1>
                    <p> {data.new_floor_no} </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-black font-semibold">
                      Elevator Available
                    </h1>
                    <p> {data.new_elevator_availability} </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-black font-semibold">
                      Distance from Elevator / Staircase to truck
                    </h1>
                    <p> {data.new_parking_distance} </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}

            <div className="flex justify-between items-center mt-5 mb-5">
              <div>
                <h1 className="text-black font-bold lg:text-xl md:text-lg  ">
                  Inventory Details
                </h1>
              </div>
              <div>
                {" "}
                <button className="bg-black text-white font-medium lg:p-2 p-1 rounded-sm lg:text-lg text-sm lg:font-medium">
                  Edit Inventory
                </button>{" "}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              {items?.map((item, index) => (
                <div
                  key={item.id}
                  className="flex justify-between bg-gray-300 p-2"
                  data-aos="fade-up"
                  data-aos-duration="200"
                >
                  <div className="flex gap-2">
                    <h1 className="text-orange-600 font-semibold">
                      {item.displayName}
                    </h1>
                    <h1 className="text-white w-8 h-8 pl-3 pt-1 rounded-full bg-orange-600">
                      {item.category.length}
                    </h1>
                  </div>
                  <div>
                    <button onClick={() => handleButtonClick(index)}>
                      {expandedItemIndex === index ? (
                        <ArrowUp />
                      ) : (
                        <ArrowDown />
                      )}
                    </button>
                  </div>
                  {expandedItemIndex === index && (
                    <div
                      className="flex-row lg:grid-cols-7 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between gap-4"
                      data-aos="fade-down"
                      data-aos-duration="600"
                    >
                      {item.category?.map((categoryItem) => (
                        <div key={categoryItem.id}>
                          <h1 className="text-black font-semibold lg:text-xl text-lg">
                            {categoryItem.displayName}
                          </h1>
                          <div>
                            {categoryItem.items?.map((el) => (
                              <div
                                key={el.id}
                                className="flex justify-between gap-2"
                              >
                                <p className="pb-2 font-semibold text-slate-600">
                                  {el.displayName}
                                </p>
                                <p className="font-medium text-slate-600">
                                  {el.qty}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
