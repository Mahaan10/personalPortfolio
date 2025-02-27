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
  const [openIndex, setOpenIndex] = useState(false);

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
        "Creating visually appealing, intuitive, and reusable UI components to enhance user experience.",
      image: "/images/ui-design.gif",
    },
    {
      title: "Performance & API Integration",
      content:
        "Optimizing websites for speed and efficiency, ensuring smooth API integrations.",
      image: "/images/performance-optimization.gif",
    },
    {
      title: "Deployment & Best Practices",
      content:
        "Using Git, CI/CD, and best practices to deploy and maintain scalable projects.",
      image: "/images/deployment.gif",
    },
  ];

  return (
    <div className="mt-8">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b mr-4">
          <button
            className="w-full flex justify-between items-center p-4 text-3xl font-semibold cursor-pointer uppercase"
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
