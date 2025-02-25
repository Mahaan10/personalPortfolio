import { useEffect, useState } from "react";

function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div
      className="absolute w-5 h-5 bg-sky-600 rounded-[50%] pointer-events-none transform translate-3d z-10 transition-all duration-[0.1ms] ease-in-out"
      style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
    ></div>
  );
}

export default CustomCursor;
