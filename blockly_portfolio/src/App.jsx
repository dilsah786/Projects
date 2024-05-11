import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  const [theme,setTheme] = useState(null);

  useEffect(()=>{
    if(window.matchMedia(`(prefers-color-scheme:dark)`).matches){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  },[])

useEffect(()=>{
  if(theme==="dark"){
    document.documentElement.classList.add("dark");
  }else{
    document.documentElement.classList.remove("dark")
  }
},[theme])

const handleTheme = ()=>{
  setTheme(theme==="dark" ? "light" : "dark")
}

localStorage.setItem("theme",theme)
 
  return (
    <main className={`bg-white dark:bg-black w-full`}>
      <Navbar handleTheme={handleTheme} />
      <Home />
      <About />
    </main>
  );
}

export default App;
