import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      delay: 400,
    });
  }, []);

  return (
    <div className="font-ibm pt-[100px] pl-5" data-aos="fade-down">
      <div className="flex flex-col gap-y-4 font-bold">
        <p className="italic text-lg">My Service</p>
        <p className="uppercase text-5xl">My Specialties</p>
      </div>
      <Accordion />
    </div>
  );
}

export default Services;

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Modern & Responsive Web Development",
      content:
        "I create fast, responsive, and mobile-friendly websites used React that adapt seamlessly to different screen sizes. Whether it’s desktop, tablet, or mobile, I ensure your website looks great everywhere. I focus on clean, modern UI design, accessibility, and performance.",
      image: "https://weblogic.b-cdn.net/Weblogic_icon_animation_WEBDESIGN.mp4",
    },
    {
      title: "UI/UX & Component-Based Design",
      content:
        "I build visually appealing, interactive, and user-friendly interfaces with a focus on design consistency and usability. My approach is component-based, meaning every UI element is reusable, making development faster and more scalable.",
      image: "/images/ui-design.gif",
    },
    {
      title: "Performance & API Integration",
      content:
        "I ensure your website runs fast and efficiently by optimizing performance and integrating backend APIs smoothly using Axios and React Query. From real-time data fetching to caching strategies, I make sure everything works seamlessly.",
      image: "/images/performance-optimization.gif",
    },
    {
      title: "Deployment & Best Practices",
      content:
        "I deploy websites with best security practices, ensuring scalability and maintainability. I use version control, CI/CD pipelines, and modern hosting services to keep projects live and running smoothly.",
      image: "/images/deployment.gif",
    },
  ];

  return (
    <div className="mt-8">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-neutral-200 mr-4">
          <button
            className={`w-full flex justify-between items-center p-4 text-3xl font-semibold cursor-pointer uppercase`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span className="text-5xl">{openIndex === index ? "-" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 flex gap-x-20">
              <video
                src={item.image}
                autoPlay="true"
                loop="true"
                className="w-36 rounded-lg"
              ></video>
              <div className="flex flex-col">
                <h1 className="font-bold text-lg mb-6">{item.title}</h1>
                <p>{item.content}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
