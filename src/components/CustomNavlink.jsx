import { NavLink } from "react-router-dom";

function CustomNavlink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "opacity-100" : "opacity-85")}
    >
      {children}
    </NavLink>
  );
}

export default CustomNavlink;
