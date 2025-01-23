"use client";
import React, { useState } from "react";
import { Menu, X, Bell, Search, ChevronRight, Filter } from "lucide-react";
import Image from "next/image";
import Tabs from "@/components/tabs";
import Footer from "@/components/footer";

const PortfolioLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const portfolioItems = [
    {
      title: "Kemampuan Merangkum Tulisan",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla Rosa Multivariate Ac Terpis Tempus Lorem ipsum dolor sit amet consectetur...",
      category: "BAHASA SUNDA",
      date: "20th At Basic Semester",
    },
    {
      title: "Kemampuan Merangkum Tulisan",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla Rosa Multivariate Ac Terpis Tempus Lorem ipsum dolor sit amet consectetur...",
      category: "BAHASA SUNDA",
      date: "20th At Basic Semester",
    },
    {
      title: "Kemampuan Merangkum Tulisan",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla Rosa Multivariate Ac Terpis Tempus Lorem ipsum dolor sit amet consectetur...",
      category: "BAHASA SUNDA",
      date: "20th At Basic Semester",
    },
    {
      title: "Kemampuan Merangkum Tulisan",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla Rosa Multivariate Ac Terpis Tempus Lorem ipsum dolor sit amet consectetur...",
      category: "BAHASA SUNDA",
      date: "20th At Basic Semester",
    },
    // Add more items as needed
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-[#E84C3D] transition-all duration-300 fixed h-full hidden sm:block`}
      >
        <div className="flex items-center justify-between p-4">
          <div className={`text-white font-bold ${!isSidebarOpen && "hidden"}`}>
            LOGO
          </div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="sm:hidden text-white hover:bg-[#c0392b] p-2 rounded-lg"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="mt-8">
          <div
            className={`flex items-center px-4 py-2 text-white hover:bg-[#c0392b] cursor-pointer ${
              !isSidebarOpen && "justify-center"
            }`}
          >
            {isSidebarOpen ? "Dashboard" : "D"}
          </div>
          <div
            className={`flex items-center px-4 py-2 text-white bg-[#c0392b] cursor-pointer ${
              !isSidebarOpen && "justify-center"
            }`}
          >
            {isSidebarOpen ? "Portfolio" : "P"}
          </div>
          <div
            className={`flex items-center px-4 py-2 text-white hover:bg-[#c0392b] cursor-pointer ${
              !isSidebarOpen && "justify-center"
            }`}
          >
            {isSidebarOpen ? "Inputs" : "I"}
          </div>
          <div
            className={`flex items-center px-4 py-2 text-white hover:bg-[#c0392b] cursor-pointer ${
              !isSidebarOpen && "justify-center"
            }`}
          >
            {isSidebarOpen ? "Profile" : "P"}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div 
        className={`flex-1 ${
          isSidebarOpen ? "sm:ml-64" : "sm:ml-20"
        } transition-all duration-300`}
      >
        {/* Header */}
        <div className="bg-white p-4 hidden  sm:flex justify-end items-center border-b ">
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-500" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200" />
              <div>
                <div className="text-sm font-medium">Lorem Ips</div>
                <div className="text-xs text-gray-500">Manager</div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Tabs and Search */}

        <div className="bg-white rounded-lg shadow-sm  sm:mt-4  sm:m-4">
          <h1 className=" text-sm  sm:text-xl font-semibold p-3.5 sm:p-4">Portfolio</h1>
          <div className="p-0 sm:p-4 sm:flex justify-between items-center">
            {/* <div className="flex gap-4">
              <button className="text-[#E84C3D] border-b-2 border-[#E84C3D] pb-2">
                Project
              </button>
              <button className="text-gray-500">Saved</button>
              <button className="text-gray-500">Shared</button>
              <button className="text-gray-500">Achievement</button>
            </div> */}

            <div className="">
              <Tabs />
            </div>

            <div className="flex items-center gap-2 m-2 mt-4 sm:m-2">
                <div className="hidden sm:block">
              <button className="px-3 py-1 text-gray-500 border rounded-md flex gap-1 ">
                <span className="px-0 py-1">
                  <Filter />
                </span>
                <span>Filter</span>
              </button>
              </div>
              <div className="relative text-xs">
                <input
                  type="text"
                  placeholder="Search a project"
                  className="pl-4 pr-10 py-2 border rounded-md w-64 mx-1.5 sm:w-64"
                />
                <Search className="w-5 h-5 sm:w-7 sm:h-7 bg-[#E84C3D] rounded-lg p-1.5 sm:p-2 absolute right-3 top-1/2 transform -translate-y-1/2 text-white " />
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className=" px-3.5 py-2  sm:p-4 space-y-4">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white  rounded-lg shadow-sm border "
              >
                <div className="flex justify-between items-start">
                  <div className="flex ">
                    <div className="">
                      <Image
                        className="rounded-l-lg w-[150px] h-[103px] sm:w-full sm:h-full "
                        src="https://cdn.pixabay.com/photo/2015/09/05/07/28/writing-923882_1280.jpg"
                        width={300}
                        height={250}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className=" m-2 sm:m-4 text-xs sm:text-sm">
                      <h3 className="sm:font-medium text-[10px] font-bold  sm:text-lg">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-1 hidden sm:block">  
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center ">
                        <div className="mt-0.5 sm:mt-2 flex flex-col  ">
                          <div className="text-[8px]    font-bold sm:font-medium sm:text-sm text-gray-600">
                            {item.category}
                          </div>
                          <div className="text-[7px]       sm:text-sm text-gray-400  ">
                            {item.date}
                          </div>
                        </div>
                        <div>
                          {/* <button className="bg-[#F0AD4E] text-white px-4 py-2 rounded-md hover:bg-[#ec971f]"> */}
                          <button className="bg-gradient-to-br from-[#F0AD4E] via-[#F0AD4E] to-[#dbb278] text-white sm:px-4 sm:py-2 rounded-md hover:bg-[#d39032]">
                            {/* Add to Cart */}
                            <span className="block sm:hidden px-3 py-0.3 rounded-sm text-[10px]">A</span>
                            <span className="hidden sm:block">Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


<div>
</div>



      </div>

      <Footer />
    </div>
  );
};

export default PortfolioLayout;
