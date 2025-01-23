"use client";
import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Bell,
  Search,
  ChevronRight,
  Filter,
  // LayoutDashboard,
  // BriefcaseBusiness,
  // FileInput,
  // User,
} from "lucide-react";
import Image from "next/image";
import Tabs from "@/components/tabs";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";

type PortfolioItem = {
  title: string;
  description: string;
  category: string;
  date: string;
  url: string;
};

const PortfolioLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [search, setsearch] = useState("");

  // const [productsInfo, setproductsInfo] = useState<prod_info[]>([{}]);
  const [portfolioItemss, setportfolioItemss] = useState<PortfolioItem[]>([
    { title: "", description: "", category: "", date: "", url: "" },
  ]);

  const portfolioItems = [
    {
      title: "Kemampuan Merangkum Tulisan",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla Rosa Multivariate Ac Terpis Tempus Lorem ipsum dolor sit amet consectetur...",
      category: "BAHASA SUNDA",
      date: "20th At Basic Semester",
      url: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
    },
    {
      title: "Konsep Dasar Matematika",
      description:
        "Pembahasan mengenai konsep-konsep dasar yang menjadi fondasi ilmu matematika seperti aljabar dan geometri...",
      category: "Matematika",
      date: "20th At Basic Semester",
      url: "https://img.freepik.com/free-photo/autumn-season-leafs-plant-scene-generative-ai_188544-7971.jpg?size=626&ext=jpg",
    },
    {
      title: "Pemrograman Dasar dengan Python",
      description:
        "Belajar bahasa pemrograman Python dari awal hingga membuat proyek sederhana seperti kalkulator atau game interaktif...",
      category: "Teknologi",
      date: "20th At Basic Semester",
      url: "https://img.freepik.com/free-photo/beautiful-view-sunset-sea_23-2148019892.jpg?size=626&ext=jpg",
    },
    {
      title: "Sejarah Peradaban Dunia",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla Rosa Multivariate Ac Terpis Tempus Lorem ipsum dolor sit amet consectetur...",
      category: "Sejarah",
      date: "20th At Basic Semester",
      url: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_52683-60691.jpg?size=626&ext=jpg",
    },
    // Add more items as needed
  ];

  
  // console.log(portfolioItemss[0]?.url);

  const fetchData = async () => {
    // const res = await fetch("http://localhost:1337/api/yoliday-datas", {
    // const res = await fetch("http://localhost:1337/api/yoliday-datas", {
    //   cache: "no-cache",
    // });
    // const data = await res.json();
    // console.log(data.data);
    // setportfolioItemss(data.data);
    // if(!res.ok)
       setportfolioItemss(portfolioItems);
    
  };

  // console.log(portfolioItemss);

  const handleSubmit:any = (e: any) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      alert("Search input must be atleast 4 characters!");
      // return toast.error("Search input must be atleast 4 characters!");
    }
    const filteredItems = portfolioItemss.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    console.log("search input:", filteredItems, search);

    if (filteredItems) {
      setportfolioItemss(filteredItems);
      setsearch("");
    } else {
      alert("No such user found!");
    }
  };


  // useEffect(() => {
  //   // fetchData();
  // }, [setportfolioItemss]);
  
useEffect(() => {
  
  setportfolioItemss(portfolioItems);
}, [setportfolioItemss])




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

        <Sidebar />
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
          <h1 className=" text-sm  sm:text-xl font-semibold p-3.5 sm:p-4">
            Portfolio
          </h1>
          <div className="p-0 sm:p-4 sm:flex justify-between items-center">
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
                <form action="" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Search a project"
                    className="pl-4 pr-10 py-2 border rounded-md w-64 mx-1.5 sm:w-64"
                    value={search}
                    onChange={(e) => {
                      setsearch(e.target.value);
                    }}
                  />
                  <button type="submit">
                    <Search className="w-5 h-5 sm:w-7 sm:h-7 bg-[#E84C3D] rounded-lg p-1.5 sm:p-2 absolute right-3 top-1/2 transform -translate-y-1/2 text-white " />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className=" px-3.5 py-2  sm:p-4 space-y-4">
            {portfolioItemss.length > 0 ? (
              portfolioItemss.map((item, index) => (
                <div
                  key={index}
                  className="bg-white  rounded-lg shadow-sm border "
                >
                  <div className="flex justify-between items-start">
                    <div className="flex ">
                      <div className="">
                        <Image
                          className="rounded-l-lg w-[150px] h-[103px] sm:w-full sm:h-full "
                          src={
                            portfolioItemss ? item?.url : "/default_image.jpg"
                          }
                          width={300}
                          height={250}
                          alt="Picture of the author"
                          // priority
                        />
                      </div>
                      <div className=" m-2 sm:m-4 text-xs sm:text-sm">
                        <h3 className="sm:font-medium text-[10px] font-bold  sm:text-lg">
                          {item.title}
                        </h3>
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
                              <span className="block sm:hidden px-3 py-0.3 rounded-sm text-[10px]">
                                A
                              </span>
                              <span className="hidden sm:block">
                                Add to Cart
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>

        <div></div>
      </div>

      <Footer />
    </div>
  );
};

export default PortfolioLayout;
