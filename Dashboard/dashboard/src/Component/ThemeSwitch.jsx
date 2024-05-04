import React, { useState } from "react";
import useStore from "../store";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";


const ThemeSwitch = () => {
  const { theme, setTheme } = useStore((state) => state);
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  console.log(theme);

  return (
    <div
    className={`switch ${isDarkMode ? "light" : "dark"}`}
    onClick={toggleTheme}
  >
    <div className={`ball ${isDarkMode ? "dark" : "light"}`}>
      <button className={`${theme==="dark" ? "text-white ": "text-gray-600"} border rounded-md `} > {theme==="dark"?<CiLight size={24} className="animate-spin" />:<MdDarkMode className="animate-spin" size={24} />} </button>
    </div>
  </div>
  );
};

export default ThemeSwitch;
