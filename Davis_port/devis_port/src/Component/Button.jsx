import React from 'react'

const Button = ( {text} ) => {
  return (
    <div className="flex max-[400px]:justify-center max-[400px]:items-center " >
     <button className="text-slate-900 bg-[#fec544]  py-2 px-4 p-3 mt-8 w-36 sm:w-40 md:w-44 lg:w-48 rounded-full ml-1 tracking-wide ">
           {text}
          </button>
  </div>
  )
}

export default Button