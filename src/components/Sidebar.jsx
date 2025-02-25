import CustomNavlink from "./CustomNavlink";

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 bottom-0 w-[285px] bg-[rgb(13,11,28)] flex flex-col transition-all duration-300 ease-in-out">
      {/* brand logo! */}
      <ul className="pt-10 flex-1/2 text-neutral-200 pl-3 font-extrabold text-xl">
        <li>
          <CustomNavlink to="/">Home</CustomNavlink>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Sidebar;
