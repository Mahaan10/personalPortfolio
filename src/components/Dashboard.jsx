import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="h-screen flex text-neutral-200">
      <Sidebar />
      <div className="flex-1 overflow-y-auto bg-linear-[177deg] from-0% from-chinese-black to-[190%] to-rich-black">
        <div className="max-w-screen mx-auto flex flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
