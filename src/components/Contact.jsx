import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { Link } from "react-router";
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
    <div className="font-ibm pt-[50px] pl-5 flex" data-aos="fade-down">
      <div className="flex flex-col gap-y-4">
        <div className="flex-col flex gap-y-4 font-bold mb-6">
          <p className="italic text-lg">Contact</p>
          <p className="uppercase text-5xl">Get in Touch</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-center justify-center gap-x-6">
          <div className="flex flex-col">
            <div className="border border-dark-grayish-blue/30 dark:border-neutral-200/20 pl-5 pt-5 flex">
              <div className="w-20 h-16 -bg-linear-300 from-20% from-myrtle-green dark:from-indigo-dye to-persian-green dark:to-green-blue to-100%  rounded-lg flex items-center justify-center text-neutral-200">
                <BsChatLeftDotsFill className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="ml-6 flex gap-y-2 flex-col">
                  <h1 className="font-bold text-lg">Chat with me</h1>
                  <p className="opacity-75 text-wrap w-[300px]">
                    You can message me on my social media accounts.
                  </p>
                </div>
                <div
                  className="flex items-center justify-center w-full pt-4"
                  data-aos="fade-right"
                >
                  <div className="flex space-x-4 bg-silver dark:bg-rich-black border border-cadet-gray dark:border-dark-grayish-blue border-r-0 border-b-0 rounded-l-full p-2 w-[330px]">
                    <Link className="group contact-link">
                      <FaTelegram className="text-xl" />
                      <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-300 hover:pr-1">
                        Telegram
                      </span>
                    </Link>
                    <Link className="group contact-link">
                      <FaWhatsapp className="text-xl" />
                      <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-300">
                        WhatsApp
                      </span>
                    </Link>
                    <Link className="group contact-link">
                      <FaInstagram className="text-xl" />
                      <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-300">
                        Instagram
                      </span>
                    </Link>
                    <Link className="group contact-link">
                      <FaXTwitter className="text-xl" />
                      <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-300">
                        Twitter
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border border-dark-grayish-blue/30 dark:border-neutral-200/20 pl-5 pt-5 flex">
              <div className="w-20 h-16 -bg-linear-300 from-20% from-myrtle-green dark:from-indigo-dye to-persian-green dark:to-green-blue to-100%  rounded-lg flex items-center justify-center text-neutral-200">
                <IoBriefcaseSharp className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="ml-6 flex gap-y-2 flex-col">
                  <h1 className="font-bold text-lg">Work with me</h1>
                  <p className="opacity-75 text-wrap w-[300px]">
                    Got Ideas? I&apos;ve got the skills. Lets team up.
                  </p>
                </div>
                <div
                  className="flex items-center justify-center pt-4 w-full"
                  data-aos="fade-right"
                >
                  <div className="flex space-x-4 bg-silver dark:bg-rich-black border border-cadet-gray dark:border-dark-grayish-blue border-r-0 border-b-0 rounded-l-full p-2 w-[330px]">
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
                      <BiLogoGmail className="text-xl" />
                      <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-300">
                        Gmail
                      </span>
                    </Link>
                    <Link className="group contact-link">
                      <AiOutlineMobile className="text-xl" />
                      <span className="absolute left-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-300">
                        Mobile
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
