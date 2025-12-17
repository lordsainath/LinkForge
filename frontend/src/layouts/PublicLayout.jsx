import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
}
