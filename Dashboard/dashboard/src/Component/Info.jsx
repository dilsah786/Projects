import React from 'react'
import { IoFilterSharp, IoSearchOutline } from "react-icons/io5";
const Info = ( {title,subTitle} ) => {
  return (
    <div className='flex flex-col md:flex-row md:items-center justify-between py-8' >
     <div className='mb-6' >
      <h1 className='text-4xl font-semibold text-black dark:text-gray-300 mb-3' >{title}</h1>
      <span className='text-gray-600 dark:text-gray-500' > {subTitle} </span>
     </div>

     <div className='flex items-center gap-4 md:gap-10 2xl:gap-20' >
       <div className='flex items-center gap-2 border-gray-300 dark:border-gray-600 rounded-md p-2' >
       <IoSearchOutline className='text-xl text-gray-600 dark:text-gray-500' />

        <input placeholder='Seacrh now...' className='bg-transparent outline-none text-gray-700 dark:text-gray-500  min-w-full '  />
       </div>
       <button className='flex items-center gap-2 bg-black dark:bg-violet-800 py-2 px-4 rounded-md text-white hover:bg-slate-500 hover:text-black hover:font-semibold' >
       <IoFilterSharp size={24}  />
        <span className='text-base'>Filter By</span>
       </button>
     </div>
    </div>
  )
}

export default Info