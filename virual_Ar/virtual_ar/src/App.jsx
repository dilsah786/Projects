import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import HeroSection from "./Pages/HeroSection";
import Feature from "./Pages/Feature";
import Workflow from "./Pages/Workflow";
import Pricing from "./Pages/Pricing";
import Testimonial from "./Pages/Testimonial";
import Footer from "./Component/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Feature />
        <Workflow />
        <Pricing/>
        <Testimonial/>
        <Footer/>
      </div>
    
    </main>
  );
}

export default App;
