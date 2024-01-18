import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const Counter = () => {
    const [change,setChange] = useState(false);

    const counterRef = useRef(null);

    let count = 1;

     
    const handleCounter  = (val) =>{
        counterRef.current += val;

       console.log(counterRef.current);

    }



  return (
    <div>
    <h1>Counter App </h1>
    <button onClick={()=>handleCounter(1)} >Inc</button>
    <button onClick={()=>handleCounter(-1)} >Dec</button>
    <button>{counterRef.current}</button>

    <button onClick={()=>setChange(!change)} >Update</button>

    </div>
  )
}

export default Counter