import React from "react";
import Sidebar from "./Sidebar.tsx";
import Header from "./Header.tsx";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="w-full fixed top-0 bg-white z-10">
        <Header />
      </div>

      {/* Main Content */}
      <div className="flex flex-grow  h-full">
        {/* Sidebar */}
        <div className=" fixed h-full hidden md:flex md:w-64">
          <Sidebar />
        </div>

        {/* Outlet */}
        <div className=" w-full overflow-y-auto md:ml-64 z-0 dark:bg-gray-600 dark:text-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
