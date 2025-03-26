import { Link } from "react-router";
import CustomNavlink from "./CustomNavlink";
import { AiOutlineGithub } from "react-icons/ai";
import { FaTelegram, FaLinkedinIn, FaWhatsapp, FaBars } from "react-icons/fa6";
import DarkModeToggle from "./ThemeMode";
import { useState, useEffect } from "react";

function Sidebar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-center justify-between fixed top-2 z-50  w-full bg-platinum dark:bg-rich-black py-1.5">
        <div className="font-header-title pl-4">
          <Link to={{ hash: "#home" }} className="sm:text-4xl text-xl">
            Mahan&apos;s Portfolio
          </Link>
        </div>
        <div className="pr-8">
          <button
            className="p-1 bg-eerie-black dark:bg-silver text-silver dark:text-rich-black rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`md:w-[325px] w-[284px] flex fixed top-0 bottom-0 lg:left-0 z-40 h-screen bg-silver dark:bg-rich-black flex-col transition-all duration-700 ease-in-out font-ibm text-lg ${
          isOpen ? "translate-x-0 left-0" : "-translate-x-full -left-96"
        }`}
      >
        <div className="pt-10 !text-3xl px-7 pb-7 font-header-title lg:flex hidden">
          <CustomNavlink to="#home">Mahan&apos;s Portfolio</CustomNavlink>
        </div>
        <DarkModeToggle />
        <ul className="pt-16 flex-1/2 pl-3 font-semibold uppercase">
          <li>
            <CustomNavlink to="#home" activeSection={activeSection}>
              Home
            </CustomNavlink>
          </li>
          <li>
            <CustomNavlink to="#about" activeSection={activeSection}>
              About
            </CustomNavlink>
          </li>
          <li>
            <CustomNavlink to="#services" activeSection={activeSection}>
              Services
            </CustomNavlink>
          </li>
          <li>
            <CustomNavlink to="#portfolio" activeSection={activeSection}>
              Portfolio
            </CustomNavlink>
          </li>
          <li>
            <CustomNavlink to="#contact" activeSection={activeSection}>
              Contact
            </CustomNavlink>
          </li>
        </ul>
        <div className="ml-5"></div>
        <div className="flex items-center justify-center py-4 w-full">
          <div className="flex space-x-4 bg-transparent border border-r-0 dark:border-dark-grayish-blue border-cadet-gray rounded-l-full p-2 w-full">
            <a
              className="group contact-link"
              href="https://github.com/Mahaan10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub className="text-xl" />
              <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-700 hover:pr-1">
                Github
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/mahan-tavakoli"
              target="_blank"
              rel="noopener noreferrer"
              className="group contact-link"
            >
              <FaLinkedinIn className="text-xl" />
              <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-700">
                LinkedIn
              </span>
            </a>
            <a
              href="https://t.me/MaahanTavakoli"
              target="_blank"
              rel="noopener noreferrer"
              className="group contact-link"
            >
              <FaTelegram className="text-xl" />
              <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-700">
                Telegram
              </span>
            </a>
            <a
              href="https://wa.me/+989981530861"
              target="_blank"
              rel="noopener noreferrer"
              className="group contact-link"
            >
              <FaWhatsapp className="text-xl" />
              <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-700">
                WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
