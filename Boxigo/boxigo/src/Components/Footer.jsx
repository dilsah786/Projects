import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {

    useEffect(()=>{
       AOS.init();
    },[])



  return (
    <div className='w-[90%]  m-auto ' data-aos="zoom-in" data-aos-duration="1000">
     <div className='mb-10 lg:ml-20' >
        <div className='bg-[#fef8f6] flex lg:flex-row lg:justify-around flex-col justify-center items-center lg:p-4'>
            <div className='pb-4' >
                <h1 className='text-3xl font-bold'><span className='text-[#ee553b]'>Boxigo</span> - Move <br/> Made <span className='text-[#ee553b]' >Simple</span></h1>
            </div>
            <div className='flex flex-col pb-2'> <h1 className='text-black font-bold text-xl text-center' >Phone</h1> <p className='text-gray-800 text-xl font-semibold' >+91 88844 48117</p> </div>
            <div className='pb-4'> <h1 className='text-black font-bold text-xl text-center' >Email</h1> <p className='text-gray-800 text-xl font-medium' >support@boxigo.in</p> </div>
            <div className='pb-4'> <button className='bg-[#ee553b] text-lg px-8 text-white rounded-md font-semibold p-3 hover:bg-neutral-100 hover:border hover:border-[#ee553b] hover:text-[#ee553b]' >Get Instant Quote</button> </div>
        </div>
     </div>
    </div>
  )
}

export default Footer