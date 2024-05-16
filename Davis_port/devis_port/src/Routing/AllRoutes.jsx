import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HeroSection from '../Pages/HeroSection'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Skills from '../Pages/Skills'
import Resume from '../Pages/Resume'
import Portfolio from '../Pages/Portfolio'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<HeroSection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/resume' element={<Resume/>} />
         
    </Routes>
    </div>
  )
}

export default AllRoutes