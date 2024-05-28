import {Route, Routes } from 'react-router-dom'
import React from 'react'
import Moves from '../Pages/Moves'
import DetailsPage from '../Pages/DetailsPage'

const Routings = () => {
  return (
    <div> 
    
    <Routes>
        <Route path='/' element={<Moves/>} />
        <Route path="/details" element={<DetailsPage/>} />
    </Routes>
    </div>
  )
}

export default Routings