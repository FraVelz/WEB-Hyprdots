import { NavLink } from "react-router-dom";
import { useState } from "react";

function Enlace_R({ children, to, className = "" }) {
  const [visited, setVisited] = useState({});

  const handleClick = () => {
    setVisited((prev) => ({ ...prev, [to]: true }));
  };

  return (
    <NavLink
      to={to}
      draggable="false"
      onClick={handleClick}

      className={({ isActive }) => `
        rounded px-3 py-2
        cursor-pointer
        select-none
        transition-all duration-300
        ${
          isActive
            ? "bg-gray-700" // activo
            : visited[to]
            ? "bg-gray-900" // visitado
            : "border-transparent hover:bg-gray-900" // normal
        }
        ${className}
      `}
    >
      {children}
    </NavLink>
  );
}

export default Enlace_R;
