import { Link } from "react-router";
import CustomNavlink from "./CustomNavlink";
import { AiOutlineGithub } from "react-icons/ai";
import { FaTelegram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

function Sidebar() {
  return (
    <div className="w-[285px] h-screen bg-black-russian flex flex-col transition-all duration-700 ease-in-out font-ibm text-lg">
      <div className="pt-[50px] px-7 pb-7 font-header-title ">
        <Link to="/" className="text-4xl">
          Mahan&apos;s Portfolio
        </Link>
      </div>
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
      <ul className="p-8 flex flex-wrap">
        <li className="mr-3 outline-0">
          <Link className="contact-link w-10 h-10 bg-neutral-200 text-black-russian hover:bg-transparent hover:text-neutral-200 hover:border">
            <AiOutlineGithub className="w-5 h-5" />
          </Link>
        </li>
        <li className="mr-3 outline-0">
          <Link className="contact-link w-10 h-10 bg-neutral-200 text-black-russian hover:bg-transparent hover:text-neutral-200 hover:border">
            <FaLinkedinIn className="w-5 h-5" />
          </Link>
        </li>
        <li className="mr-3 outline-0">
          <Link className="contact-link w-10 h-10 bg-neutral-200 text-black-russian hover:bg-transparent hover:text-neutral-200 hover:border">
            <FaTelegram className="w-5 h-5" />
          </Link>
        </li>
        <li className="mr-3 outline-0">
          <Link className="contact-link w-10 h-10 bg-neutral-200 text-black-russian hover:bg-transparent hover:text-neutral-200 hover:border">
            <FaWhatsapp className="w-5 h-5" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
