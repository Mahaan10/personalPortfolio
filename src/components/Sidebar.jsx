import CustomNavlink from "./CustomNavlink";

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 bottom-0 w-[285px] bg-[rgb(13,11,28)] flex flex-col transition-all duration-300 ease-in-out font-mono">
      {/* brand logo! */}
      <ul className="pt-10 flex-1/2 text-neutral-200 pl-3 text-xl font-bold uppercase">
        <li>
          <CustomNavlink to="/">Home</CustomNavlink>
        </li>
        <li>
          <CustomNavlink to="/about">About</CustomNavlink>
        </li>
        <li>
          <CustomNavlink to="/services">Services</CustomNavlink>
        </li>
        <li>
          <CustomNavlink to="/portfolio">Portfolio</CustomNavlink>
        </li>
        <li>
          <CustomNavlink to="/contact">Contact</CustomNavlink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
