import { Link } from "react-router-dom";
import { IoLink } from "react-icons/io5";

const Logo = () => {
  return (
    <Link to="/" className="text-xl flex  items-center gap-2 font-bold">
      <span
        className="text-white px-2 py-2 rounded-xl  bg-linear-to-r from-blue-500 to-teal-400
               hover:from-blue-600 hover:to-teal-500
               transition"
      >
        <IoLink />
      </span>{" "}
      LinkForge
    </Link>
  );
};

export default Logo;
