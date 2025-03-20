import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

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
      <div className="flex justify-between">
        {projects.map((project) => (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            className="cursor-pointer dark:bg-rich-black px-4 py-2 rounded-lg transition"
          >
            <div className="flex justify-center gap-x-2">
              <div className="max-w-60">
                <img src={project.img} alt="" className="w-full rounded-lg" />
              </div>
              <div className="w-64 mx-auto flex items-center justify-evenly flex-col">
                <h1 className="">{project.features}</h1>
                <h1 className="text-2xl font-bold">{project.title}</h1>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
