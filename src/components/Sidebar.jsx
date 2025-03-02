import { Link } from "react-router";
import CustomNavlink from "./CustomNavlink";
import { AiOutlineGithub } from "react-icons/ai";
import { FaTelegram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import DarkModeToggle from "./ThemeMode";

function Sidebar() {
  return (
    <div className="w-[325px] h-screen bg-silver dark:bg-rich-black flex flex-col transition-all duration-700 ease-in-out font-ibm text-lg">
      <div className="pt-[50px] px-7 pb-7 font-header-title ">
        <Link to="/" className="text-4xl">
          Mahan&apos;s Portfolio
        </Link>
      </div>
      <DarkModeToggle />
      <ul className="pt-10 flex-1/2 pl-3 font-semibold uppercase">
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
            <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-300 hover:pr-1">
              Github
            </span>
          </Link>
          <Link className="group contact-link">
            <FaLinkedinIn className="text-xl" />
            <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-300">
              LinkedIn
            </span>
          </Link>
          <Link className="group contact-link">
            <FaTelegram className="text-xl" />
            <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-300">
              Telegram
            </span>
          </Link>
          <Link className="group contact-link">
            <FaWhatsapp className="text-xl" />
            <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-300">
              WhatsApp
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
