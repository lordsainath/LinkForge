import { MdOutlineLightMode } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
const DashboardHeader = () => {
  return (
    <div className="w-full flex items-center justify-between">
      
      {/* Search */}
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md">
          <span className="text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search links..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-4 ml-6">
        {/* Theme */}
        <button className="text-gray-600 hover:text-black">
        <MdOutlineLightMode />
        </button>

        {/* Notifications */}
        <button className="text-gray-600 hover:text-black">
          <IoMdNotificationsOutline />
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">
          U
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
