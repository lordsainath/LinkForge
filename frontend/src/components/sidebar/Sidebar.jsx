import { IoLogOutOutline } from "react-icons/io5";
import Logo from "../ui/Logo";
import SidebarLink from "./SidebarLink";
import { MdOutlineDashboard } from "react-icons/md";
import { LuCirclePlus } from "react-icons/lu";
import { MdQrCode2 } from "react-icons/md";
import { PiLinkSimpleBold } from "react-icons/pi";
import { IoIosAnalytics } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="h-full bg-[#f7f8fc] flex flex-col justify-between px-5 py-2">
      <div className="flex flex-col gap-5">
        <div className="">
            <Logo />
        </div>
        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          <SidebarLink to="/dashboard" label="Dashboard" />
          <SidebarLink to="/dashboard/links" label="My Links" />
          <SidebarLink to="/dashboard/qr-codes" label="QR Codes" />
          <SidebarLink to="/dashboard/analytics" label="Analytics" />
          <SidebarLink to="/dashboard/settings" label="Settings" />
        </nav>
      </div>
      {/* Bottom section */}
      <button className="flex items-center gap-2 px-3 py-2 text-lg mb-5 text-gray-600 hover:bg-gray-300 cursor-pointer rounded">
       <span><IoLogOutOutline /></span> <span> Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
