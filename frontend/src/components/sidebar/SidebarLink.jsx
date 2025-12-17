import { NavLink } from "react-router-dom";

const SidebarLink = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded text-sm ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      {label}
    </NavLink>
  );
};

export default SidebarLink