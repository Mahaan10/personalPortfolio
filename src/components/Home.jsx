import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  return (
    <div className="relative container flex items-center">
      <div className="p-[100px] relative">
        <h1
          className="aos-init aos-animate text-7xl font-extrabold uppercase mb-4"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          My name
          <br />
          is
          <b>Mahan</b>
          <span className="stroke-2 stroke-indigo-dye fill-transparent font-extrabold text-5xl">
            <br />
            Tavakoli...
          </span>
        </h1>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Home;
