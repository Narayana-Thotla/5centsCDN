"use client";
import React, { useState } from "react";
import {
  // Menu,
  // X,
  // Bell,
  // Search,
  // ChevronRight,
  // Filter,
  LayoutDashboard,
  BriefcaseBusiness,
  FileInput,
  User,
} from "lucide-react";
// import Image from "next/image";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // console.log(setIsSidebarOpen);
  return (
    <div>
      <nav className="mt-8">
        <div
          // className={`flex items-center px-4 py-2 text-white hover:bg-[#c0392b] cursor-pointer ${
          className={`flex items-center px-4 py-2 text-white hover:bg-gradient-to-r from-[#f5836f] to-[#E84C3D] hover:rounded-lg cursor-pointer ${
            !isSidebarOpen && "justify-center"
          }`}
        >
          {isSidebarOpen ? (
            <div className="flex gap-4 items-center">
              <div>
                <LayoutDashboard strokeWidth={2.5} />
              </div>
              <div>Dashboard</div>
            </div>
          ) : (
            "D"
          )}
        </div>
        <div
          className={`flex items-center px-4 py-2 text-white  hover:bg-gradient-to-r from-[#f5836f] to-[#E84C3D] hover:rounded-lg  cursor-pointer ${
            !isSidebarOpen && "justify-center"
          }`}
        >
          {isSidebarOpen ? (
            <div className="flex gap-4 items-center">
              <div>
                <BriefcaseBusiness strokeWidth={2.5} />
              </div>
              <div>Portfolio</div>
            </div>
          ) : (
            "P"
          )}
        </div>
        <div
          className={`flex items-center px-4 py-2 text-white  hover:bg-gradient-to-r from-[#f5836f] to-[#E84C3D] hover:rounded-lg  cursor-pointer ${
            !isSidebarOpen && "justify-center"
          }`}
        >
          {isSidebarOpen ? (
            <div className="flex gap-4 items-center">
              <div>
                <FileInput strokeWidth={2.5} />
              </div>
              <div>Input</div>
            </div>
          ) : (
            "I"
          )}
        </div>
        <div
          className={`flex items-center px-4 py-2 text-white  hover:bg-gradient-to-r from-[#f5836f] to-[#E84C3D] hover:rounded-lg  cursor-pointer ${
            !isSidebarOpen && "justify-center"
          }`}
        >
          {isSidebarOpen ? (
            <div className="flex gap-4 items-center">
              <div>
                <User strokeWidth={2.5} />
              </div>
              <div>Profile</div>
            </div>
          ) : (
            "P"
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
