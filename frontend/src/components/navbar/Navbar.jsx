import { useState } from "react";
import { Link } from "react-router-dom";
import { IoLink } from "react-icons/io5";
import NavbarLinks from "./NavbarLinks";
import { MdOutlineLightMode } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b-2 border-[#ecf0fb] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavbarLinks />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="cursor-pointer">
            <MdOutlineLightMode />
          </button>
          <Link to="/login">Log in</Link>
          <Link
            to="/register"
            className="text-white px-3 py-2 rounded-xl bg-linear-to-r from-blue-500 to-teal-400
               hover:from-blue-600 hover:to-teal-500
               transition"
          >
            Start for Free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          <NavbarLinks />
        </div>
      )}
    </nav>
  );
}
