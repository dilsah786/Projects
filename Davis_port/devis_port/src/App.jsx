import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import { Home } from "lucide-react";
import About from "./Pages/About";
import HeroSection from "./Pages/HeroSection";
import AllRoutes from "./Routing/AllRoutes";
import AOS from "aos";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-4/5 flex flex-col justify-center items-center m-auto">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
