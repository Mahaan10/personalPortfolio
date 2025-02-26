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
      className="custom-cursor"
      style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
    ></div>
  );
}

export default CustomCursor;
