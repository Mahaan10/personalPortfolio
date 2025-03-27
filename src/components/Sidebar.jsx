import CustomNavlink from "./CustomNavlink";
import { AiOutlineGithub } from "react-icons/ai";
import { FaTelegram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { TbMenuDeep } from "react-icons/tb";
import DarkModeToggle from "./ThemeMode";
import { useState, useEffect } from "react";
import useOutsideClick from "./useOutsideClick";

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

  const sidebarRef = useOutsideClick(() => {
    if (isOpen && window.innerWidth < 1024) {
      setIsOpen(false);
    }
  });

  const handleNavLinkClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-center justify-end fixed top-2 z-50 w-full">
        <div className="mr-5 bg-gray-300 rounded-xl p-2">
          <button
            className="p-1 bg-gray-950 text-platinum rounded cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <TbMenuDeep className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`md:w-[325px] w-[284px] flex fixed top-0 bottom-0 lg:left-0 z-40 h-screen bg-silver dark:bg-rich-black flex-col transition-all duration-700 ease-in-out text-lg font-winky ${
          isOpen ? "translate-x-0 left-0" : "-translate-x-full -left-96"
        }`}
        ref={sidebarRef}
      >
        <div className="pt-10 text-2xl lg:text-3xl items-center justify-center w-full flex">
          <CustomNavlink to="#home">Mahan&apos;s Portfolio</CustomNavlink>
        </div>
        <DarkModeToggle />
        <ul className="flex-1/2 pl-3 font-semibold uppercase mt-28">
          <li>
            <CustomNavlink
              to="#home"
              activeSection={activeSection}
              onClose={handleNavLinkClick}
            >
              Home
            </CustomNavlink>
          </li>
          <li>
            <CustomNavlink
              to="#about"
              activeSection={activeSection}
              onClose={handleNavLinkClick}
            >
              About
            </CustomNavlink>
          </li>
          <li>
            <CustomNavlink
              to="#services"
              activeSection={activeSection}
              onClose={handleNavLinkClick}
            >
              Services
            </CustomNavlink>
          </li>
          <li>
            <CustomNavlink
              to="#portfolio"
              activeSection={activeSection}
              onClose={handleNavLinkClick}
            >
              Portfolio
            </CustomNavlink>
          </li>
          <li>
            <CustomNavlink
              to="#contact"
              activeSection={activeSection}
              onClose={handleNavLinkClick}
            >
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
