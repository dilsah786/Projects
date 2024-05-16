import React, { useEffect } from "react";
import Title from "../Component/Title";
import { blogsItems } from "../utils/dataUtils";
import AOS from "aos";
import 'aos/dist/aos.css';

const Blogs = () => {

    useEffect(()=>{
        AOS.init();
      },[])
  

  return (
    <div className="bg-[#0a101e] mt-20 pb-12 ">
      <Title text={"BLOG"} />
      <div className="w-4/5 m-auto min-[600px]:grid-cols-2 grid lg:grid-cols-3 gap-4 ">
        {blogsItems?.map((blog, index) => {
          return (
            <div className="flex flex-col mb-6 justify-center items-center text-center " data-aos="zoom-in" >
              <div className="cursor-pointer">
                {" "}
                <img
                  className="hover:scale-105  transition duration-300"
                  src={blog.img}
                />{" "}
              </div>
              <div className="flex flex-col  mt-4">
                <div className="flex  justify-start lg:pr-4 gap-4 mb-2">
                  <p className="lg:pl-3">
                    By: <span className="text-yellow-500"> {blog.author}</span>
                  </p>
                  <p className="border-r-2"></p>
                  <p className="text-yellow-500"> {blog.date} </p>
                </div>
                <div>
                  <p className="text-2xl hover:text-yellow-300">
                    {" "}
                    {blog.description}{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
