import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import DashboardHeader from "../components/header/DashboardHeader";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-50">
        <aside className="w-64 bg-white border-r">
            <Sidebar/>
        </aside>

        <div className="flex flex-col flex-1">
          {/* Header */}
          <header className="h-14 bg-white  px-6 flex items-center">
            <DashboardHeader/>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
