import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSun, FaMoon } from "react-icons/fa";

const CircularToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    AOS.init({ duration: 500 });
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      data-aos="flip-left"
      className="relative w-14 h-14 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center p-2 transition-all duration-500 shadow-lg hover:scale-105"
    >
      <span className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-gray-600 dark:to-gray-900 rounded-full blur-md"></span>
      {theme === "light" ? (
        <FaSun className="w-8 h-8 text-yellow-500 relative z-10" />
      ) : (
        <FaMoon className="w-8 h-8 text-white relative z-10" />
      )}
    </button>
  );
};

export default CircularToggle;
