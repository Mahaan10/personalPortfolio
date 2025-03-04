import { useState, useEffect } from "react";
import { PiSunFill } from "react-icons/pi";
import { GoMoon } from "react-icons/go";

export default function DarkModeToggles() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "light"
  );

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="relative flex flex-col ">
      <div className="absolute -left-10 -top-2 bg-platinum text-rich-black w-16 hover:w-28 transition-all duration-700 hover:left-0 rounded-r-md">
        <button
          className="w-full flex items-center justify-center cursor-pointer"
          onClick={() => setDarkMode("light")}
        >
          Light
          <span className="px-1">
            <PiSunFill className="w-4 h-4" />
          </span>
        </button>
      </div>
      <div className="absolute -left-10 top-5 bg-sky-950 text-platinum w-16 hover:w-28 transition-all duration-700 hover:left-0 rounded-r-md">
        <button
          className="w-full flex items-center justify-center cursor-pointer"
          onClick={() => setDarkMode("dark")}
        >
          Dark
          <span className="px-1">
            <GoMoon className="w-4 h-4" />
          </span>
        </button>
      </div>
    </div>
  );
}
