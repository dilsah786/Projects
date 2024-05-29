import React from 'react'
import { Bars } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='mb-28'>
    
    <h1 className="flex justify-center items-center m-auto mt-36">
          {" "}
          <Bars
            visible={true}
            height="100"
            width="100"
            color="#ee553b"
            secondaryColor="##ee553b"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />{" "}
        </h1>
        <h1 className='text-center text-xl font-bold'>Data Loading...</h1>

    </div>
  )
}

export default Loader