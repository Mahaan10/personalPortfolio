import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="h-screen flex text-black-currant dark:text-neutral-200">
      <Sidebar />
      <div className="flex-1 overflow-y-auto bg-linear-90 from-0% from-platinum to-ash-gray dark:from-black-russian to-100% dark:to-rich-black transition-colors duration-700">
        <div className="max-w-screen mx-auto flex flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
