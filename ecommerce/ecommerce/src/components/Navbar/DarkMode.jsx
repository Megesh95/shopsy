import { useState, useEffect } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // html element

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden dark-mode-toggle">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={LightButton}
          alt="Light Mode"
          onClick={toggleTheme}
          className={`w-10 h-10 cursor-pointer transition-all duration-300 absolute
            ${theme === "dark" ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}`}
        />
        <img
          src={DarkButton}
          alt="Dark Mode"
          onClick={toggleTheme}
          className={`w-10 h-10 cursor-pointer transition-all duration-300 absolute
            ${theme === "dark" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        />
      </div>
    </div>
  );
};

export default DarkMode;
