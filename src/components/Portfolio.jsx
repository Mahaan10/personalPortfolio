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
    demo: "https://note-application-psi.vercel.app/",
    repo: "https://github.com/Mahaan10/noteApp",
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
    <div className="font-ibm pt-[50px] pl-5" data-aos="fade-down">
      <div className="flex flex-col gap-y-4 font-bold">
        <p className="italic text-lg">My Work</p>
        <p className="uppercase text-5xl mb-10">Recent Project</p>
      </div>
      <div className="flex md:gap-x-4 gap-y-4 flex-col md:flex-row">
        {projects.map((project) => (
          <div
            key={project.id}
            className="dark:bg-rich-black px-4 py-2 rounded-lg"
          >
            <div className="flex flex-col py-0.5">
              <div className="flex gap-x-2 cursor-pointer">
                <div className="max-w-52">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-48">
                  <h1 className="mb-4 text-sm">{project.features}</h1>
                  <h1 className="text-lg font-bold">{project.title}</h1>
                </div>
              </div>
              <Link
                to={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="mt-2 w-full bg-eerie-black cursor-pointer rounded-lg py-1.5">
                  Live
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
