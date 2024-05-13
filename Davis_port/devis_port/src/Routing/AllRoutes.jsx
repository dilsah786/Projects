import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HeroSection from '../Pages/HeroSection'
import About from '../Pages/About'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<HeroSection/>} />
        <Route path='/about' element={<About/>} />
    </Routes>
    </div>
  )
}

export default AllRoutes