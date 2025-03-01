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
    <div
      className="relative container flex font-ibm flex-col pt-[100px] pl-4"
      data-aos="fade-down"
    >
      <div className="w-[58%]">
        <h1
          className="text-7xl font-extrabold uppercase mb-4"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          My name
          <br />
          is Mahan
          <span className="text-stroke">
            <br />
            Tavakoli...
          </span>
        </h1>
        <div className="text-3xl mb-10">
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
        <div className="flex items-center justify-between flex-wrap w-[75%] mt-10 font-bold">
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
      <div className="w-[42%]">
        {/* Home Page Image!!!!!! */}
        <div
          className="absolute top-0 bottom-0 right-12 flex items-center justify-center"
          data-aos="zoom-in-up"
        >
          <div
            className="absolute top-36 left-3 w-0.5 h-16 border-r border-dark-grayish-blue opacity-60"
            data-aos="fade-right"
            data-aos-duration="1500"
          ></div>
          <ul className=" mx-auto flex flex-col gap-y-2">
            <li className="mr-3 outline-0">
              <Link className="contact-homePage-link w-8 h-8 bg-transparent text-neutral-200 border hover:bg-neutral-200 hover:text-rich-black">
                <FaInstagram className="w-4 h-4" />
              </Link>
            </li>
            <li className="mr-3 outline-0">
              <Link className="contact-homePage-link w-8 h-8 bg-transparent text-neutral-200 border hover:bg-neutral-200 hover:text-rich-black">
                <FaXTwitter className="w-4 h-4" />
              </Link>
            </li>
          </ul>
          <div
            className="absolute bottom-36 left-3 w-0.5 h-16 border-r opacity-60 border-dark-grayish-blue"
            data-aos="fade-left"
            data-aos-duration="1500"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
