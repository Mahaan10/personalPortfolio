import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router";
import { FaRegEnvelope } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      delay: 400,
    });
  }, []);

  return (
    <div className="container flex font-ibm ml-4" data-aos="fade-down">
      <div className="pt-[100px]">
        <h1
          className="lg:text-7xl text-4xl font-extrabold uppercase mb-4"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          My name
          <br />
          is Mahan
          <span className="dark:text-stroke-dark text-stroke">
            <br />
            Tavakoli
          </span>
        </h1>
        <div className="lg:text-3xl text-xl mb-10">
          <span className="font-extrabold mr-1.5">Frontend Developer</span>
          based in
          <span className="font-extrabold ml-1.5">Iran</span>
        </div>
        <div className="my-5">
          <button className="btn">
            <Link
              className="flex items-center justify-between gap-x-4"
              to="/contact"
            >
              <span>Get in Touch</span>
              <HiArrowUpRight className="w-4 h-4" />
            </Link>
          </button>
        </div>
        <div className="flex items-center justify-between flex-wrap mt-10 font-bold gap-y-1.5 lg:gap-y-0">
          <div className="flex items-center justify-center gap-x-2">
            <AiOutlineMobile className="w-5 h-5" />
            <span className="text-lg">+98 911 185 6900</span>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <FaRegEnvelope className="w-4 h-4 mt-1" />
            <span className="text-lg">reza.mahan10@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="">
          <img
            className="bg-linear-to-r from-yellow-200 to-amber-600 rounded-full w-96 h-96"
            src="/images/Me_1-removebg-preview.png"
            alt=""
          />
        </div>
        {/* // background image doesn't work */}
        <div
          className="flex flex-col items-center justify-center gap-y-12"
          data-aos="zoom-in-up"
        >
          <div
            className="w-0.5 h-16 border-r border-dark-grayish-blue/60 dark:border-dark-grayish-blue opacity-60"
            data-aos="fade-right"
            data-aos-duration="1500"
          ></div>
          <ul className="flex flex-col gap-y-2 relative">
            <li>
              <Link className="group contact-homePage-link -top-11">
                <FaInstagram className="text-xl" />
                <span className="absolute left-3 font-bold hidden group-hover:block transition-opacity text-sm duration-700">
                  Instagram
                </span>
              </Link>
            </li>
            <li>
              <Link className="group contact-homePage-link top-2">
                <FaXTwitter className="text-xl" />
                <span className="absolute left-3 font-bold hidden group-hover:block transition-opacity text-sm duration-700">
                  Twitter
                </span>
              </Link>
            </li>
          </ul>
          <div
            className="w-0.5 h-16 border-r border-dark-grayish-blue/60 dark:border-dark-grayish-blue opacity-60 mt-1"
            data-aos="fade-left"
            data-aos-duration="1500"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
