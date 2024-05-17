import React from "react";

const Title = ({ text }) => {
  let text1 = text.toUpperCase();

  return (
    <div className="text-center relative lg:mb-10 mb-10">
      <h1 className=" relative text-8xl text-gray-500 font-semibold opacity-5 hidden lg:flex justify-center items-center pt-8 ">
        {text1}
      </h1>
      <h1 className="text-3xl text-yellow-500 relative -mt-[85px] lg:pb-10">
        {text1}
      </h1>
    </div>
  );
};

export default React.memo(Title);
