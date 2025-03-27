import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
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
    <div className="flex justify-between ml-4" data-aos="fade-down">
      <div className="flex flex-col pt-[60px] z-50">
        <h1
          className="lg:text-7xl sm:text-4xl text-2xl font-extrabold mb-4"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          My Name
          <br />
          is {/* The way and colors need to be changed!!! */}
          <span>
            <span className="nameDrop">M</span>
            <span className="nameDrop">a</span>
            <span className="nameDrop">h</span>
            <span className="nameDrop">a</span>
            <span className="nameDrop">n</span>
          </span>
          <span className="text-stroke">
            <br />
            Tavakoli
          </span>
        </h1>
        <div className="lg:text-3xl sm:text-2xl text-base mb-5 mt-4 w-44 min-[450px]:w-auto">
          <span className="font-extrabold mr-1.5">Frontend Developer</span>
          based in
          <span className="font-extrabold ml-1.5">Iran</span>
        </div>
        <div className="mt-16 min-[450px]:mt-5">
          <button className="btn">
            {/* Link need to be solved! */}
            <a
              className="flex items-center justify-between gap-x-4"
              href="#contact"
            >
              <span>Get in Touch</span>
              <HiArrowUpRight className="w-4 h-4" />
            </a>
          </button>
        </div>
        <div className="sm:flex sm:justify-between sm:flex-wrap sm:flex-col-reverse lg:gap-x-8 lg:flex-row mt-10 font-bold gap-y-1.5 lg:gap-y-0 hidden">
          <div className="flex items-center gap-x-1">
            <AiOutlineMobile className="w-5 h-5" />
            <span className="text-lg">+98 998 153 0861</span>
          </div>
          <div className="flex items-center gap-x-3">
            <FaRegEnvelope className="w-4 h-4 mt-1" />
            <span className="text-lg">mahantavakolicareer@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="-bg-linear-90 from-10% to-70% from-myrtle-green to-persian-green dark:from-eerie-black dark:to-indigo-dye w-80 h-80 sm:w-96 sm:h-96 rounded-full absolute right-0 top-0 bottom-0  sm:mr-[155px] lg:mt-4 mt-8 transition-colors duration-700"></div>

        {/* <div
          className="bg-[url('/images/20250310_032629edit.png')] absolute right-0 top-0 bottom-0  sm:w-[650px] h-screen w-96 bg-cover object-contain bg-no-repeat sm:bg-center rounded-full"
          data-aos="fade-right"
          data-aos-duration="1500"
        ></div> */}
        <div
          className="bg-[url('/images/20250310_032629edit.png')] absolute sm:right-0 -right-52 top-0 bottom-0 w-[650px] h-screen bg-contain bg-no-repeat bg-center rounded-full"
          data-aos="fade-right"
          data-aos-duration="1500"
        ></div>
        <div
          className="space-y-12 sm:flex sm:flex-col hidden"
          data-aos="zoom-in-up"
        >
          <div
            className="w-0.5 h-16 border-r border-dark-grayish-blue/60 dark:border-dark-grayish-blue opacity-60 absolute right-[60px] -top-16 bottom-0"
            data-aos="fade-right"
            data-aos-duration="1500"
          ></div>
          <ul className="flex flex-col gap-y-2 relative font-winky">
            <li>
              <a
                href="https://www.instagram.com/mahan__tavakkoli"
                target="_blank"
                rel="noopener noreferrer"
                className="group contact-homePage-link top-1/2"
              >
                <FaInstagram className="text-xl" />
                <span className="absolute left-3 font-bold hidden group-hover:block transition-opacity text-sm duration-700">
                  Instagram
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/@ThisisRez10"
                target="_blank"
                rel="noopener noreferrer"
                className="group contact-homePage-link top-14"
              >
                <FaXTwitter className="text-xl" />
                <span className="absolute left-3 font-bold hidden group-hover:block transition-opacity text-sm duration-700">
                  Twitter
                </span>
              </a>
            </li>
          </ul>
          <div
            className="w-0.5 h-16 border-r border-dark-grayish-blue/60 dark:border-dark-grayish-blue opacity-60 absolute right-[60px] top-[108px] bottom-0"
            data-aos="fade-left"
            data-aos-duration="1500"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
