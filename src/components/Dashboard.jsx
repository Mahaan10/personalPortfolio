import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="h-screen flex text-black-currant dark:text-neutral-200">
      <Sidebar />
      <div className="flex-1 overflow-y-auto -bg-linear-300 from-20% from-platinum to-ash-gray dark:from-eerie-black to-100% dark:to-rich-black transition-colors duration-700">
        <div className="container max-w-screen mx-auto flex flex-col lg:pl-[325px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
