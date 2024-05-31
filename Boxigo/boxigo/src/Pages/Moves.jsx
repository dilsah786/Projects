import React, { useContext, useEffect } from "react";
import { ArrowRight, Blocks } from "lucide-react";
import { FaRoute, FaCheckSquare } from "react-icons/fa";
import { IoMdHome, IoIosWarning } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import SideBar from "../Components/SideBar.jsx";
import Loader from "../Components/Loader.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { DataContext } from "../ContextAPi/DataContext.jsx";

const Moves = () => {
  const { data, getIndexForSingleData, loading } = useContext(DataContext);

  useEffect(() => {
    AOS.init();
  }, []);

  const MoveDetail = ({ title, content, contentClass = "" }) => (
    <div className="w-1/4">
      <h1 className="text-black font-bold">{title}</h1>
      <p className={`lg:text-xl text-lg max-[500px]:text-sm ${contentClass}`}>{content}</p>
    </div>
  );

  const MoveIcon = ({ icon, content }) => (
    <div className="flex">
      <h1 className="text-[#ee553b] mr-1">{icon}</h1>
      <span className="flex max-[500px]:justify-center max-[500px]:items-center lg:text-xl text-lg max-[500px]:text-sm">
        {content}
      </span>
    </div>
  );

  const ActionButton = ({ text, link, isPrimary, onClick }) => (
    <button
      className={`p-2 text-center flex justify-center items-center rounded-md text-sm max-[900px]:w-32 ${
        isPrimary
          ? "bg-[#ee553b] border border-[#ee553b] text-white hover:bg-transparent hover:text-[#ee553b]"
          : "bg-white border-2 border-[#ee553b] text-[#ee553b] hover:bg-[#ee553b] hover:text-white"
      }`}
      onClick={onClick}
    >
      {link ? <Link to={link}>{text}</Link> : text}
    </button>
  );

  const Disclaimer = () => (
    <div className="flex mt-8">
      <span>
        <IoIosWarning size={30} className="text-[#ee553b] mr-1" />
      </span>
      <p className="text-center lg:text-xl text-lg max-[500px]:text-sm">
        <span className="text-black font-bold">Disclaimer:</span> Please update your move date before two days of shifting
      </p>
    </div>
  );

  return (
    <div className="w-[90%] m-auto mb-10">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex lg:mt-0 mt-20">
          <div className="mt-10 lg:w-[20%] w-[30%] hidden lg:flex lg:flex-col">
            <SideBar />
          </div>
          <div className="flex flex-col">
            <div className="text-[16px] pt-10 lg:ml-20 ml-10">
              <h1 className="text-black font-extrabold pt-5 underline">My Moves</h1>
            </div>
            {data?.map((el, index) => (
              <div key={el.estimate_id} className="ml-10 lg:ml-20 lg:w-[90%] w-[80%]">
                <div className="shadow-sm" data-aos="fade-up">
                  <div className="w-full mt-10 flex justify-between">
                    <MoveDetail title="From" content={el.moving_from} />
                    <div className="bg-neutral-200 hidden lg:flex justify-center items-center w-10 h-10 rounded-full text-[#ee553b]">
                      <ArrowRight />
                    </div>
                    <MoveDetail title="To" content={el.moving_to} />
                    <MoveDetail title="Request#" content={el.estimate_id} contentClass="text-[#ee553b] font-extrabold" />
                  </div>
                  <div className="lg:flex w-full justify-between mt-10 lg:flex-row flex-col gap-2 grid grid-cols-2">
                    <MoveIcon icon={<IoMdHome size={30} />} content={el.property_size} />
                    <MoveIcon icon={<Blocks />} content={el.total_items} />
                    <MoveIcon icon={<FaRoute size={30} />} content={el.distance} />
                    <MoveIcon icon={<TbTruckDelivery size={30} />} content={el.moving_on} />
                    <MoveIcon icon={<FaCheckSquare size={20} className="mt-1" />} content="is flexible" />
                  </div>
                  <div className="flex lg:hidden gap-2 mt-2">
                    <ActionButton text="View move details" link="/details" onClick={() => getIndexForSingleData(index)} />
                    <ActionButton text={el.custom_status || "Quotes Awaiting"} isPrimary />
                  </div>
                  <div className="hidden lg:flex gap-2 mt-2">
                    <ActionButton text="View move details" link="/details" />
                    <ActionButton text={el.custom_status || "Quotes Awaiting"} isPrimary />
                  </div>
                  <Disclaimer />
                  <hr className="mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Moves;
