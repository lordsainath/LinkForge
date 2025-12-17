import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
}
