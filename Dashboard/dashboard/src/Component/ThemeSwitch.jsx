import React, { useState } from "react";
import useStore from "../store";

const ThemeSwitch = () => {
  const { theme, setTheme } = useStore((state) => state);
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  console.log(theme);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      className={`switch ${isDarkMode ? "light" : "dark"}`}
      onClick={toggleTheme}
    >
      <div className={`ball ${isDarkMode ? "dark" : "light"}`}>
        {" "}
        <button className="text-black dark:text-white ">
          {" "}
          {theme === "dark" ? "Change to light" : "Change to dark"} Mode{" "}
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitch;
