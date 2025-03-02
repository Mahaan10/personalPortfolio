import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LuZap } from "react-icons/lu";

export default function DarkModeToggles() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex space-x-6 items-start px-5 pt-2 justify-start">
      {/* Circuit Board Toggle */}
      <motion.button
        onClick={() => setDarkMode(!darkMode)}
        className="relative flex flex-col items-center cursor-pointer"
        whileTap={{ scale: 1.1 }}
      >
        <motion.div
          className={`rounded-full transition-all p-2 text-4xl  ${
            darkMode
              ? "text-blue-500 shadow-[0px_0px_20px_4px_rgba(88,223,255,0.7)]"
              : "text-rich-black/75 bg-platinum border border-dark-grayish-blue shadow-[0px_0px_20px_4px] shadow-rich-black"
          }`}
        >
          <LuZap />
        </motion.div>
      </motion.button>
    </div>
  );
}
