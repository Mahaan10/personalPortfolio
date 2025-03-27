import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { BsChatLeftDotsFill } from "react-icons/bs";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { AiOutlineGithub, AiOutlineMobile } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { IoBriefcaseSharp } from "react-icons/io5";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      delay: 400,
    });
  });

  return (
    <div className="pt-[50px] px-5" data-aos="fade-down">
      <div className="flex flex-col gap-y-4">
        <div className="flex-col flex gap-y-4 font-bold mb-6">
          <p className="italic text-lg">Contact</p>
          <p className="uppercase text-3xl sm:text-5xl">Get in Touch</p>
        </div>
        <div className="flex flex-col gap-y-60 items-center justify-between">
          <div className="flex flex-col items-center justify-center gap-y-4 lg:gap-x-6 lg:flex-row">
            <div className="border border-dark-grayish-blue/30 dark:border-neutral-200/20 pt-5 flex flex-col w-full min-[450px]:w-auto">
              <div className="flex gap-x-2 ml-2">
                <div className="w-20 h-16 -bg-linear-300 from-20% from-myrtle-green dark:from-indigo-dye to-persian-green dark:to-green-blue to-100%  rounded-lg flex items-center justify-center text-neutral-200 p-4 min-[450px]:p-0">
                  <BsChatLeftDotsFill className="w-5 h-5" />
                </div>
                <div className="flex gap-y-2 flex-col">
                  <h1 className="font-bold text-lg">Chat with me</h1>
                  <p className="opacity-75 text-wrap w-auto min-[450px]:w-[300px]">
                    You can message me on my social media accounts.
                  </p>
                </div>
              </div>
              <div
                className="flex items-center justify-end w-full mt-4"
                data-aos="fade-right"
              >
                <div className="flex gap-x-4 bg-silver dark:bg-rich-black border border-cadet-gray dark:border-dark-grayish-blue border-r-0 border-b-0 rounded-l-full p-2 w-[95%] min-[450px]:w-[330px] font-winky">
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
                  <a
                    href="https://www.instagram.com/mahan__tavakkoli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group contact-link"
                  >
                    <FaInstagram className="text-xl" />
                    <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-300">
                      Instagram
                    </span>
                  </a>
                  <a
                    href="https://twitter.com/@ThisisRez10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group contact-link"
                  >
                    <FaXTwitter className="text-xl" />
                    <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-300">
                      Twitter
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-dark-grayish-blue/30 dark:border-neutral-200/20 pt-5 flex flex-col w-full min-[450px]:w-auto mb-6 min-[450px]:mb-0">
              <div className="flex gap-x-2 ml-2">
                <div className="w-20 h-16 -bg-linear-300 from-20% from-myrtle-green dark:from-indigo-dye to-persian-green dark:to-green-blue to-100%  rounded-lg flex items-center justify-center text-neutral-200 p-4 min-[450px]:p-0">
                  <IoBriefcaseSharp className="w-5 h-5" />
                </div>
                <div className="flex gap-y-2 flex-col">
                  <h1 className="font-bold text-lg">Work with me</h1>
                  <p className="opacity-75 text-wrap w-auto min-[450px]:w-[300px]">
                    Got Ideas? I&apos;ve got the skills. Lets team up.
                  </p>
                </div>
              </div>
              <div
                className="flex items-center justify-end w-full mt-4"
                data-aos="fade-right"
              >
                <div className="flex gap-x-4 bg-silver dark:bg-rich-black border border-cadet-gray dark:border-dark-grayish-blue border-r-0 border-b-0 rounded-l-full p-2 w-[95%] min-[450px]:w-[330px] font-winky">
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
                    href="mailto:mahantavakolicareer@gmail.com"
                    className="group contact-link"
                  >
                    <BiLogoGmail className="text-xl" />
                    <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-300">
                      Gmail
                    </span>
                  </a>
                  <a href="tel:+989981530861" className="group contact-link">
                    <AiOutlineMobile className="text-xl" />
                    <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-300">
                      Mobile
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p>&copy; 2025 Mahan Tavakoli. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
