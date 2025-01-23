import React from "react";
import { useState } from "react";
import {
  Filter,
  ListFilter,
  Home,
  Book,
  Award,
  User,
  FileInput,
  BriefcaseBusiness
} from "lucide-react";
const footer = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("Project");
  return (
    <div>
      <div className="lg:hidden fixed bottom-12 right-[37%] z-20 ">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-1.5 bg-[#E84C3D]  px-2.5 py-1 rounded-full shadow-md border border-gray-200"
        >
          <ListFilter size={16} color="#fcfcfc" />
          <span className="text-[15px] text-white">Filter</span>
        </button>
      </div>

      {isFilterOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30">
          <div className="bg-white absolute bottom-0 w-full rounded-t-2xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Filter Options</h3>
              <button onClick={() => setIsFilterOpen(false)}>✕</button>
            </div>
            {/* Add your filter options here */}
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">Category</label>
                <select className="border rounded-md p-2">
                  <option>All Categories</option>
                  <option>BAHASA SUNDA</option>
                  {/* Add more options */}
                </select>
              </div>
              {/* Add more filter options as needed */}
            </div>
            <button
              className="w-full bg-[#E84C3D] text-white py-3 rounded-lg mt-6"
              onClick={() => setIsFilterOpen(false)}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t rounded-t-lg z-20">
        <nav className="flex justify-around items-center h-10 py-1">
          <button
          onClick={() => setActiveTab("Home")}
            className={`flex flex-col items-center gap-1 py-1 border-t-2 ${
              activeTab === "Home"
                ? "text-[#E84C3D] border-[#E84C3D]"
                : "text-gray-500"
            }`}
          >
            <Home size={20} />
            <span className="text-[8px]">Home</span>
          </button>
          <button
          onClick={() => setActiveTab("Portfolio")}
            className={`flex flex-col items-center gap-1 py-1  border-t-2 ${
              activeTab === "Portfolio"
                ? "text-[#E84C3D] border-[#E84C3D]"
                : "text-gray-500"
            }`}
          >
            <BriefcaseBusiness size={20} />
            <span className="text-[8px]">Portfolio</span>
          </button>
          <button
          onClick={() => setActiveTab("Input")}
            className={`flex flex-col items-center gap-1 py-1   border-t-2 ${
              activeTab === "Input"
                ? "text-[#E84C3D] border-[#E84C3D]"
                : "text-gray-500"
            }`}
          >
            <FileInput size={20} />
            <span className="text-[8px]">Input</span>
          </button>
          <button
          onClick={() => setActiveTab("Profile")}
            className={`flex flex-col items-center gap-1 py-1   border-t-2 ${
              activeTab === "Profile"
                ? "text-[#E84C3D] border-[#E84C3D]"
                : "text-gray-500"
            }`}
          >
            <User size={20} />
            <span className="text-[8px]">Profile</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default footer;
