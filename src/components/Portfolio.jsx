import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    title: "Inventory Management System",
    features: "React JS + TailwindCSS",
    description: "",
    img: "images/Inventory.png",
    demo: "https://inventory-rouge-rho.vercel.app",
    repo: "https://github.com/Mahaan10/Inventory",
  },
  {
    id: 2,
    title: "Note App",
    features: "React JS + TailwindCSS",
    description: "",
    img: "images/NoteApp.png",
    demo: "https://note-application-psi.vercel.app",
    repo: "https://github.com/Mahaan10/noteApp",
  },
  {
    id: 3,
    title: "Burger House Cafe & Restaurant",
    features: "React JS + Bootstrap",
    description: "",
    img: "images/burger house.png",
    demo: "https://burger-house-restaurant.vercel.app",
    repo: "https://github.com/Mahaan10/burgerHouse",
  },
  {
    id: 4,
    title: "Young Hunter Photography & Gallery",
    features: "React JS + TailwindCSS",
    description: "",
    img: "images/younghunter.png",
    demo: "https://www.younghunter.net",
    repo: "https://github.com/Mahaan10/younghunter-frontend",
  },
];

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      delay: 400,
    });
  }, []);

  return (
    <div className="pt-[50px] px-5" data-aos="fade-down">
      <div className="flex flex-col gap-y-4 font-bold">
        <p className="italic text-lg">My Work</p>
        <p className="uppercase text-3xl sm:text-5xl mb-10">Recent Project</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="dark:bg-rich-black bg-ash-gray px-4 py-2 rounded-lg"
          >
            <div className="flex flex-col justify-between h-full py-0.5">
              <div className="flex md:flex-row flex-col gap-y-3 gap-x-2 cursor-pointer">
                <div className="md:max-w-52 w-full">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h1 className="mb-4 text-sm">{project.features}</h1>
                  <h1 className="text-lg font-bold">{project.title}</h1>
                </div>
              </div>
              <div className="">
                <Link
                  to={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button className="mt-2 w-full dark:bg-eerie-black bg-gray-300 cursor-pointer rounded-lg py-1.5">
                    Live
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
