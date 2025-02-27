import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

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
    <div className="font-ibm pt-[80px] pl-5" data-aos="fade-down">
      <div className="flex flex-col gap-y-4 font-bold">
        <p className="italic">My Service</p>
        <p className="uppercase text-5xl">My Specialties</p>
      </div>
    </div>
  );
}

export default Services;
