import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = "";
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSection = entry.target.id;
          }
        });
        if (visibleSection) setActiveSection(visibleSection);
      },
      {
        root: null, // Observe in the viewport
        threshold: 0.5, // 50% of the section must be visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex text-black-currant dark:text-neutral-200">
      <Sidebar activeSection={activeSection} />
      <div
        className="flex-1 overflow-y-auto"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="container max-w-screen mx-auto flex flex-col lg:pl-[325px] -bg-linear-300 from-20% from-platinum to-ash-gray dark:from-eerie-black to-100% dark:to-rich-black transition-colors duration-700 font-nunito">
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="about" className="min-h-screen">
            <About />
          </section>
          <section id="services" className="min-h-screen">
            <Services />
          </section>
          <section id="portfolio" className="min-h-screen">
            <Portfolio />
          </section>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
