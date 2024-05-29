import React, { useContext } from 'react'
import { DataContext } from '../ContextAPi/DataContext'

const Accordion = () => {

    const {singleData}  = useContext(DataContext)

    console.log(singleData);

  return (
    <div className='flex flex-row' >
      {singleData.items?.inventory?.map((item,index)=>{
       return <div>
            <div className='border border-red-600'> {item.displayName} {index} </div>
           
            <div> {item.category?.map((el)=>{
                return <div> {el.displayName} </div>
            })} </div>
        </div>
      })}
    </div>
  )
}

export default Accordion