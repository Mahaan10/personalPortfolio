import { Link } from "react-router";
import CustomNavlink from "./CustomNavlink";
import { AiOutlineGithub } from "react-icons/ai";
import { FaTelegram, FaLinkedinIn, FaWhatsapp, FaBars } from "react-icons/fa6";
import DarkModeToggle from "./ThemeMode";
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 right-8 z-50 p-2 bg-eerie-black dark:bg-silver text-silver dark:text-rich-black rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars className="w-5 h-5" />
      </button>
      <div
        className={`md:w-[325px]  h-screen bg-silver dark:bg-rich-black flex flex-col transition-all duration-700 ease-in-out font-ibm text-lg ${
          isOpen ? " translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-10 px-7 pb-7 font-header-title ">
          <Link to="/" className="text-4xl">
            Mahan&apos;s Portfolio
          </Link>
        </div>
        <DarkModeToggle />
        <ul className="pt-10 flex-1 pl-3 font-semibold uppercase space-y-4">
          <li>
            <CustomNavlink to="/">Home</CustomNavlink>
          </li>
          <li>
            <CustomNavlink to="/about">About</CustomNavlink>
          </li>
          <li>
            <CustomNavlink to="/services">Services</CustomNavlink>
          </li>
          <li>
            <CustomNavlink to="/portfolio">Portfolio</CustomNavlink>
          </li>
          <li>
            <CustomNavlink to="/contact">Contact</CustomNavlink>
          </li>
        </ul>
        <div className="ml-5"></div>
        <div className="flex items-center justify-center py-4 w-full">
          <div className="flex space-x-4 bg-transparent border border-r-0 dark:border-dark-grayish-blue border-cadet-gray rounded-l-full p-2 w-full">
            <Link className="group contact-link">
              <AiOutlineGithub className="text-xl" />
              <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-700 hover:pr-1">
                Github
              </span>
            </Link>
            <Link className="group contact-link">
              <FaLinkedinIn className="text-xl" />
              <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-700">
                LinkedIn
              </span>
            </Link>
            <Link className="group contact-link">
              <FaTelegram className="text-xl" />
              <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-700">
                Telegram
              </span>
            </Link>
            <Link className="group contact-link">
              <FaWhatsapp className="text-xl" />
              <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-700">
                WhatsApp
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
