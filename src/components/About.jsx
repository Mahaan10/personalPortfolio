import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { AiOutlineMobile, AiOutlineDownload } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { BsPerson, BsBullseye } from "react-icons/bs";
import { Link } from "react-router";

function About() {
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
      className="font-ibm flex pt-[60px] lg:flex-row flex-col gap-y-4 lg:gap-y-0"
      data-aos="fade-down"
    >
      <div className="lg:w-[42%] flex flex-col items-center space-y-2 justify-center">
        <div className="">
          <img
            src="/images/bulb-on.PNG"
            className="rotate-90 rounded-full w-52 h-52"
            alt=""
          />
        </div>
        <p className="uppercase lg:text-[45px] text-3xl dark:number-stroke-dark number-stroke font-bold mt-7">
          Mahan Tavakoli
        </p>
        <p className="lg:text-2xl text-lg mb-5">
          <span className="font-bold mr-1.5">Frontend Developer</span>
          based in <span className="font-bold">Iran</span>
        </p>
        <button className="btn">
          <Link className="flex items-center justify-between gap-x-4">
            <span>Download CV</span>
            <AiOutlineDownload className="w-5 h-5" />
          </Link>
        </button>
      </div>
      <div
        className="lg:w-[58%] flex flex-col ml-6 mb-4 lg:mb-0"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <div className="max-w-[600px] mb-4">
          <p>
            I&apos;m a frontend developer based in Iran, passionate about
            building responsive and dynamic web applications. I specialize in
            front-end implementation, focusing on clean, maintainable code.
            Always eager to learn and improve, I aim to create seamless user
            experiences with every project.
          </p>
        </div>
        <div className="flex font-bold lg:items-center gap-x-6 mb-8 flex-col lg:flex-row space-y-1.5 lg:space-y-0">
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center gap-x-2">
              <AiOutlineMobile className="w-5 h-5" />
              <span className="text-lg">+98 998 153 0861</span>
            </div>
            <div className="flex items-center gap-x-2">
              <FaRegEnvelope className="w-5 h-4 mt-1" />
              <span className="text-lg">mahantavakolicareer@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center gap-x-2">
              <BsPerson className="w-5 h-5" />
              <span className="text-lg">Mahan Tavakoli</span>
            </div>
            <div className="flex items-center gap-x-2">
              <BsBullseye className="w-5 h-4 mt-1" />
              <span className="text-lg">Bandar-e Anzali, Iran</span>
            </div>
          </div>
        </div>
        <div className="border-b opacity-15 border-dark-grayish-blue dark:border-neutral-200 mr-10"></div>
        <div className="flex items-center gap-x-6 mt-10">
          <div className="flex flex-col w-[50%]">
            <div className="flex">
              <span className="text-5xl pr-3 dark:number-stroke-dark number-stroke">
                2+
              </span>
              <div className="flex flex-col font-bold text-lg">
                <span>Years</span>
                <span>experience...</span>
              </div>
            </div>
            <div className="mt-5 font-light text-lg">
              <p>
                Hello there! My name is{" "}
                <span className="dark:text-blue-munsell text-caribbean-current">
                  Mahan Tavakoli
                </span>
                . I&apos;m a frontend developer, and Im very passionate and
                dedicated to my work.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[50%]">
            <div className="flex">
              <span className="text-5xl pr-3 number-stroke">5+</span>
              <div className="flex flex-col font-bold text-lg">
                <span>Projects</span>
                <span>included...</span>
              </div>
            </div>
            <div className="mt-5 font-light text-lg">
              <p>
                With 2+ years experience as a professional developer, I have
                acquired the skills to make your project a success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
