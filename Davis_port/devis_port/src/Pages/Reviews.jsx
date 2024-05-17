import React, { useEffect } from "react";
import Title from "../Component/Title";
import { reviewItems } from "../utils/dataUtils";
import Aos from "aos";
import 'aos/dist/aos.css';

const Reviews = () => {

    useEffect(()=>{
      Aos.init();
    },[])

  return (
    <div className=" mt-20 pb-12 pt-12">
      <Title text={"reviews"} />
      <div className="w-4/5 m-auto ">
        <div className="m-auto grid min-[600px]:grid-cols-2 lg:grid-cols-3  " >
        {reviewItems?.map((rev, index) => {
          return (
            <div key={index} className="flex flex-col justify-center items-center m-4 bg-gray-900 p-4 rounded-lg hover:scale-105 cursor-pointer" data-aos="zoom-in" >
              <div className= "text-center rounded-lg" >{rev.review}</div>
              <div className="text-center mt-4 flex flex-col justify-center items-center">
                <img src={rev.img} />
                <h1> {rev.name} </h1>
                <p> {rev.position} </p>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Reviews);
